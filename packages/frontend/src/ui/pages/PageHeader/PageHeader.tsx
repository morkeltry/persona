import { FC, ReactNode } from "react";
import { styled } from "styled-components";
import { AppButton, DownArrowSlantIcon, UpArrowSlantIcon } from "ui/base";
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TxContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const OutlinedBtn = styled(AppButton)`
  display: flex;
  width: 136px;
  height: 54px;
  padding: 16px 16px 16px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 24px;
  border: 1px solid var(--gray-200, #e5e7eb);
  background: var(--white-100, #fff);
`;
const IconContainer = styled.div<{ color: string }>`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var(--gray-50, ${(props) => props.color});
`;
const MintBtn = styled(AppButton)`
  display: flex;
  width: 136px;
  height: 54px;
  padding: 16px 16px 16px 12px;
  justify-content: center;
  align-items: center;
`;
export interface PageHeaderProps {
  children: ReactNode;
  onSend: () => void;
  onReceive: () => void;
  onMint: () => void;
}
export const PageHeader: FC<PageHeaderProps> = ({
  children,
  onSend,
  onMint,
  onReceive,
}) => {
  return (
    <Header>
      {children}
      <TxContainer>
        <OutlinedBtn variant="outlined" onClick={onSend}>
          <IconContainer color="#F9FAFB">
            <DownArrowSlantIcon />
          </IconContainer>
          Send
        </OutlinedBtn>
        <OutlinedBtn variant="outlined" onClick={onReceive}>
          <IconContainer color="#F0FDF4">
            <UpArrowSlantIcon />
          </IconContainer>
          Receive
        </OutlinedBtn>
        <MintBtn variant="accent" onClick={onMint}>
          Mint
        </MintBtn>
      </TxContainer>
    </Header>
  );
};
