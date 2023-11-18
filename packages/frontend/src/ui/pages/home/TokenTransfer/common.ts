import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Label = styled.div`
  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;
export const LabelSpaced = styled(Label)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
