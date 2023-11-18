import { styled } from "styled-components";
import { HeaderDialogRoot, HeaderHeading } from "../../Header";
import React from "react";

const Root = styled(HeaderDialogRoot)`
  display: flex;
  width: 464px;
  padding: 24px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;
const Message = styled.div`
  color: var(--gray-700, #374151);
  font-variant-numeric: lining-nums tabular-nums;
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */
`;
const Image = styled.img`
  width: 184px;
  height: 184px;
`;
export interface PageProcessingProp {
  message: React.ReactNode;
  header: React.ReactNode;
}
export const PageProcessing: React.FC<PageProcessingProp> = ({
  message,
  header,
}) => {
  return (
    <Root>
      <HeaderHeading>{header}</HeaderHeading>
      <Image src="/assets/progress.gif" alt="process persons" />
      <Message>{message}</Message>
    </Root>
  );
};
