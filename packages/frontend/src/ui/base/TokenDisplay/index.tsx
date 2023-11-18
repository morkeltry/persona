import React from "react";
import styled from "styled-components";
import { SubHeader, TextH2 } from "ui/base";

const Root = styled.div`
  display: flex;
  align-items: center;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
const Img = styled.img`
  width: 26px;
  height: 25px;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled(TextH2)`
  font-size: 13px;
  margin: 0px;
`;
const SubTitle = styled(SubHeader)`
  font-size: 10px;
`;
export interface TokenDisplayProps {
  imageUrl?: string;
  name: string;
  symbol: string;
}
export const TokenDisplay = ({ imageUrl, name, symbol }: TokenDisplayProps) => {
  return (
    <Root>
      <ImageContainer>
        <Img src={imageUrl} />
      </ImageContainer>
      <Body>
        <Title>{symbol}</Title>
        <SubTitle>{name}</SubTitle>
      </Body>
    </Root>
  );
};
