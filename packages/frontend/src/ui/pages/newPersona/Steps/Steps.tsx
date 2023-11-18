import { StepProps, Steps } from "antd";
import { FC, ReactNode } from "react";
import { styled } from "styled-components";
import {
  AppButton,
  BackIcon,
  CompleteIcon,
  CurrentIcon,
  InfoIcon,
  WaitIcon,
} from "ui/base";
import { getColor } from "ui/utils";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  svg {
    width: 30px;
    height: 30px;
  }
  .ant-steps {
    width: fit-content;
  }
  .ant-steps
    .ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-tail::after {
    background: ${(props) => getColor(props, "primary")};
  }
  .ant-steps.ant-steps-label-vertical .ant-steps-item-content {
    margin-top: 0;
  }
  .ant-steps
    .ant-steps-item-wait
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: var(--gray-700, #374151);
    text-align: center;
    font-family: Satoshi;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
  }
  .ant-steps
    .ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: ${(props) => getColor(props, "primarySingle")};
    text-align: center;
    font-family: Satoshi;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
  }
`;
const BackBtn = styled(AppButton)`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: var(--white-100, #fff);
  padding: 0;
  border: solid 1px #cbd5e1;
`;
const Title = styled.div`
  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
  display: flex;
  align-items: baseline;
  gap: 10px;
  svg {
    height: 24px;
    width: 24px;
  }
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Description = styled.div`
  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;
const items = [
  {
    title: "Basic Details",
    description: "",
  },
  {
    title: "Set Guild",
    description: "Different guilds come with special privileges",
  },
  {
    title: "Build Avatar",
    description:
      "Create your own identity with different attributes, accessories, etc",
  },
  { title: "Set Records", description: "Social Profiles" },
  {
    title: "Review",
    description: "Cross-check details before you mint your persona",
  },
];
export { items as stepItems };
const icons: Record<NonNullable<StepProps["status"]>, ReactNode> = {
  error: <></>,
  wait: <WaitIcon />,
  process: <CurrentIcon />,
  finish: <CompleteIcon />,
};
export interface NewPersonaStepsProps {
  statuses: StepProps["status"][];
  onBack: () => void;
}
export const NewPersonaSteps: FC<NewPersonaStepsProps> = ({
  statuses,
  onBack,
}) => {
  return (
    <Root>
      <Row>
        <BackBtn noElevate onClick={onBack}>
          <BackIcon />
        </BackBtn>
        <Title>
          Create Persona <InfoIcon />
        </Title>
      </Row>

      <Steps
        responsive
        labelPlacement="vertical"
        items={items.map(({ title }, index) => {
          const status = statuses[index] || "wait";
          return { title, status, icon: icons[status] };
        })}
      />
    </Root>
  );
};
export const Header: FC<Omit<NewPersonaStepsProps, "onBack">> = ({
  statuses,
}) => {
  const currentIndex = statuses.findIndex((item) => item === "process");
  const { title, description } = items[currentIndex] || {};
  return (
    <Row style={{ flexDirection: "column", alignItems: "flex-start", gap: 6 }}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Row>
  );
};
