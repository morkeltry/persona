import { Col, Row } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { AppButton } from "ui/base/Button";
import { BarCodeIcon } from "ui/base/svg";
import { Wallet, WalletName } from "ui/types";
import { IColorScheme } from "ui/utils";

const MediumLogo = styled.img`
  height: 24px;
  width: 24px;
`;
const Root = styled.div`
  display: inline-flex;
  height: 504px;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  border-radius: 24px;
  ${({ theme: { colors } }) => `
    background: ${(colors as IColorScheme).background}
  `}
`;
const InnerText = styled.div<{ selected: boolean }>`
  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  ${({ selected }) =>
    selected &&
    `
    color: #fff;
  `}
`;
const Heading = styled.div`
  color: var(--black-500, #242d3f);
  text-align: center;
  font-family: Satoshi;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
const Info = styled.div`
  color: var(--gray-700, #374151);
  font-variant-numeric: lining-nums tabular-nums;
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */
`;
const Create = styled.span`
  ${({ theme: { colors } }) => `
    color: ${(colors as IColorScheme).primarySingle}
  `}
`;

export { Root as HeaderDialogRoot, Heading as HeaderHeading };
export function WalletSelector({
  onWalletSelect,
  wallets,
}: {
  onWalletSelect: (wallet: WalletName) => void;
  wallets: Wallet[];
}) {
  const [selectedWallet, setSelectedWallet] = useState<WalletName>();
  const newWallet = [...wallets];
  const walletConnectIndex = newWallet.findIndex(
    (item) => item.name === "walletConnect"
  );

  let walletConnect;
  if (newWallet && walletConnectIndex !== -1) {
    walletConnect = newWallet[walletConnectIndex as number] as Wallet;
    newWallet.splice(walletConnectIndex, 1);
  }
  return (
    <Root>
      <Heading>Connect Wallet</Heading>
      <Row gutter={[24, 24]}>
        {newWallet?.map((item, index: number) => {
          return (
            <Col span={12} key={index}>
              <AppButton
                fullWidth
                variant={selectedWallet === item.name ? "primary" : "secondary"}
                style={{
                  padding: "16px 20px 16px 16px",
                  justifyContent: "space-between",
                  borderRadius: 100,
                }}
                onClick={() => setSelectedWallet(item.name)}
              >
                <InnerText selected={selectedWallet === item.name}>
                  {item.label}
                </InnerText>
                <MediumLogo
                  src={`/assets/wallets/${item.name}.svg`}
                  alt={item.name}
                />
              </AppButton>
            </Col>
          );
        })}
        {walletConnect && (
          <Col span={24}>
            <AppButton
              fullWidth
              variant={
                selectedWallet === walletConnect?.name ? "primary" : "secondary"
              }
              style={{
                padding: "16px 20px 16px 16px",
                justifyContent: "space-between",
                borderRadius: 100,
              }}
              onClick={() => setSelectedWallet("walletConnect")}
            >
              <InnerText selected={selectedWallet === walletConnect.name}>
                Others? Scan and connect
              </InnerText>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <MediumLogo
                  src={`/assets/wallets/${walletConnect.name}.svg`}
                  alt={walletConnect.name}
                />
                <BarCodeIcon />
              </div>
            </AppButton>
          </Col>
        )}
      </Row>

      <div style={{ flex: 1, marginTop: 20 }} />
      <AppButton
        style={{ padding: "16px 20px 16px 16px", borderRadius: 100 }}
        fullWidth
        disabled={!selectedWallet}
        variant="primary"
        onClick={() => {
          try {
            onWalletSelect(selectedWallet as WalletName)
          }catch(err) {
            console.error(err);
          }
        }}
      >
        Connect
      </AppButton>
      <Info>
        Don’t have a crypto wallet? <Create>Create one here</Create>
      </Info>
    </Root>
  );
}

export default WalletSelector;
