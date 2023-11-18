import { Col, Row } from "antd";
import React, { FC } from "react";
import { IPersona } from "ui/types";
import { PersonCard } from "../PersonCard";
import { AddCircleIcon, PersonaEmptyFrame } from "ui/base";
import styled from "styled-components";
import { routeNames } from "application";
import { useNavigate } from "react-router-dom";

const NewPersonaBtn = styled(PersonaEmptyFrame)`
  color: var(--gray-500, #6b7280);
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */
  cursor: pointer;
  flex-direction: column;
  gap: 10px;
`;
export interface MyPersonasProps {
  personas: IPersona[];
  onNewPersona: React.MouseEventHandler;
}
export const MyPersonas: FC<MyPersonasProps> = ({ personas, onNewPersona }) => {
  const navigate = useNavigate();
  return (
    <Row gutter={[24, 24]}>
      {personas.map((persona, index) => {
        return (
          <Col
            xs={12}
            sm={12}
            md={6}
            xxl={6}
            key={index}
            style={{ alignItems: "center", display: "flex" }}
          >
            <PersonCard
              ensRecord={persona}
              key={`persona-frame-${index}`}
              onClick={() =>
                navigate(routeNames.persona_ + persona.ens, {
                  state: { persona, score: 20 },
                })
              }
            />
          </Col>
        );
      })}

      <Col
        xs={12}
        sm={12}
        md={6}
        xxl={6}
        style={{ alignItems: "center", display: "flex" }}
      >
        <NewPersonaBtn image="" onClick={onNewPersona}>
          <AddCircleIcon />
          Create new persona
        </NewPersonaBtn>
      </Col>
    </Row>
  );
};
