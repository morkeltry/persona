import { Layout, theme } from "antd";
import React from "react";
import styled from "styled-components";
import {
  RightComponent,
  RightComponentProps,
} from "./RightComponent/RightComponent";
import { IColorScheme, appLayoutHeights, getColor } from "ui/utils";
import { Brand, Logo, Name } from "../common";
import { SearchInput } from "ui/pages/home/Mint/common";
import { SearchIcon } from "ui/base/svg";

const { Header: AntHeader } = Layout;

const StyledHeader = styled(AntHeader)<{ hPadding: number }>`
  height: ${appLayoutHeights.header}px;
  padding-inline: 16px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  padding: 10px ${(props) => props.hPadding}px !important;
  background: ${({ theme: { colors } }) => (colors as IColorScheme).background};
  .ant-input-affix-wrapper > input.ant-input {
    background: #f5f7fb;
  }
`;
export interface AppHeaderProps extends RightComponentProps {
  hPadding: number;
}
export const AppHeader: React.FC<AppHeaderProps> = function ({
  hPadding,
  ...props
}) {
  return (
    <StyledHeader hPadding={hPadding} style={{ boxShadow: "0px 0px 1px gray" }}>
      <Brand>
        <Logo src="/assets/logo.png" alt="persona" />
        <Name>persona</Name>
      </Brand>
      <SearchInput
        style={{ width: "auto", maxWidth: 500 }}
        prefix={<SearchIcon />}
      />
      {RightComponent && <RightComponent {...props} />}
    </StyledHeader>
  );
};
