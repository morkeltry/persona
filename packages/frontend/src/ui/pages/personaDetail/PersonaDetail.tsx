import { FC, useEffect, useState } from "react";
import { styled } from "styled-components";
import { PageHeader } from "../PageHeader";
import { AppButton, BackIcon, ForwardIcon } from "ui/base";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { routeNames } from "application";
import { Col, Row, Tabs } from "antd";
import { PersonCard } from "../home/PersonCard";
import { TabContainer } from "ui/utils";
import { Profile, ProfileProps } from "./Profile";
import { IPersona } from "ui/types";
import { Soulbound, SoulboundProps } from "./Soulbound";
import { Swag, SwagProps } from "./Swag";

const Root = styled.div`
  .ant-input-group > .ant-input:first-child,
  .ant-input-group .ant-input-group-addon:first-child {
    width: 157px;
    text-align: start;
    border-radius: 8px 0px 0px 8px;
    border: 1px solid var(--slate-100, #f1f5f9);
    background: var(--slate-100, #f1f5f9);
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
const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */
`;
const Body = styled.div`
  margin-top: 50px;
`;
const PersonNav = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  width: 100%;
  svg {
    width: 32px;
    height: 32px;
    path {
      fill: #374151;
      stroke: #374151;
    }
  }
`;
export interface PersonaDetailProps {
  personas: IPersona[];
  profileProps: Omit<ProfileProps, "records" | "personas">;
  soulboundProps: SoulboundProps;
  swagProps: SwagProps;
}
type ITab = "account" | "soul" | "swag" | "token";
export const PersonaDetail: FC<PersonaDetailProps> = ({
  personas,
  profileProps,
  soulboundProps,
  swagProps,
}) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const persona: IPersona = state?.persona;
  const { name } = useParams();
  const index = personas?.findIndex((item) => item.ens === persona?.ens);
  const [personaIndex, setPersonaIndex] = useState<number>(index);
  const [tab, setTab] = useState<ITab>("account");
  useEffect(() => {
    if (!state || !persona || !personas || personas.length === 0)
      navigate(routeNames.home);
  }, [state, JSON.stringify(persona)]);
  return (
    <Root>
      <PageHeader {...{ onMint() {}, onReceive() {}, onSend() {} }}>
        <Container>
          <BackBtn
            noElevate
            onClick={() => {
              navigate(routeNames.home, {
                replace: true,
                state: { from: routeNames.persona },
              });
            }}
          >
            <BackIcon />
          </BackBtn>
          Back to my personas
        </Container>
      </PageHeader>
      <Body>
        <Row gutter={24}>
          <Col
            span={10}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: 20,
            }}
          >
            {persona && (
              <PersonCard ensRecord={personas[personaIndex]} size="large" />
            )}
            {personas && personas.length > 1 && (
              <PersonNav>
                <BackBtn
                  noElevate
                  disabled={personaIndex === 0}
                  onClick={() => {
                    setPersonaIndex(personaIndex - 1);
                  }}
                >
                  <BackIcon />
                </BackBtn>
                <BackBtn
                  noElevate
                  disabled={personaIndex === personas.length - 1}
                  onClick={() => {
                    const nextIndex = personaIndex + 1;
                    if (nextIndex > personas.length - 1) {
                      setPersonaIndex(0);
                    } else {
                      setPersonaIndex(nextIndex);
                    }
                  }}
                >
                  <ForwardIcon />
                </BackBtn>
              </PersonNav>
            )}
          </Col>
          <Col span={14}>
            <TabContainer>
              <Tabs
                activeKey={tab}
                onChange={(activeKey) => setTab(activeKey as ITab)}
                items={[
                  { label: "Accounts", key: "account" },
                  { label: "Soul Tokens", key: "soul" },
                  { label: "Swag", key: "swag" },
                  { label: "Tokens", key: "token" },
                ]}
              />
            </TabContainer>
            <div style={{ marginTop: 20 }}>
              {tab === "account" && (
                <Profile
                  records={(persona as IPersona)?.texts}
                  {...{ personas, ...profileProps }}
                />
              )}
              {tab === "soul" && <Soulbound {...soulboundProps} />}
              {tab === "swag" && <Swag {...swagProps} />}
            </div>
          </Col>
        </Row>
      </Body>
    </Root>
  );
};
