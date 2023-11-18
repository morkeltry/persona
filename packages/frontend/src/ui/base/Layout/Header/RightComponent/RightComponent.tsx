import { Dropdown, Popover } from "antd";
import React, { useState } from "react";
import { styled } from "styled-components";
import { AppButton } from "ui/base/Button";
import { ConnectedIcon, DefaultAddressIcon, MetamaskIcon } from "ui/base/svg";
import { WalletName } from "ui/types";
import { utils } from "ui/utils";
import { DisconnectPopover, DisconnectPopoverProps } from "./DisconnectPopover";
const Root = styled.div`
  display: flex;
  align-items: center;
  .ant-dropdown .ant-dropdown-menu-item:hover {
    background: inherit !important;
  }
`;
export const ImageContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: #f5dee3;
  border-radius: 100px;
  margin-right: 10px;
`;
export const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
`;
const WalletContainer = styled.div`
  margin-left: 5px;
  display: flex;
  // height: 56px;
  padding: 10px;
  align-items: center;
  gap: 10px;
  border-radius: 24px;
  background: var(--background-dark-200, #0b1323);
  position: relative;
`;
export interface RightComponentProps {
  address?: string;
  avatar?: string;
  ensName?: string;
  onDisconnect: () => void;
  onConnect?: React.MouseEventHandler;
  wallet?: WalletName;
  balance: DisconnectPopoverProps["balance"];
}
export const RightComponent: React.FC<RightComponentProps> = ({
  onDisconnect,
  onConnect,
  address,
  wallet,
  avatar,
  ensName,
  balance,
}) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <Root>
      {address ? (
        <>
          <AppButton variant="accent">
            {avatar && (
              <ImageContainer>
                <Image src={avatar} />
              </ImageContainer>
            )}
            <DefaultAddressIcon />
            {ensName || utils.shortAddress(address)}
          </AppButton>
          <Popover
            open={open}
            onOpenChange={(value) => setOpen(value)}
            content={
              <DisconnectPopover
                {...{ address, ensName, onDisconnect, balance }}
              />
            }
            trigger="click"
          >
            <WalletContainer>
              <MetamaskIcon />
              <ConnectedIcon
                style={{ position: "absolute", bottom: 8, right: 8 }}
              />
            </WalletContainer>
          </Popover>
        </>
      ) : (
        <AppButton variant="accent" onClick={onConnect}>
          Connect Wallet
        </AppButton>
      )}
    </Root>
  );
};
