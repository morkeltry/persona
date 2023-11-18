import { Button as AntButton } from "antd";
import React from "react";
import styled from "styled-components";
import { ITheme } from "ui/types";
import { colorScheme, getColor } from "ui/utils";

const Root = styled.div``;
const Button = styled(AntButton)<{ selected?: boolean }>`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #f2f2f3;
  ${(props) =>
    props.selected &&
    `
    color: #fff;
    background: ${getColor(props, "primary")}
  `}
`;
const Text = styled.div<{ selected?: boolean }>`
  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  ${(props) =>
    props.selected &&
    `
    color: #fff;
  `}
`;
export const ValueSelection = ({
  valueText,
  values,
  value,
  onRemove,
  onAdd,
}: {
  valueText: string;
  values: React.Key[];
  value: string;
  theme: ITheme;
  onRemove: (value: string) => void;
  onAdd: (value: string) => void;
}) => {
  const selected = values?.includes(value);
  return (
    <Root>
      <Button
        selected={selected}
        type="default"
        onClick={() => (selected ? onRemove(value) : onAdd(value))}
      >
        <Text selected={selected}>
          {selected ? "Remove" : "Add"} {valueText}
        </Text>
      </Button>
    </Root>
  );
};
