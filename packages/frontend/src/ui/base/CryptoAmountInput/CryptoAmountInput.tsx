import { FC, MouseEventHandler } from "react";
import { styled } from "styled-components";
import { AppDropdown } from "../Button";
import { Input, InputProps } from "antd";
import { IToken } from "ui/types";

const Root = styled.div`
  display: flex;
  align-items: center;
  border: "solid 1px #cbd5e1";
  border-radius: 8px;
`;
const InputContainer = styled.div`
  display: flex;
  flex: 1;
`;
const Suffix = styled.div`
  display: flex;
  padding: 8px;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  border-radius: 12px;
  background: var(--slate-50, #f8fafc);
  cursor: pointer;
`;
const AmountInput = styled(Input)`
  border-radius: 8px 0 0 8px;
`;
const TokenLabel = styled.div``;
const TokenImage = styled.img``;
export interface CryptoAmountInputProps {
  tokens: IToken[];
  onMax: MouseEventHandler;
  selectedToken?: IToken;
  inputProps: InputProps;
  setToken: (token: IToken) => void;
}
export const CryptoAmountInput: FC<CryptoAmountInputProps> = ({
  tokens,
  selectedToken,
  onMax,
  inputProps,
  setToken,
}) => {
  return (
    <Root>
      <InputContainer>
        <AmountInput
          {...inputProps}
          suffix={<Suffix onClick={onMax}>MAX</Suffix>}
        />
      </InputContainer>
      <AppDropdown
        items={tokens.map((token) => ({
          key: token.address,
          label: (
            <TokenLabel>
              {token.image && <TokenImage src={token.image} />}
              {token.symbol}
            </TokenLabel>
          ),
          onClick() {
            setToken(token);
          },
        }))}
        value={selectedToken?.symbol}
        containerProps={{
          style: {
            borderRadius: "0 8px 8px 0",
            background: "#f1f5f9",
            border: "solid 1px #cbd5e1",
          },
        }}
      />
    </Root>
  );
};
