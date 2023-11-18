import { FC } from "react";
import { styled } from "styled-components";

const Root = styled.div`
  display: flex;
  height: 40px;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 24px;
  border: 1px solid var(--slate-200, #e2e8f0);

  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
  letter-spacing: -0.14px;
`;
const Level = styled.div<{ score: number }>`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 24px;
  background: var(--yellow-50, #fefce8);

  ${({ score }) => {
    if (score <= 3.5) return "color: #a16207;";
    else if (score <= 7.5) return "color: #ff8300;";
    else return "color: #00ff03;";
  }}
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
  letter-spacing: -0.14px;
`;
const Score = styled.div<{ score: number }>`
  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  letter-spacing: -0.16px;
`;
export interface ReputationScoreProps {
  score: number;
}
export const ReputationScore: FC<ReputationScoreProps> = ({ score }) => {
  const getLevel = (score: number) => {
    if (score <= 3.5) return "Low";
    else if (score <= 7.5) return "Good";
    else if (score > 7.5) return "Excellent";
  };
  return (
    <Root>
      Reputation Score: <Score {...{ score }}>{score}</Score>
      <Level score={score}>{getLevel(score)}</Level>
    </Root>
  );
};
