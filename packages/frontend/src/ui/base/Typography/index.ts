import styled from "styled-components";
import { IColorScheme } from "ui/utils";

export const TextH2 = styled.h1`
  font-weight: 600;
  height: 23px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: ${({ theme: { colors } }) => (colors as IColorScheme).textColor};
`;
export const TextH1 = styled.h1`
  // width: 170px;
  height: 34px;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 34px;
  color: ${({ theme: { colors } }) => (colors as IColorScheme).textColor};

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const SubHeader = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #374151;
`;
