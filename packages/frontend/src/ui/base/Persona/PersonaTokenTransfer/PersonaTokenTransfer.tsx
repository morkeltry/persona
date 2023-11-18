import { InfoCircleFilled } from "@ant-design/icons";
import { Input, Select, Slider, Tooltip } from "antd";
import { TransactionConfig } from "web3-core";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { AppButton, EthIcon, FeaturedIcon, ToolTipContent } from "ui/base";
import { IPersona, IToken, TX_SPEED } from "ui/types";
import { SliderMarks } from "antd/es/slider";

const boxWidth = 496;
const Root = styled.div`
  display: flex;
  width: ${boxWidth}px;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  border-radius: 24px;
  background: var(--white-100, #fff);
`;
const Title = styled.div`
  color: var(--black-500, #242d3f);
  text-align: center;
  font-family: Satoshi;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  justify-self: center;
  width: 100%;
  display: flex;
`;
const Profile = styled.div`
  display: flex;
  padding: 0px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;
const Avatar = styled.img`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 3.787px;
  border: 2.367px solid var(--white-100, #fff);
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.16);

  cursor: pointer;
`;
const Name = styled.div`
  color: var(--gray-700, #374151);
  leading-trim: both;
  text-edge: cap;
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
`;
const Address = styled.div`
  color: var(--gray-700, #374151);
  text-align: center;
  font-family: Satoshi;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;

  .ant-slider-mark-text {
  }
  .ant-slider .ant-slider-handle::after {
    width: 24px;
    height: 24px;
    background: #374151;
    top: -90%;
  }
`;
const ContentLabel = styled.div`
  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;
const ContentValue = styled.div<{ light?: boolean }>`
  display: flex;
  padding: 8px;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;

  border-radius: 12px;
  background: var(
    --slate-200,
    ${({ light }) => (light ? "#F8FAFC" : "#e2e8f0")}
  );
`;
const InputContainer = styled.div``;
const StyledInput = styled(Input)``;
const MarkLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  > span > svg path {
    fill = #6B7280
  }
`;

const slideMark: SliderMarks = {
  0: TX_SPEED.DEFAULT,
  50: TX_SPEED.FAST,
  100: TX_SPEED.SUPER_FAST,
};
export interface PersonaTokenTransferProps {
  persona: IPersona;
  balance: string;
  tokens: IToken[];
  onConvertToFiat: (crypto: "eth", value: string) => Promise<string>;
  onGetTxFee: (
    callback: (
      address: string,
      getTxFee: (config: TransactionConfig) => Promise<string>
    ) => void
  ) => void;
  onSendToken: (persona: IPersona, value: string) => void;
  onCancel: () => void;
  openProfile: (persona: IPersona) => void;
}
export const PersonaTokenTransfer: React.FC<PersonaTokenTransferProps> = ({
  persona,
  balance,
  onConvertToFiat,
  onGetTxFee,
  tokens,
  onSendToken,
  onCancel,
  openProfile,
}) => {
  const [amount, setAmount] = useState<string>();
  const [txSpeed, setTxSpeed] = useState<TX_SPEED>(TX_SPEED.DEFAULT);
  const [token, setToken] = useState<IToken>(tokens?.[0]);
  const [fiat, setFiat] = useState<{ amount: string; fee: string }>({
    amount: "0",
    fee: "0",
  });
  const getTxSpeed = (slide: number): TX_SPEED => {
    switch (slide) {
      case 50:
        return TX_SPEED.FAST;
      case 100:
        return TX_SPEED.SUPER_FAST;
      default:
        return TX_SPEED.DEFAULT;
    }
  };
  useEffect(() => {
    onGetTxFee(async (address, getTxSpeed) => {
      const txFee = await getTxSpeed({
        to: persona.address,
        from: address,
        value: amount,
      });
      const txFeeFiat = await onConvertToFiat("eth", txFee);
      setFiat((state) => ({ ...state, fee: txFeeFiat }));
    });
  }, [txSpeed]);
  useEffect(() => {
    if (amount) {
      onConvertToFiat("eth", String(amount))
        .then((value) => setFiat((state) => ({ ...state, fee: value })))
        .catch(console.error);

      onGetTxFee(async (address, getTxSpeed) => {
        const txFee = await getTxSpeed({
          to: persona.address,
          from: address,
          value: amount,
        });
        const txFeeFiat = await onConvertToFiat("eth", txFee);
        setFiat((state) => ({ ...state, fee: txFeeFiat }));
      });
    }
  }, [amount]);
  useEffect(() => {
    if (balance) {
      onConvertToFiat("eth", balance)
        .then((value) => setFiat((state) => ({ ...state, amount: value })))
        .catch(console.error);
    }
  }, [balance]);
  const { ens, address, nfts } = persona;
  return (
    <Root>
      <Title>Send Crypto</Title>
      <Profile>
        <Avatar
          src={nfts?.avatar?.resolved?.image}
          alt="persona avatar web3 profile"
          onClick={() => openProfile(persona)}
        />
        <Name>{ens}</Name>
        <Address>{address}</Address>
      </Profile>
      <InputContainer>
        <Content>
          <ContentLabel>Enter Amount to Send</ContentLabel>
          <AppButton type="link">MAX</AppButton>
        </Content>
        <StyledInput
          type="number"
          onChange={({ target: { value } }) => {
            setAmount(value);
          }}
          addonAfter={
            <Select
              defaultValue={token?.address}
              //TODO: Import token here
              options={tokens?.map((token) => ({
                value: token.address,
                label: token.symbol,
              }))}
              style={{ width: 70 }}
            />
          }
        />
      </InputContainer>
      <Content>
        <ContentLabel>Your Balance</ContentLabel>
        <ContentValue>
          <EthIcon /> {balance} ETH (${fiat.amount}){" "}
        </ContentValue>
      </Content>
      <Content>
        <ContentLabel>
          Transaction Fee{" "}
          <Tooltip
            title={
              <ToolTipContent
                title="Transaction Fee"
                description="Transaction fees apply when you perform any action on the blockchain, whether it's as straightforward as transferring cryptocurrency or digital assets to another user."
              />
            }
          >
            <InfoCircleFilled />
          </Tooltip>
        </ContentLabel>
        <ContentValue light>
          <EthIcon /> {balance} ETH (${fiat.fee}){" "}
        </ContentValue>
      </Content>
      <Content>
        <ContentLabel>
          Transaction Speed{" "}
          <Tooltip
            title={
              <ToolTipContent
                title="Transaction Speed"
                description="You can increase the chances of your transaction being processed faster and this slightly requires a higher transaction fee."
              />
            }
          >
            <InfoCircleFilled />
          </Tooltip>
        </ContentLabel>
      </Content>
      <Content style={{ justifyContent: "center" }}>
        <div style={{ width: "100%" }}>
          <Slider
            // marks={slideMark}
            style={{ width: "99%" }}
            defaultValue={0}
            step={50}
            onChange={(value) => setTxSpeed(getTxSpeed(value))}
          />
          <MarkLabel>
            <span>Default</span>
            <span style={{ marginLeft: 35 }}>Fast</span>
            <span>
              Super fast! <FeaturedIcon />{" "}
            </span>
          </MarkLabel>
        </div>
      </Content>
      <AppButton
        variant="accent"
        fullWidth
        style={{ marginTop: 10 }}
        disabled={amount === "0"}
        onClick={() => {
          if (token && Number(amount) > 0) {
            onSendToken(persona, amount as string);
          }
        }}
      >
        {token ? `Send ${token.symbol}` : "Select Token"}
      </AppButton>
      <AppButton variant="secondary" fullWidth onClick={onCancel}>
        Cancel
      </AppButton>
    </Root>
  );
};
