import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  overflow: scroll;
  /* Hide scrollbar for WebKit browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 0.5em;
  }
`;
export const AssetMenu = styled.div<{ selected: boolean }>`
  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: fit-content;
  min-width: 170px;
  cursor: pointer;

  color: var(--gray-900, #000);
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  ${({ selected }) =>
    selected &&
    `
    border-radius: 8px;
    background: #F3F3F3;
    font-weight: bold;
  `}
`;
