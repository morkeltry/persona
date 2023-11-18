import React from "react";
import { styled } from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const Title = styled.div`
  color: var(--white-white, #fff);
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */
`;
const Description = styled.div`
  color: var(--white-white, #fff);
  font-family: Satoshi;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
`;
export interface TootTipContentProps {
  title: string;
  description: string;
}
export const ToolTipContent: React.FC<TootTipContentProps> = ({
  title,
  description,
}) => {
  return (
    <Root>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Root>
  );
};
