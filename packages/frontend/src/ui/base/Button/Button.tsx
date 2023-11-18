import { Button, ButtonProps, Dropdown, MenuProps } from "antd";

import React from "react";
import styled from "styled-components";
import { IColorScheme } from "ui/utils";
import { DropdownIcon } from "../svg";

export interface AppButtonProps extends ButtonProps {
  fullWidth?: boolean;
  variant?: "primary" | "secondary" | "accent" | "outlined";
}
export const AppButton = styled(Button)<{
  fullWidth?: boolean;
  variant?: "primary" | "secondary" | "accent" | "outlined";
  noElevate?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;

  padding: 10px 20px;
  gap: 8px;
  border-radius: 24px;
  font-weight: 700;
  ${({ noElevate }) =>
    !noElevate &&
    `
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05),
    0px -4px 10px 0px rgba(0, 0, 0, 0.05);`}
  ${({ fullWidth }) => fullWidth && `width: 100%;`}
  ${({ variant, theme: { colors } }) => {
    switch (variant) {
      case "primary":
        return `
          color: #fff;
          background: ${(colors as IColorScheme).primary};
          &:hover{
            color: #fff !important;
            border-color: #fff !important;
            background: ${(colors as IColorScheme).primary};
          }
        `;
      case "secondary":
        return `
          color: #000;
          background: ${(colors as IColorScheme).secondary};
          &:hover{
            color: #000 !important;
            border: solid 2px #000 !important;
            background: ${(colors as IColorScheme).secondary};
          }
        `;
      case "accent":
        return `
          color: #fff;
          background: ${(colors as IColorScheme).accent};
          &:hover {
            color: #fff !important;
            border: solid 2px #fff !important;
            background: ${(colors as IColorScheme).accent};
          }
        `;
      case "outlined":
        return `
          color: #000;
          border: solid 1px;
          background: transparent;
          &:hover {
            color: #000;
            border: solid 2px ${(colors as IColorScheme).primary} !important;
          }
        `;
      default:
        return ``;
    }
  }}
`;

const Root = styled.div`
  display: flex;
  position: relative;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  border-radius: 24px;
  cursor: pointer;
  ${({ theme: { type } }) =>
    type === "dark"
      ? `
      border: 1px solid #273444;
      background: #0D0D0D;
      color: #fff;
      `
      : `
      color: #60646d;
      border: 1px solid var(--slate-300, #CBD5E1);
      background: var(--white-100, #FFF);
  `}
`;
const Title = styled.div`
  position: absolute;
  top: -25%;
  padding: 0px 10px;
  display: flex:
  justify-content: space-between;
  text-align: center;
  font-size: 11px;
  font-family: Satoshi;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
  ${({ theme: { type } }) =>
    type === "dark"
      ? `
    color: #fff;
    background: #0D0D0D;
    `
      : `
    color: #60646d;
    background: var(--white-100, #FFF);
`}
`;

export interface AppButtonDropdownProps {
  title?: React.ReactNode;
  value: React.ReactNode;
  onClick?: React.MouseEventHandler;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  items: MenuProps["items"];
}
export const AppDropdown: React.FC<AppButtonDropdownProps> = ({
  title,
  onClick,
  value = "All",
  containerProps,
  items,
}) => {
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <Root onClick={(e) => e.preventDefault()} {...containerProps}>
        {value}
        {title && <Title>{title}</Title>}
        <DropdownIcon />
      </Root>
    </Dropdown>
  );
};
