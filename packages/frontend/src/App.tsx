import { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes, selectConnection, useAppSelector } from "application";
import { AppLayout, ConnectionOverlayVar } from "ui/base";
import { ThemeProvider } from "styled-components";
import { selectSettings } from "application/redux/settings.core";
import { colorScheme } from "ui/utils";
import { useConnection } from "application/hooks";
import { ConfigProvider } from "antd";
function App() {
  const connAction = useConnection();
  const settings = useAppSelector(selectSettings);
  const conn = useAppSelector(selectConnection);
  const { address, persona, wallet } = conn || {};
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colorScheme.light.primary,
        },
      }}
    >
      <ThemeProvider
        theme={{
          type: "light",
          colors: {
            ...(settings.theme ? colorScheme.light : {}),
          },
        }}
      >
        <AppLayout
          theme="light"
          headerProps={{
            address,
            wallet,
            balance: conn.balance,
            ensName: persona?.ens,
            avatar: persona?.nfts?.avatar?.resolved?.image,
            onConnect() {
              connAction.setConnectionOverlayVars({
                modalType: "wallet",
                showModal: true,
              });
            },
            onDisconnect: () => {
              connAction.disconnectWallet();
            },
            hPadding: 0,
          }}
          connOverlayProps={{
            setOverlayVariables(value) {
              connAction.setConnectionOverlayVars(value);
            },
            onConnect(wallet) {
              return connAction.connectWallet(wallet);
            },
            // async getAllPersonas(address) {
            //   personaAction.getAllPersonas(address);
            // },
            onSelectPersona(persona) {
              connAction.connectPersona(persona);
            },
            ...(conn.overlayVars as ConnectionOverlayVar),
          }}
        >
          <Suspense>
            <BrowserRouter>
              <Routes>
                {routes.map((route, index) => {
                  return (
                    <Route
                      key={route.path + "---" + index}
                      element={<route.Component />}
                      path={route.path}
                    />
                  );
                })}
              </Routes>
            </BrowserRouter>
          </Suspense>
        </AppLayout>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
