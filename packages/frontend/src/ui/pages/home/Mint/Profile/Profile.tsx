import { FC, useState } from "react";
import { styled } from "styled-components";
import { Connections, Header, HeaderStage } from "../common";
import { IPersonaLink, IPlatform, platforms } from "../Account";
import { AppButton, SpotIcon, VerifiedIcon } from "ui/base";
import { getColor } from "ui/utils";
import { Col, Row } from "antd";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Card = styled.div<{ selected: boolean }>`
  display: flex;
  padding: 16px;
  width: 200px;
  height: 118px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  border-radius: 8px;
  border: 0.8px solid var(--slate-300, #cbd5e1);
  background: var(--white-100, #fff);

  //typo
  color: #545400;
  font-family: Satoshi;
  font-size: 12px;
  font-style: normal;
  font-weight: 900;
  line-height: 20px; /* 166.667% */
  ${(props) =>
    props.selected &&
    `
      border-radius: 8px;
      border: 0.8px solid ${getColor(props, "primarySingle")};
      background: ${getColor(props, "primaryBg")};
  `}
`;
const CardRow = styled.div`
  width: 100%;
`;
const CardIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  svg {
    width: 24px;
    height: 24px;
  }
`;

export interface ProfileProps {
  personaLinks?: IPersonaLink[];
  onCancel: () => void;
  onContinue: (platform: IPlatform) => void;
}
export const Profile: FC<ProfileProps> = ({
  personaLinks,
  onCancel,
  onContinue,
}) => {
  const [selectPlatform, setSelectedPlatform] = useState<IPlatform>();
  return (
    <Root>
      <Header>
        Select social profile to mint from
        <HeaderStage>Step 2/4</HeaderStage>
      </Header>
      <Row gutter={[24, 24]}>
        {platforms.map((platform, index) => {
          const conn = personaLinks?.find((link) => link.url === platform.url);
          return (
            <Col span={8} key={`platform-${index}`}>
              <Card
                selected={
                  !!selectPlatform && platform.url === selectPlatform?.url
                }
                onClick={() => !conn && setSelectedPlatform(platform)}
              >
                <CardRow>
                  <CardIconContainer>
                    {typeof platform.Icon === "string" ? (
                      <img src={platform.Icon} alt="platform for personas" />
                    ) : (
                      <platform.Icon />
                    )}
                    <Connections notConnected={!conn}>
                      {conn && <SpotIcon />}{" "}
                      {conn ? "connected" : "not connected"}
                    </Connections>
                  </CardIconContainer>
                </CardRow>
                <CardRow>{platform.name}</CardRow>
                <CardRow>
                  {conn?.value && (
                    <span
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      {conn.value} <VerifiedIcon />
                    </span>
                  )}
                </CardRow>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row style={{ marginTop: 30 }}>
        <AppButton
          variant="accent"
          disabled={!selectPlatform}
          fullWidth
          onClick={() => selectPlatform && onContinue(selectPlatform)}
        >
          Continue
        </AppButton>
      </Row>
      <Row>
        <AppButton variant="secondary" fullWidth onClick={onCancel}>
          Cancel
        </AppButton>
      </Row>
    </Root>
  );
};
