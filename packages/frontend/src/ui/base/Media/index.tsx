import React from "react";
import { styled } from "styled-components";
import {
  DiscordIcon,
  GithubIcon,
  GithubWhiteIcon,
  SoundCloudIcon,
  Telegram2Icon,
  TelegramIcon,
  TwitterIcon,
  WorldIcon,
} from "../svg";
const Media = styled.div<{ centered?: boolean; matrixEffect?: boolean }>`
  // width: 396px;
  height: 22px;
  justify-content: ${(props) => (props.centered ? "center" : "flex-start")};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: gray;
  gap: 10px;
  display: flex;
  ${({ matrixEffect }) =>
    matrixEffect &&
    `
    display: flex;
    height: fit-content;
    width: 172px;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    gap: 12.509px;

    border-radius: 18.764px;
    opacity: 0.95;
    background: #0D0D0D;
    svg {
      width: 24px;
      height: 24px;
    }
  `}
`;
const Contained = styled.a<{ color: string; nofill?: boolean }>`
  display: flex;
  padding: 4px 12px 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 24px;
  background: var(--gray-700, ${({ color }) => color});

  //typo
  color: var(--white-white, #fff);
  font-family: Satoshi;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 166.667% */
  letter-spacing: -0.12px;

  //svg
  svg {
    width: 16px;
    height: 12.196px;
    ${({ nofill }) =>
      !nofill &&
      `
        path {
          fill: #fff;
        }
        `}
  }
`;
const Anchor = styled.a`
  display: flex;
  align-items: center;
`;
export interface SocialMediaProps {
  x?: string;
  spotify?: string;
  genius?: string;
  soundCloud?: string;
  twitter?: string;
  discord?: string;
  telegram?: string;
  github?: string;
  website?: string;
  centered?: boolean;
  contained?: boolean;
  matrixEffect?: boolean;
}
export const SocialMedia: React.FC<SocialMediaProps> = ({
  x,
  soundCloud,
  genius,
  spotify,
  website,
  twitter,
  discord,
  telegram,
  github,
  centered,
  contained,
  matrixEffect,
}) => {
  return (
    <Media centered={centered} matrixEffect={matrixEffect}>
      {website &&
        (contained ? (
          <Contained target="_blank" color="#374151" href={website}>
            {<WorldIcon />}
            Website
          </Contained>
        ) : (
          <Anchor target="_blank" href={`https://twitter.com/${twitter}`}>
            {<WorldIcon />}
          </Anchor>
        ))}
      {twitter &&
        (contained ? (
          <Contained
            target="_blank"
            color="#1DA1F2"
            href={`https://twitter.com/${twitter}`}
          >
            {<TwitterIcon />}
            Twitter
          </Contained>
        ) : (
          <Anchor target="_blank" href={`https://twitter.com/${twitter}`}>
            {<TwitterIcon />}
          </Anchor>
        ))}
      {discord &&
        (contained ? (
          <Contained
            target="_blank"
            color="#5865F2"
            href={`https://discordapp.com/users/${discord}`}
          >
            {<DiscordIcon />}
            Discord
          </Contained>
        ) : (
          <Anchor
            target="_blank"
            href={`https://discordapp.com/users/${discord}`}
          >
            {<DiscordIcon />}
          </Anchor>
        ))}
      {telegram &&
        (contained ? (
          <Contained
            target="_blank"
            color="#078ACE"
            nofill
            href={`https://t.me/${telegram}`}
          >
            {<Telegram2Icon />}
            Telegram
          </Contained>
        ) : (
          <Anchor target="_blank" href={`https://t.me/${telegram}`}>
            {<TelegramIcon />}
          </Anchor>
        ))}
      {github &&
        (contained ? (
          <Contained
            target="_blank"
            color="#131313"
            href={`https://github.com/${github}`}
          >
            {<GithubIcon />}
            Github
          </Contained>
        ) : (
          <Anchor target="_blank" href={`https://github.com/${github}`}>
            {matrixEffect ? <GithubWhiteIcon /> : <GithubIcon />}
          </Anchor>
        ))}
      {soundCloud &&
        (contained ? (
          <Contained
            target="_blank"
            color="#131313"
            href={`https://soundCloud.com/${soundCloud}`}
          >
            {<GithubIcon />}
            Github
          </Contained>
        ) : (
          <Anchor target="_blank" href={`https://soundCloud.com/${soundCloud}`}>
            {matrixEffect ? <GithubWhiteIcon /> : <SoundCloudIcon />}
          </Anchor>
        ))}
      {spotify &&
        (contained ? (
          <Contained
            target="_blank"
            color="#131313"
            href={`https://spotify.com/${spotify}`}
          >
            {<GithubIcon />}
            Github
          </Contained>
        ) : (
          <Anchor target="_blank" href={`https://spotify.com/${spotify}`}>
            {matrixEffect ? <GithubWhiteIcon /> : <GithubIcon />}
          </Anchor>
        ))}
    </Media>
  );
};
