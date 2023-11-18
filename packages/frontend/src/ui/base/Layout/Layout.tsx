import { Layout as AntLayout, Divider } from "antd";
import React from "react";
import styled from "styled-components";
import { AppHeaderProps, AppHeader } from "./Header/Header";

import { ITheme } from "ui/types";

import { appLayoutHeights, colorScheme } from "ui/utils";
import { ConnectionOverlay, ConnectionOverlayProps } from "./ConnectionOverlay";
import { Footer } from "./Footer";

const Layout = styled(AntLayout)`
  .ant-layout-sider {
    box-shadow: 0px 0px 5px 1px #d0d0d0;
  }
`;
const { Content } = AntLayout;
const StyledContent = styled(Content)`
  height: calc(100vh - ${appLayoutHeights.header}px);
  overflow: scroll;
  min-height: 340px;
  margin-top: 50px;
`;
export interface AppLayoutProps {
  children: React.ReactNode;
  headerProps: Omit<AppHeaderProps, "theme">;
  connOverlayProps: ConnectionOverlayProps;
  theme: ITheme;
}
export const AppLayout = function ({
  children,
  headerProps,
  theme,
  connOverlayProps,
}: AppLayoutProps) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AntLayout
        className="site-layout"
        style={{
          minHeight: "100%",
          background: colorScheme[theme].background,
        }}
      >
        <AppHeader {...headerProps} hPadding={80} />
        <StyledContent style={{ padding: "0px 80px", minHeight: 950 }}>
          {children}
        </StyledContent>
        <Divider />
        <Footer />
      </AntLayout>
      <ConnectionOverlay {...connOverlayProps} />
    </Layout>
  );
};
