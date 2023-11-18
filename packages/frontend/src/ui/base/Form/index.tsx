import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import {
  Button,
  ButtonProps,
  DatePicker,
  DatePickerProps,
  Form as AntForm,
  Input,
  InputProps,
  Select,
  SelectProps,
  Switch,
  SwitchProps,
  TreeSelect,
  TreeSelectProps,
  Row,
  Col,
  ColProps,
} from "antd";
import type { FormInstance, FormItemProps, FormProps } from "antd/es/form";
import { TextAreaProps } from "antd/es/input";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { NamePath } from "antd/es/form/interface";
import { FileDragIn, FileDragProps } from "./Upload";

const { Option } = Select;

type SelectField = {
  field: SelectProps;
  options: { value: string; label: string }[];
};
export enum FORM_FIELD_TYPES {
  DIV,
  TEXT,
  RADIO,
  CHECK,
  SELECT,
  FIELDS,
  BUTTON,
  DATE,
  TEXT_AREA,
  SWITCH,
  TREE_SELECT,
  HIDDEN,
  LIST,
  UPLOAD,
}
type BtnProps = ButtonProps;
export type IFieldProps =
  | InputProps
  | TextAreaProps
  | DatePickerProps
  | SelectField
  | BtnProps
  | SwitchProps
  | TreeSelectProps
  | FileDragProps
  | HTMLDIVProps;
export type HTMLDIVProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export interface IFieldsProps {
  fieldProps: IFieldProps;
  fieldType: FORM_FIELD_TYPES;
  itemProps?: FormItemProps;
  colProps?: ColProps;
}
export interface IFormItems {
  itemProps: FormItemProps;
  fieldProps?: IFieldProps | IFieldsProps[] | IFormItems;
  itemFunc?: (
    props?: Partial<FormInstance>,
    fieldForm?: React.FC<IFormItems>,
    fieldData?: IFormItems
  ) => React.ReactNode | null;
  fieldType: FORM_FIELD_TYPES;
  form?: FormInstance;
  isEdit?: boolean;
}
export const FormFields: React.FC<IFormItems> = ({
  fieldType,
  fieldProps,
  itemProps,
  itemFunc,
  form,
  isEdit,
}) => {
  const { getFieldValue } = form || {};
  switch (fieldType) {
    case FORM_FIELD_TYPES.DIV:
      return (
        <AntForm.Item {...itemProps}>
          <div {...(fieldProps as HTMLDIVProps)} />
        </AntForm.Item>
      );
    case FORM_FIELD_TYPES.HIDDEN:
      return (
        <AntForm.Item noStyle {...itemProps}>
          {(props) => {
            return itemFunc?.(props, FormFields, fieldProps as IFormItems);
          }}
        </AntForm.Item>
      );
    case FORM_FIELD_TYPES.TEXT_AREA:
      return (
        <AntForm.Item {...itemProps}>
          <Input.TextArea {...(fieldProps as TextAreaProps)} />
        </AntForm.Item>
      );
    case FORM_FIELD_TYPES.TEXT:
      return (
        <AntForm.Item {...itemProps}>
          <Input {...(fieldProps as InputProps)} />
        </AntForm.Item>
      );
    case FORM_FIELD_TYPES.UPLOAD:
      return (
        <AntForm.Item {...itemProps}>
          <FileDragIn {...(fieldProps as FileDragProps)} />
        </AntForm.Item>
      );
    case FORM_FIELD_TYPES.TREE_SELECT:
      return (
        <AntForm.Item {...itemProps}>
          <TreeSelect {...(fieldProps as TreeSelectProps)} />
        </AntForm.Item>
      );
    case FORM_FIELD_TYPES.SWITCH:
      return (
        <AntForm.Item {...itemProps}>
          <Switch
            {...(fieldProps as SwitchProps)}
            checked={getFieldValue?.(itemProps?.name as NamePath)}
          />
        </AntForm.Item>
      );
    case FORM_FIELD_TYPES.DATE:
      return (
        <AntForm.Item {...itemProps}>
          <DatePicker {...(fieldProps as DatePickerProps)} />
        </AntForm.Item>
      );
    case FORM_FIELD_TYPES.BUTTON:
      return (
        <AntForm.Item {...itemProps}>
          <Button {...(fieldProps as BtnProps)}>
            {(fieldProps as BtnProps).children}
          </Button>
        </AntForm.Item>
      );
    case FORM_FIELD_TYPES.SELECT:
      return (
        <AntForm.Item {...itemProps}>
          <Select allowClear {...(fieldProps as SelectField).field}>
            {(fieldProps as SelectField)?.options?.map(
              (option, optionIndex) => {
                return (
                  <Option
                    key={`selectoption--${optionIndex}`}
                    value={option.value}
                  >
                    {option.label}
                  </Option>
                );
              }
            )}
          </Select>
        </AntForm.Item>
      );
    case FORM_FIELD_TYPES.FIELDS:
      return (
        <AntForm.Item {...itemProps}>
          <Row gutter={24}>
            {(fieldProps as IFieldsProps[])?.map((field, index) => {
              return (
                <Col key={`field-col-${index}`} {...field.colProps}>
                  <FormFields
                    {...field}
                    fieldType={field.fieldType}
                    fieldProps={field.fieldProps}
                    itemProps={field.itemProps as FormItemProps}
                  />
                </Col>
              );
            })}
          </Row>
        </AntForm.Item>
      );
    case FORM_FIELD_TYPES.LIST:
      return (
        <AntForm.List name={`${itemProps.name}-list`}>
          {(fields, { add, remove }) => (
            <>
              {fields?.map((listField) => {
                return (
                  <div
                    key={listField.key}
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    {(fieldProps as IFieldsProps[])?.map((field, index) => {
                      return (
                        <FormFields
                          key={index}
                          fieldType={field.fieldType}
                          fieldProps={{
                            ...field.fieldProps,
                            style: { width: "200px" },
                          }}
                          itemProps={{
                            ...field.itemProps,
                            ...listField,
                            name: [
                              listField.name,
                              field.itemProps?.name as string,
                            ],
                          }}
                        />
                      );
                    })}
                    {!isEdit && (
                      <AntForm.Item>
                        <MinusCircleOutlined
                          onClick={() => remove(listField.name)}
                        />
                      </AntForm.Item>
                    )}
                  </div>
                );
              })}
              <AntForm.Item wrapperCol={{ offset: 20 }}>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                  disabled={isEdit}
                >
                  Add item
                </Button>
              </AntForm.Item>
            </>
          )}
        </AntForm.List>
      );
  }
  return null;
};
export interface IFormProps {
  formRef: React.Ref<FormInstance<any>>;
  formProps?: FormProps;
  items?: IFormItems[];
  getForm?: (form: FormInstance) => void;
  isEdit?: boolean;
}

export const Form: React.FC<IFormProps> = ({
  formProps,
  formRef,
  items,
  getForm,
  isEdit,
}) => {
  const [form] = AntForm.useForm();
  if (getForm) {
    getForm(form);
  }

  return (
    <AntForm
      ref={formRef}
      style={{ justifyContent: "center", padding: 20 /* maxWidth: 600 */ }}
      // labelCol={{ span: 8 }}
      // wrapperCol={{ span: 14 }}
      {...formProps}
      form={form}
    >
      {items?.map((item, index) => {
        return <FormFields key={index} {...item} form={form} isEdit={isEdit} />;
      })}
    </AntForm>
  );
};
