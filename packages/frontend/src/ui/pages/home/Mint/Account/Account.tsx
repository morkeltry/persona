import { FC, useState } from "react";
import { styled } from "styled-components";
import {
  Card,
  Connections,
  Description,
  Header,
  HeaderStage,
  SearchInput,
  Title,
} from "../common";
import {
  AppButton,
  DiscordIcon,
  GithubIcon,
  SearchIcon,
  SpotIcon,
  SpotifyIcon,
  Telegram2Icon,
} from "ui/base";
import { IENSDefaultKey, IGuildKey, IPersona, IRecordKey } from "ui/types";
import { GuildBadge, badgeColors, guilds } from "ui/utils";
export interface IPlatform {
  name: string;
  url: IRecordKey;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | string;
}
export const platforms: IPlatform[] = [
  { name: "Github", url: "com.github", Icon: GithubIcon },
  { name: "Discord", url: "com.discord", Icon: DiscordIcon },
  {
    name: "Apple Music",
    url: "com.apple-music",
    Icon: "/assets/platforms/apple-music.png",
  },
  { name: "Genius", url: "com.genius", Icon: "/assets/platforms/genius.png" },
  { name: "X", url: "com.x", Icon: "/assets/platforms/x.png" },
  { name: "Telegram", url: "org.telegram", Icon: Telegram2Icon },
  // { name: "Spotify", url: "com.spotify", Icon: SpotifyIcon },
];
export interface IPersonaLink {
  ens: string;
  url: IENSDefaultKey;
  value: string;
}
const Root = styled.div``;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
  .ant-input-affix-wrapper > input.ant-input {
    background: #f5f7fb;
  }
`;
const GuildContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 40%;
`;
export interface AccountProps {
  personas: IPersona[];
  allPersonaLinks: Record<string, IPersonaLink[]>;
  onContinue: (persona: IPersona) => void;
  onCancel: () => void;
}
export const Account: FC<AccountProps> = ({
  personas,
  allPersonaLinks,
  onCancel,
  onContinue,
}) => {
  const [selectedPersona, setPersona] = useState<IPersona>();
  return (
    <Root>
      <Header>
        Select persona account to continue <HeaderStage>Step 1/4</HeaderStage>
      </Header>

      <Body>
        <SearchInput prefix={<SearchIcon />} />
        {personas?.map((persona) => {
          let count = allPersonaLinks[persona.ens]?.length || 0;
          const selected = persona.ens === selectedPersona?.ens;
          return (
            <Card
              key={`persona-${persona.ens}`}
              selected={selected}
              onClick={() => setPersona(persona)}
            >
              <Title selected={selected}>{persona.ens}</Title>
              <Description selected={selected}>
                {persona.texts?.description}
              </Description>
              <Connections>
                <SpotIcon /> {count} connected accounts
              </Connections>
              <GuildContainer>
                <GuildBadge
                  color={
                    badgeColors[
                      guilds.indexOf(
                        persona.texts?.["art.persona"] as IGuildKey
                      )
                    ]
                  }
                >
                  {persona.texts?.["art.persona"]}
                </GuildBadge>
              </GuildContainer>
            </Card>
          );
        })}
        <AppButton
          variant="accent"
          noElevate
          disabled={!selectedPersona}
          onClick={() => onContinue(selectedPersona as IPersona)}
        >
          Continue
        </AppButton>
        <AppButton variant="secondary" noElevate onClick={onCancel}>
          Cancel
        </AppButton>
      </Body>
    </Root>
  );
};
