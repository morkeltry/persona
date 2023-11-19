import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { IENSRecord, IGuildKey } from "ui/types";
import { DropUpArrowIcon, DropDownArrowIcon } from "../svg";
import { SubHeader } from "../Typography";
import { GuildBadge, badgeColors, getColor, guilds } from "ui/utils";
import { AppButton } from "../Button/Button";
import { SocialMedia } from "../Media";

export * from "./PersonaBase";

const Root = styled.div`
  position: relative;
  border-radius: 10px;
  transition: transform 0.3s ease;
  perspective: 1000px;
  height: 428px;
}`;
const Frame = styled.div<{ image: string; background?: string }>`
  ${({ image }) => {
    if (image) {
      return `
        background: url("${image}") no-repeat center center / cover;
      `;
    } else {
      return `
        background: url("/assets/account.jpg") no-repeat center center;
      `;
    }
  }}
  background-color: ${({ background }) => background || "#fff"};
  @media (min-width: 1800px) {
    width: 512px;
    height: 515px;
  }
  @media (max-width: 1800px) {
    width: 360px;
    height: 350.34px;
  }
  border-radius: 20px 20px 0 0;
  position: relative;
  margin-bottom: 78px;

  box-shadow: 2.7268171310424805px -5.453634262084961px 13.634085655212402px 0px
      rgba(0, 0, 0, 0.12) inset,
    -2.7268171310424805px 5.453634262084961px 13.634085655212402px 0px rgba(
        0,
        0,
        0,
        0.12
      ) inset;
`;
const Footer = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0px;
  align-items: center;
  justify-content: center;
  @media (min-width: 1800px) {
    width: 512px;
    ${(props) =>
      props.open
        ? `
        height: 595px;
      `
        : ``}
  }
  @media (max-width: 1800px) {
    width: 360px;
    ${(props) =>
      props.open
        ? `
        height: 430px;
      `
        : ``}
  }
  background: ${(props) => getColor(props, "background")};
  height: 78px;
  transition: height 1s ease;
  border-radius: ${(props) => (props.open ? "20px" : "0px 0px 20px 20px")};
  overflow: hidden;
  cursor: pointer;
  box-shadow: 2.7268171310424805px -5.453634262084961px 13.634085655212402px 0px
      rgba(0, 0, 0, 0.12) inset,
    -2.7268171310424805px 5.453634262084961px 13.634085655212402px 0px rgba(
        0,
        0,
        0,
        0.12
      ) inset;
`;
const Badge = styled.div<{ open: boolean }>`
  font-family: Satoshi;
  font-size: 21.815px;
  font-style: italic;
  font-weight: 700;
  line-height: 27.268px; /* 125% */
  background: var(
    --primary-main,
    linear-gradient(180deg, #ed5372 0%, #bd2846 100%, #e33659 100%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  position: absolute;
  right: 20px;
  ${(props) =>
    props.open
      ? `
      bottom: -60px;
      z-index: 100;
    `
      : `
      top: 20px;
    `}
  & svg {
    width: 90px !important;
    path {
      fill: ${(props) => (props.open ? "#242D3F" : "#fff")};
    }
  }
`;
const Guild = styled.div<{ open: boolean; color: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  padding: 15px 18px;
  border-radius: 36px;
  box-shadow: 0px 18px 45px -15px rgba(201, 74, 2, 0.4),
    0px 4.5px 15px 0px rgba(201, 74, 2, 0.08) inset;
  color: ${({ color }) => (color === "#FFF812" ? "#000" : "#fff")};
  background: ${({ color }) => color || "#fff812"};
  ${(props) =>
    props.open &&
    `
      z-index: 100;
    `}
  position: absolute;
  font-size: 18px;
  font-weight: 700;
  text-align: center;

  left: 20px;
  top: 20px;
  & svg {
    width: 90px !important;
    path {
      fill: #fff;
    }
  }
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const ENSName = styled.div<{ open: boolean }>`
  display: flex;
  font-weight: 900;
  padding-left: 10px;
  ${(props) =>
    props.open
      ? `
    margin-top: 50px;
    font-size: 24px;
    justify-content: center;
    color: ${getColor(props, "textColor")};
  `
      : `
  text-align: center;
  justify-content: flex-start;
  font-size: 28px;
  line-height: 140%;
  font-weight: bold;
  `}
  flex: 1;
  font-style: normal;
`;
const Arrow = styled.div<{ open: boolean }>`
  display: flex;
  justify-content: center;
  position: absolute;
  right: 10px;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #f1f5f9;
  svg path {
    stroke: #000;
  }
  transition: top 1.5s ease;
  right: 20px;
  ${(props) =>
    props.open &&
    `
    top: 20px;
    `}
  @media (min-width: 1800) {
    width: 49px;
    height: 49px;
  }
`;
const Body = styled.div<{ open: boolean }>`
  flex: 1;
  position: relative;
  opacity: ${(props) => (props.open ? "1" : "0")};
  transition: opacity 1.5s ease;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Description = styled(SubHeader)`
  line-height: 0px;
  font-size: 16px;
  padding-bottom: 10px;
  // color: #242d3f;
`;
const Shadow = styled(Frame)`
  @media (min-width: 1800px) {
    width: 512px;
  }
  @media (max-width: 1800px) {
    width: 360px;
  }
  margin-top: 50px;
  border-radius: 100%;

  width: 100%;
  height: 8px;
  flex-shrink: 0;

  border-radius: 459px;
  opacity: 0.5;
  background: #000;
  filter: blur(17.5px);
`;

const Button = styled(AppButton)`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 32px;

  height: 60px;
  background: linear-gradient(180deg, #ed5372 0%, #bd2846 100%, #e33659 100%);
  border-radius: 8px;
  @media (min-width: 1800px) {
    width: 512px;
  }
  @media (max-width: 1800px) {
    width: 360px;
  }
`;
export interface PersonaFrameProps {
  ensRecord: IENSRecord;
  flip?: boolean;
  shadow?: boolean;
  isFinal?: boolean;
  onCreate?: () => void;
  animate?: boolean;
  background?: string;
}
export const PersonaFrame: React.FC<PersonaFrameProps> = ({
  ensRecord,
  shadow,
  isFinal,
  onCreate,
  flip,
  animate,
  background,
}) => {
  const { texts, ens, nfts } = ensRecord || {};
  const [open, setOpen] = useState<boolean>(!!flip);
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
  useEffect(() => {
    if (flip !== undefined) setOpen(flip);
  }, [flip]);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = cardWidth / 2;
    const centerY = cardHeight / 2;
    // const mouseX = e.pageX - card.offsetLeft + e.pageX;
    const mouseX = cardWidth;
    const mouseY = e.pageY - card.offsetTop;
    const rotateX = (mouseY - centerY) / 40;
    const rotateY = (mouseX - centerX) / 40;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "";
  };
  return (
    <>
      <Root
        {...(animate
          ? { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave }
          : {})}
      >
        <Frame image={nfts?.avatar?.resolved?.image} background={background}>
          <Badge open={open}>Persona</Badge>
          <Guild
            color={
              badgeColors[
                guilds.indexOf(texts?.["art.persona"] as IGuildKey)
              ] || "#FFF812"
            }
            open={open}
          >
            {texts?.["art.persona"] || "Guild"}
          </Guild>
        </Frame>
        <Footer open={open}>
          <Header>
            <ENSName open={open}>{ens + ".persona.eth"}</ENSName>
            <Arrow open={open} onClick={() => setOpen(!open)}>
              {open ? <DropUpArrowIcon /> : <DropDownArrowIcon />}
            </Arrow>
          </Header>
          <Body open={open} ref={bodyRef}>
            <Description>{texts?.description}</Description>
            <Description>{texts?.email}</Description>
            <div style={{ marginTop: 20 }} />
            <SocialMedia centered {...{ twitter, telegram, discord, github }} />
          </Body>
        </Footer>
      </Root>
      {!isFinal && shadow && <Shadow image="" />}
      {isFinal && (
        <Button variant="primary" onClick={onCreate}>
          Complete and Create Persona
        </Button>
      )}
    </>
  );
};
