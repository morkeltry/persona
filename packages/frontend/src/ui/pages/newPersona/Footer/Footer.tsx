import { FC } from "react";
import { styled } from "styled-components";
import { AppButton } from "ui/base";

const Root = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export interface FooterProps {
  continueTo: string;
  onBack: () => void;
  onContinue: () => void;
  isDisabled: boolean;
  isBackDisabled: boolean;
}
export const Footer: FC<FooterProps> = ({
  continueTo,
  onBack,
  onContinue,
  isDisabled,
  isBackDisabled,
}) => {
  return (
    <Root>
      <AppButton
        disabled={isBackDisabled}
        noElevate
        onClick={onBack}
        style={{ width: "fit-content" }}
      >
        Back
      </AppButton>
      <AppButton
        noElevate
        variant="accent"
        onClick={onContinue}
        style={{ display: "flex", flex: 1 }}
        disabled={isDisabled}
      >
        {"Continue " + (continueTo && "to " + continueTo)}
      </AppButton>
    </Root>
  );
};
