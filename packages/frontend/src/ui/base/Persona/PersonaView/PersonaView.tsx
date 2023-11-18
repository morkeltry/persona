import dayjs from "dayjs";
import React from "react";
import { styled } from "styled-components";
import { AppButton, SocialMedia } from "ui/base";
import { IGuildKey, IPersona } from "ui/types";
import { GuildBadge, badgeColors, guilds, getColor } from "ui/utils";

const boxWidth = 496;
const Root = styled.div`
  display: flex;
  width: ${boxWidth}px;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  border-radius: 24px;
  background: var(--white-100, #fff);
`;
const Header = styled.div`
  width: ${boxWidth}px;
  height: 224px;
  position: relative;
`;
const Banner = styled.div<{ src?: string; alt?: string }>`
  ${({ src, alt, ...props }) => {
    return src
      ? `
      background: url('${src}') no-repeat center center / cover;
    `
      : `
      background:  ${getColor(
        props,
        "primary"
      )} -7.733px -12.298px / 102.673% 296.079% no-repeat;
    `;
  }}
  width: ${boxWidth}px;
  height: 179px;
  flex-shrink: 0;
  border-radius: 20px 20px 0 0;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.16);
`;
const Avatar = styled.img`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 3.787px;
  border: 2.367px solid var(--white-100, #fff);
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.16);

  position: absolute;
  left: 20px;
  bottom: 10px;
  cursor: pointer;
`;
const HeaderBottom = styled.div`
  display: flex;
  justify-content: flex-end;

  position: absolute;
  right: 20px;
  bottom: 10px;
`;
const Content = styled.div`
  width: ${boxWidth}px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const ItemTitle = styled.div`
  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
`;
const ItemValue = styled.div`
  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */
`;
export interface PersonaViewProps {
  persona: IPersona;
  following?: number;
  follower?: number;
  onSendCrypt: () => void;
  openProfile: (persona: IPersona) => void;
}
export const PersonaView: React.FC<PersonaViewProps> = ({
  persona,
  follower,
  following,
  onSendCrypt,
  openProfile,
}) => {
  const {
    "org.telegram": telegram,
    "com.twitter": twitter,
    "com.discord": discord,
    "com.github": github,
    "art.persona": guild,
    description,
  } = persona?.texts || {};
  let friendDate;
  if (follower && following) {
    friendDate = dayjs(Math.max(follower, following)).format("dd mm, YYYY");
  }
  const hasSocials = telegram || twitter || discord || github;
  return (
    <Root>
      <Header>
        <Banner
          src={persona.nfts?.banner?.resolved?.image}
          alt="persona banner"
        />
        <Avatar
          onClick={() => openProfile(persona)}
          src={persona.nfts?.avatar?.resolved?.image}
          alt="persona avatar"
        />
        <HeaderBottom>
          {hasSocials && (
            <SocialMedia
              {...{ telegram, github, discord, twitter }}
              matrixEffect
            />
          )}
        </HeaderBottom>
      </Header>
      <Content>
        <Item>
          <ItemTitle>Name</ItemTitle>
          <ItemValue>{persona?.ens}</ItemValue>
        </Item>
        <Item>
          <ItemTitle>Bio</ItemTitle>
          <ItemValue>{description}</ItemValue>
        </Item>
        <Item>
          <ItemTitle>Guid</ItemTitle>
          {/* <ItemValue style={{ textTransform: "capitalize" }}>{guild}</ItemValue> */}
          {guild && (
            <GuildBadge
              style={{ position: "absolute", right: 20 }}
              color={badgeColors[guilds.indexOf(guild as IGuildKey)]}
            >
              {guild}
            </GuildBadge>
          )}
        </Item>
        {friendDate && (
          <Item>
            <ItemTitle>Friends Since</ItemTitle>
            <ItemValue>{friendDate}</ItemValue>
          </Item>
        )}
        <div
          style={{ display: "flex", width: "calc(100% - 40px)", marginTop: 50 }}
        >
          <AppButton variant="accent" fullWidth onClick={onSendCrypt}>
            Send Crypto
          </AppButton>
        </div>
      </Content>
    </Root>
  );
};
