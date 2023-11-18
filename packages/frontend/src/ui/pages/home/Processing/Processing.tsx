import { FC, ReactNode } from "react";
import { styled } from "styled-components";
import { AppButton } from "ui/base";

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const Header = styled.div`
  color: var(--black-500, #242d3f);
  text-align: center;
  font-family: Satoshi;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  text-align: center;
`;
const Image = styled.img`
  width: 160px;
  height: 160px;
`;
const Footer = styled.div`
  text-align: center;
  color: var(--gray-700, #374151);
  font-variant-numeric: lining-nums tabular-nums;
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */
`;
export interface ProcessingProps {
  header?: ReactNode;
  footer?: ReactNode;
  stage?: "processing" | "completed";
  image?: string;
  onViewToken: () => void;
}
export const Processing: FC<ProcessingProps> = ({
  header,
  footer,
  stage,
  image,
  onViewToken,
}) => {
  return (
    <Root>
      {stage === "processing" && (
        <>
          <Header>{header}</Header>
          <Image src="/assets/loading.gif" alt="process transaction" />
          <Footer>{footer}</Footer>
        </>
      )}
      {stage === "completed" && (
        <>
          <Image src="/assets/success.gif" alt="process transaction" />
          <Header>{header}</Header>
          <Image src={image} alt="process transaction" />
          <AppButton variant="accent" noElevate onClick={onViewToken} fullWidth>
            View token
          </AppButton>
        </>
      )}
    </Root>
  );
};
