import { Input } from "antd";
import styled from "styled-components";
import { getColor } from "ui/utils";

export const Header = styled.div`
  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  gap: 10px;
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
`;
export const HeaderStage = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: var(--gray-50, #f9fafb);

  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;
export const Connections = styled.div<{ notConnected?: boolean }>`
  display: flex;
  width: fit-content;
  padding: 3px 4px 3px 6px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: var(--green-50, #f0fdf4);

  color: var(--green-900, #14532d);
  font-family: Satoshi;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 163.636% */
  ${({ notConnected }) =>
    notConnected &&
    `
    color: #820D24;
    background: #FFF6F8;
  `}
`;

export const Card = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: center;
  gap: 8px; //16px;
  align-self: stretch;
  border-radius: 8px;
  position: relative;
  border: 0.5px solid var(--slate-300, #cbd5e1);
  background: var(--white-100, #fff);
  cursor: pointer;
  ${(props) =>
    props.selected &&
    `
  border: 1px solid var(--primary-main, ${getColor(props, "primarySingle")});
  background: ${getColor(props, "primaryBg")};
  `}
`;
export const Title = styled.div<{ selected: boolean }>`
  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */
  ${(props) =>
    props.selected &&
    `
    color: ${getColor(props, "primarySingle")};
  `}
`;
export const Description = styled.div<{ selected: boolean }>`
  color: var(--gray-500, #6b7280);
  font-family: Satoshi;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
  ${(props) =>
    props.selected &&
    `
    color: ${getColor(props, "primarySingle")};
  `}
`;
export const SearchInput = styled(Input)`
  display: flex;
  padding: 12px 16px;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 24px;
  border: 1px solid var(--slate-300, #cbd5e1);
  background: #f5f7fb;
`;
