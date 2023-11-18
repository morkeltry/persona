import React, { useEffect, useRef } from "react";
// import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { IGuildKey } from "ui/types";
import { badgeColors, getColor, guilds } from "ui/utils";
import { DropUpArrowIcon, DropDownArrowIcon } from "ui/base";
const rootHeight = 300;
type ISize = "normal" | "large";
const Root = styled.div<{ size?: ISize }>`
  width: 100%;
  ${({ size }) => {
    switch (size) {
      case "large":
        return `height: 500px;`;
      default:
        return `height: ${rootHeight}px;`;
    }
  }}
  position: relative;
  border-radius: 16px;
  transition: transform 0.3s ease;
  perspective: 1000px;
  overflow: hidden;
}
`;
const footerHeight = 78;
const Avatar = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 16px 16px 0 0;
  object-fit: cover; /* Adjust this based on your image aspect ratio */
  transition: transform 0.3s; /* Add a smooth transition effect */
  &:hover {
    transform: scale(1.2);
  }
  cursor: pointer;
`;
// background: url("${({ image }) => image}") no-repeat center center;
const Frame = styled.div<{ image: string }>`
  width: 100%;
  height: calc(100% - ${footerHeight}px);
  border-radius: 16px 16px 0 0;
  position: relative;
  box-shadow: 2.7268171310424805px -5.453634262084961px 13.634085655212402px 0px
      rgba(0, 0, 0, 0.12) inset,
    -2.7268171310424805px 5.453634262084961px 13.634085655212402px 0px rgba(
        0,
        0,
        0,
        0.12
      ) inset;
`;
export const PersonaEmptyFrame = styled(Frame)`
  height: 100%;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Footer = styled.div<{ open: boolean }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: absolute;
  bottom: 0px;
  align-items: center;
  justify-content: center;
  height: ${({ open }) => (open ? "100%" : footerHeight + "px")};
  transition: height 1s ease;
  border-radius: ${(props) => (props.open ? "16px" : "0px 0px 16px 16px")};
  overflow: hidden;
  cursor: ${(props) => (props.open ? "" : "pointer")};
  box-shadow: 2.7268171310424805px -5.453634262084961px 13.634085655212402px 0px
      rgba(0, 0, 0, 0.12) inset,
    -2.7268171310424805px 5.453634262084961px 13.634085655212402px 0px rgba(
        0,
        0,
        0,
        0.12
      ) inset;
  ${({ theme: { type } }) =>
    type === "dark"
      ? `
    background: #0D0D0D;
    color: #fff;
  `
      : `
    background: #fff;
    color: #0D0D0D;
  `}
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
const Guild = styled.div<{ open: boolean; size?: ISize }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  padding: 2.33562px 11.6781px;
  ${(props) =>
    props.open
      ? `
      background: ${getColor(props, "primary")};
      color: #fff;
      z-index: 100;
    `
      : `
      background: ${props.color};
      color: #fff;
    `}

  position: absolute;
  border-radius: 23.3562px;
  ${({ size }) => {
    switch (size) {
      case "large":
        return `
        padding: 14.99px 17.988px;
        gap: 2.998px;
      `;
      default:
        return ``;
    }
  }}

  font-size: 16px;
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
export const Arrow = styled.div<{ open: boolean }>`
  display: flex;
  justify-content: center;
  position: absolute;
  right: 10px;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  ${({ theme: { type } }) =>
    type === "dark"
      ? `
  background:#2c2c2c;
  `
      : `
      background:#F1F5F9;
      svg > path {
        stroke:#2c2c2c;
      }
      `};
  transition: top 1.5s ease;
  right: 20px;
  ${(props) =>
    props.open &&
    `
    top: 20px;
    background: #E2E8F0;
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
`;
export const ENSName = styled.div<{ open: boolean; size?: ISize }>`
  display: flex;
  width: 100%;
  font-weight: 900;
  padding-left: 10px;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  padding: 20px;
  ${(props) =>
    props.open
      ? `
    margin-top: 50px;
    justify-content: center;
    // font-size: 24px;
    color: ${getColor(props, "textColor")};

  `
      : `
  text-align: center;
  // font-size: 28px;
  line-height: 140%;
  font-weight: bold;
  `}
  ${({ size }) => {
    switch (size) {
      case "large":
        return `
          font-size: 35.413px;
          line-height: 49.578px; /* 140% */
      `;
      default:
        return ``;
    }
  }}
  flex: 1;
  font-style: normal;
`;
const ScoreContainer = styled.div<{ size?: ISize }>`
  position: absolute;
  right: 20px;
  top: 20px;
  display: inline-flex;
  height: 24.551px;
  padding: 8.466px 6.773px;
  justify-content: center;
  align-items: center;
  gap: 3.386px;
  flex-shrink: 0;
  border-radius: 20.318px;
  background: rgba(8, 14, 26, 0.9);

  color: var(--white-100, #fff);
  font-family: Satoshi;
  font-size: 13.545px;
  font-style: normal;
  font-weight: 500;
  line-height: 20.318px; /* 150% */
  ${({ size }) => {
    switch (size) {
      case "large":
        return `
          font-size: 23.984px;
          line-height: 35.976px; /* 150% */
          display: inline-flex;

          height: 43.471px;
          padding: 14.99px 11.992px;
          gap: 5.996px;
        `;
      default:
        return ``;
    }
  }}
`;
const ScoreArrow = styled.div<{ isUp: boolean; size?: ISize }>`
  display: flex;
  height: 13.545px;
  width: 13.545px;
  padding: 2.258px;
  justify-content: center;
  align-items: center;
  gap: 5.644px;
  border-radius: 56.439px;
  background: var(--green-900, ${({ isUp }) => (isUp ? "#14532d" : "#7F1D1D")});
  ${({ size }) => {
    switch (size) {
      case "large":
        return `
        height: 29.984px;
        width: 29px;
        padding: 3.997px;
        gap: 9.993px;
      `;
      default:
        return ``;
    }
  }}
`;
export interface PersonaBaseProps {
  size?: ISize;
  avatar: string;
  guild: IGuildKey | "Guild";
  footerHeader: React.ReactNode;
  footerBody: React.ReactNode;
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
  onClick?: () => void;
}
export const PersonaBase: React.FC<PersonaBaseProps> = ({
  size,
  avatar,
  guild,
  footerHeader,
  footerBody,
  open = false,
  setOpen,
  score,
  onClick,
}) => {
  const bodyRef = useRef(null);
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
  const isUp = score > 50;
  return (
    <Root {...{ size }}>
      <Frame image={avatar}>
        <Avatar
          src={avatar}
          style={{ width: "100%", height: "100%" }}
          onClick={onClick}
        />
        {!open && (
          <ScoreContainer {...{ size }}>
            {score}{" "}
            <ScoreArrow {...{ size, isUp }}>
              {isUp ? <DropDownArrowIcon /> : <DropUpArrowIcon />}
            </ScoreArrow>
          </ScoreContainer>
        )}
        {open && <Badge open={open}>persona</Badge>}
        {guild && (
          <Guild
            color={badgeColors[guilds.indexOf(guild as IGuildKey)]}
            open={open}
            size={size}
          >
            {guild}
          </Guild>
        )}
      </Frame>
      <Footer open={open} onClick={() => setOpen?.(!open)}>
        <Header>
          {footerHeader}
          {!!setOpen && (
            <Arrow open={open}>
              {open ? <DropUpArrowIcon /> : <DropDownArrowIcon />}
            </Arrow>
          )}
        </Header>
        <Body open={open} ref={bodyRef}>
          {footerBody}
        </Body>
      </Footer>
    </Root>
  );
};
