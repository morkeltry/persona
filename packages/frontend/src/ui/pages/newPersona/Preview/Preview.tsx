import { Col, Input, Row } from "antd";
import { FC } from "react";
import { styled } from "styled-components";
import { EditIcon, PersonaFrame, TelegramIcon } from "ui/base";
import { platforms } from "ui/pages/home/Mint/Account";
import { IPersona } from "ui/types";
import { AddonBefore, PlatformCard } from "../common";

const Root = styled.div`
  .ant-input-group > .ant-input:first-child,
  .ant-input-group .ant-input-group-addon:first-child {
    width: 157px;
    text-align: start;
    border-radius: 8px 0px 0px 8px;
    border: 1px solid var(--slate-100, #f1f5f9);
    background: var(--slate-100, #f1f5f9);
  }
  .ant-input-group .ant-input {
    color: #000;
  }
`;
const Header = styled.div`
  display: flex;
  padding: 6.5px 16px 5.5px 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 4px;
  background: var(--slate-200, #e2e8f0);

  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
`;
const EditContainer = styled.div`
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 6px;

  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
  cursor: pointer;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;
const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  width: 100%;
`;
const LabelHeader = styled.div``;
const LabelContent = styled.div`
  display: flex;
  padding: 16px;
  min-height: 40px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--slate-300, #cbd5e1);
  background: var(--slate-50, #f8fafc);
  width: 100%;
`;
const Image = styled.img`
  height: 20px;
  width: 20px;
`;
export interface PreviewProps {
  persona: IPersona;
  onEdit: (stepIndex: number) => void;
  background?: string;
}
export const Preview: FC<PreviewProps> = ({ persona, onEdit, background }) => {
  return (
    <Root>
      <Row gutter={[24, 24]}>
        <Col span={12}>
          <Container>
            <Header>
              Avatar{" "}
              <EditContainer onClick={() => onEdit(2)}>
                <EditIcon /> Edit
              </EditContainer>
            </Header>
            <PersonaFrame ensRecord={persona} background={background} />
          </Container>
          <Container style={{ marginTop: 20 }}>
            <Header>
              Basic Detail{" "}
              <EditContainer onClick={() => onEdit(0)}>
                <EditIcon /> Edit
              </EditContainer>
            </Header>
            <LabelContainer>
              <LabelHeader>Subdomain name</LabelHeader>
              <LabelContent>{persona.ens}</LabelContent>
            </LabelContainer>
            <LabelContainer>
              <LabelHeader>Your Bio</LabelHeader>
              <LabelContent style={{ height: 100 }}>
                {persona.texts?.description}
              </LabelContent>
            </LabelContainer>
          </Container>
        </Col>
        <Col span={12}>
          <Container>
            <Header>
              Social Profile{" "}
              <EditContainer onClick={() => onEdit(3)}>
                <EditIcon /> Edit
              </EditContainer>
            </Header>
            <LabelContainer>
              {platforms.map((platform, index) => {
                return (
                  <PlatformCard
                    key={`persona-platform-${index}`}
                    style={{ width: "100%" }}
                  >
                    <Input
                      disabled
                      value={persona?.texts?.[platform.url]}
                      addonBefore={
                        <AddonBefore>
                          {platform.name}{" "}
                          {typeof platform.Icon === "string" ? (
                            <Image src={platform.Icon} alt="persona links" />
                          ) : platform.url === "org.telegram" ? (
                            <TelegramIcon />
                          ) : (
                            <platform.Icon />
                          )}
                        </AddonBefore>
                      }
                      size="large"
                    />
                  </PlatformCard>
                );
              })}
            </LabelContainer>
          </Container>
        </Col>
      </Row>
    </Root>
  );
};
