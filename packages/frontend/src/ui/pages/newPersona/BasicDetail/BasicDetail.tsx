import { FormInstance } from "antd";
import { FC, useRef, useState } from "react";
import { styled } from "styled-components";
import { FORM_FIELD_TYPES, Form } from "ui/base";
import { Footer } from "../Footer";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Label = styled.div<{ available?: boolean }>`
  ${({ available }) => {
    switch (available) {
      case true:
        return `color:#16A34A;`;
      case false:
        return `color: red;`;
      default:
        return `#374151`;
    }
  }}
  font-family: Satoshi;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
`;
export interface IBasicDetail {
  name: string;
  description: string;
}
export interface BasicDetailProps {
  checkNameAvailability: (name: string) => Promise<boolean>;
  onBack: () => void;
  onContinue: () => void;
  nextPage: string;
  basicInfo?: IBasicDetail;
  setBasic: (data: IBasicDetail) => void;
}
export const BasicDetail: FC<BasicDetailProps> = ({
  checkNameAvailability,
  onBack,
  onContinue,
  nextPage,
  basicInfo,
  setBasic,
}) => {
  const [nameIsAvailable, setNameIsAvailable] = useState<boolean>();
  const formRef = useRef<FormInstance<IBasicDetail>>(null);
  return (
    <Root>
      <Form
        formRef={formRef}
        formProps={{
          layout: "vertical",
          style: { padding: 0 },
          initialValues: basicInfo,
          onValuesChange(_, values) {
            setBasic(values);
          },
          onBlur() {
            (async () => {
              setNameIsAvailable(
                await checkNameAvailability(
                  formRef.current?.getFieldValue("name")
                )
              );
            })();
          },
        }}
        items={[
          {
            fieldType: FORM_FIELD_TYPES.TEXT,
            itemProps: {
              name: "name",
              label: <Label>Create a persona.eth subdomain name</Label>,
              extra:
                nameIsAvailable !== undefined &&
                (nameIsAvailable ? (
                  <Label available={true}>Subdomain name is available</Label>
                ) : (
                  <Label available={false}>
                    Subdomain name is not available
                  </Label>
                )),
            },
            fieldProps: {
              size: "large",
              addonAfter: "persona.eth",
              placeholder: "eg. johndoe",
            },
          },
          {
            fieldType: FORM_FIELD_TYPES.TEXT_AREA,
            itemProps: {
              name: "description",
              label: <Label>Short bio that defines your Persona</Label>,
            },
            fieldProps: {
              rows: 4,
            },
          },
        ]}
      />
      <Footer
        {...{
          continueTo: nextPage,
          onBack,
          isBackDisabled: true,
          onContinue,
          isDisabled: !basicInfo?.description || !basicInfo?.name,
        }}
      />
    </Root>
  );
};
