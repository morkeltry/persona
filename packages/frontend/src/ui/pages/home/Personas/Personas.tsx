import { Col, Row } from "antd";
import { FC } from "react";
import { IPersona } from "ui/types";
import { PersonCard } from "../PersonCard";

export interface PersonasProps {
  personas: IPersona[];
}
export const Personas: FC<PersonasProps> = ({ personas }) => {
  return (
    <Row gutter={[24, 24]}>
      {personas.map((person, index) => {
        return (
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            xxl={4}
            key={index}
            style={{ alignItems: "center", display: "flex" }}
          >
            <PersonCard ensRecord={person} key={`person-frame-${index}`} />
          </Col>
        );
      })}
    </Row>
  );
};
