import { InfoCircleFilled } from "@ant-design/icons";
import { Input } from "antd";
import { FC, useState } from "react";
import { styled } from "styled-components";
import {
  AppButton,
  AppDropdown,
  CryptoAmountInput,
  DefaultAddressIcon,
  EthIcon,
} from "ui/base";
import { IPersona, IToken } from "ui/types";
import { Label, LabelSpaced, Row } from "../common";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const DropdownBtn = styled(AppDropdown)`
  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */

  border-radius: 8px;
  border: 1px solid var(--slate-300, #cbd5e1);
  background: var(--slate-100, #f1f5f9);
`;
const BalanceLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export interface SendTransferProps {
  balance: number;
  fiatBalance: number;
  onCancel: () => void;
  onSend: (tx: ISendInfo) => void;
  tokens: IToken[];
  personas: IPersona[];
}
export interface ISendInfo {
  from: string;
  to: string;
  amount: string;
  tokenAddress: string;
}
/*[
  {symbol: "ETH", image: "", name: "ETH", address: "0x"}
]*/

export const SendTransfer: FC<SendTransferProps> = ({
  balance,
  fiatBalance,
  onCancel,
  onSend,
  tokens,
  personas,
}) => {
  const [from, setFrom] = useState<string>(personas[0]?.ens);
  const [to, setTo] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [token, setToken] = useState<IToken>(tokens[0]);
  return (
    <Root>
      <Row>
        <Label>You will be sending from</Label>
        <DropdownBtn
          items={personas.map((persona) => {
            return {
              label: persona.ens,
              key: persona.ens,
              onClick(info) {
                setFrom(info.key);
              },
            };
          })}
          value={from}
          containerProps={{
            style: {
              borderRadius: 8,
              background: "#f1f5f9",
              border: "solid 1px #cbd5e1",
            },
          }}
        />
      </Row>
      <Row>
        <Label>
          Enter Address or ENS Name <InfoCircleFilled />
        </Label>
        <Input
          placeholder="Enter address or ENS name"
          size="large"
          onChange={({ target: { value } }) => setTo(value)}
          addonBefore={<DefaultAddressIcon />} //TODO: dynamically replace with avatar
        />
      </Row>
      <Row>
        <Label>Enter Amount to Send</Label>
        <CryptoAmountInput
          tokens={tokens}
          onMax={() => {
            setAmount(balance.toString());
          }}
          selectedToken={token}
          inputProps={{
            type: "number",
            value: amount,
            onChange({ target: { value } }) {
              setAmount(value);
            },
          }}
          setToken={setToken}
        />
      </Row>
      <Row>
        <LabelSpaced>
          Your Balance
          <BalanceLabel>
            <EthIcon />
            {balance} ETH ${fiatBalance}
          </BalanceLabel>
        </LabelSpaced>
      </Row>
      <div style={{ marginTop: 20 }} />
      <AppButton
        variant="accent"
        disabled={!Boolean(from && to && amount)}
        onClick={() => {
          onSend({ to, from, tokenAddress: token?.address, amount });
        }}
        noElevate
      >
        Send
      </AppButton>
      <AppButton variant="secondary" onClick={onCancel} noElevate>
        Cancel
      </AppButton>
    </Root>
  );
};
