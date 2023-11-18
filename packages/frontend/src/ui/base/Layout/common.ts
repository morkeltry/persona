import styled from "styled-components";
import { getColor } from "ui/utils";

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  gap: 20px;
  & svg > path {
    fill: ${(props) => getColor(props, "primary")};
  }
`;
export const Logo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 45px;
  background-color: ${(props) => getColor(props, "primary")};
`;
export const Name = styled.div`
  font-family: Satoshi;
  font-size: 29.779px;
  font-style: italic;
  font-weight: 700;
  line-height: normal;
  background: var(
    --primary-main,
    linear-gradient(180deg, #ed5372 0%, #bd2846 100%, #e33659 100%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
