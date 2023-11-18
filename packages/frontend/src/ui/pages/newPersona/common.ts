import styled from "styled-components";
import { AppButton } from "ui/base";

export const PlatformCard = styled.div`
  border-radius: 0px 8px 8px 0px;
  border: 1px solid var(--slate-100, #f1f5f9);
  background: var(--white-100, #fff);
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.04);
  svg {
    height: 20px;
    width: 20px;
  }
`;
export const AddonBefore = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
`;
export const LinkBtn = styled(AppButton)<{ isLinked?: boolean }>`
  color: #001971;
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */

  display: flex;
  width: 120px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: ${({ isLinked }) => (isLinked ? "#FFF4F7" : "#f4fbff")};
`;
