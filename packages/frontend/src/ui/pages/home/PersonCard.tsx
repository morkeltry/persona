import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { IENSRecord, IGuildKey } from "ui/types";
import { SocialMedia, SubHeader, VerifiedIcon } from "ui/base";
import { ENSName, PersonaBase, PersonaBaseProps } from "ui/base/Persona";

const Description = styled(SubHeader)`
  line-height: 0px;
  font-size: 16px;
  padding-bottom: 10px;
  // color: #242d3f;
`;

export interface PersonCardProps {
  ensRecord: IENSRecord;
  onClick?: PersonaBaseProps["onClick"];
  size?: PersonaBaseProps["size"];
}
export const PersonCard: React.FC<PersonCardProps> = ({
  ensRecord,
  onClick,
  size,
}) => {
  const { texts, ens, score } = ensRecord;
  const [open, setOpen] = useState<boolean>(false);
  const bodyRef = useRef(null);
  const {
    "com.github": github,
    "org.telegram": telegram,
    "com.discord": discord,
    "com.twitter": twitter,
  } = texts || {};
  useEffect(() => {
    if (open) {
      if (bodyRef?.current)
        (bodyRef.current as HTMLDivElement).style.display = "flex";
      setTimeout(() => {}, 500);
    } else {
      setTimeout(() => {
        if (bodyRef?.current)
          (bodyRef.current as HTMLDivElement).style.display = "none";
      }, 650);
    }
  }, [open]);
  return (
    <PersonaBase
      size={size}
      onClick={onClick}
      score={score}
      open={open}
      setOpen={setOpen}
      avatar={texts?.avatar || "/assets/logo.png"}
      guild={(texts?.["art.persona"] as IGuildKey) || "Guild"}
      footerHeader={
        <ENSName open={open} size={size}>
          {ens} {ens ? <VerifiedIcon /> : ""}
        </ENSName>
      }
      footerBody={
        <>
          <Description>{texts?.description || "neo in the matrix"}</Description>
          <Description>{texts?.email || "persona@mail.com"}</Description>
          <div style={{ marginTop: 20 }} />
          <SocialMedia centered {...{ twitter, telegram, discord, github }} />
        </>
      }
    />
  );
};
