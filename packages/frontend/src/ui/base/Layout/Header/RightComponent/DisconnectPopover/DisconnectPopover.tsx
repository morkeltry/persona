import { FC } from "react";
import { styled } from "styled-components";
import {
  CopyIcon,
  DefaultAddressIcon,
  DisconnectIcon,
  EthIcon,
} from "ui/base/svg";
import { utils } from "ui/utils";

const Root = styled.div`
  display: flex;
  width: 417px;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 24px;
  background: var(--white-100, #fff);
`;
const Title = styled.div`
  width: 100%;
  color: var(--black-500, #242d3f);
  font-family: Satoshi;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  margin-bottom: 20px;
`;
const ImageContainer = styled.div`
  width: 136.19px;
  height: 143px;
  position: relative;
`;
const Name = styled.div`
  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
`;
const Description = styled.div`
  color: var(--gray-500, #6b7280);
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;
const ButtonContainer = styled.div`
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  color: #ed5372;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export interface DisconnectPopoverProps {
  ensName?: string;
  address?: string;
  balance: string;
  onDisconnect: () => void;
}
export const DisconnectPopover: FC<DisconnectPopoverProps> = ({
  ensName,
  address,
  balance,
  onDisconnect,
}) => {
  return (
    <Root>
      <Title>Wallet Connected</Title>
      <Body>
        <ImageContainer>
          <DefaultAddressIcon style={{ width: 120, height: 120 }} />
          <EthIcon
            style={{
              position: "absolute",
              bottom: 10,
              right: 20,
              height: 50,
              width: 50,
            }}
          />
        </ImageContainer>
        <Name>
          {ensName || utils.shortAddress(address || "")} <CopyIcon />
        </Name>
        <Description>{balance} ETH</Description>
      </Body>
      <ButtonContainer onClick={onDisconnect}>
        <DisconnectIcon /> Disconnect
      </ButtonContainer>
    </Root>
  );
};
