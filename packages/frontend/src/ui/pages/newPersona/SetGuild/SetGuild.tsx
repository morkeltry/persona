import { Radio, Space } from "antd";
import { FC } from "react";
import { styled } from "styled-components";
import { IGuildKey } from "ui/types";
import { GuildBadge, badgeColors, getColor, guilds } from "ui/utils";
import { Footer } from "../Footer";
const guildDetails: { name: IGuildKey; description: string }[] = [
  { name: "artist", description: "Create art collections" },
  {
    name: "creator",
    description: "Create short films, music videos, and more",
  },
  { name: "engineer", description: "Build amazing websites and code bases" },
  { name: "investor", description: "Invest in art, projects, and creators" },
  { name: "writer", description: "Write stories and build knowledge bases" },
];
const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .ant-radio-wrapper .ant-radio {
    margin-top: -18px;
    padding: 5px;
  }
  .ant-radio-wrapper .ant-radio-checked .ant-radio-inner {
    ${(props) => `
    border-color: ${getColor(props, "primarySingle")};
    background-color: #fff;
    `}
  }
  .ant-radio-wrapper .ant-radio-checked .ant-radio-inner::after {
    ${(props) => `
      background-color: ${getColor(props, "primarySingle")};
    `}
  }
`;
const Container = styled(Space)`
  display: flex;
  align-items: baseline;
  gap: 20px;
  padding: 10px 0;
`;
const Content = styled.div``;
const Title = styled.div`
  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  letter-spacing: -0.16px;

  display: flex;
  gap: 20px;
  align-items: center;
  text-transform: capitalize;
`;
const Description = styled.div`
  color: var(--gray-500, #6b7280);
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.14px;
`;
export interface SetGuildProps {
  nextPage: string;
  onBack: () => void;
  setGuild: (selectedGuild: IGuildKey) => void;
  onContinue: () => void;
  selectedGuild?: IGuildKey;
}
export const SetGuild: FC<SetGuildProps> = ({
  onBack,
  onContinue,
  nextPage,
  selectedGuild,
  setGuild,
}) => {
  return (
    <Root>
      <Radio.Group
        style={{ display: "flex", flexDirection: "column" }}
        onChange={({ target }) => {
          setGuild(target.value);
        }}
        value={selectedGuild}
      >
        {guildDetails.map((guild, index) => {
          return (
            <Container direction="vertical" key={`guildDetails-${index}`}>
              <Radio value={guild.name}>
                <Content>
                  <Title>
                    {guild.name}{" "}
                    <GuildBadge color={badgeColors[guilds.indexOf(guild.name)]}>
                      {guild.name}
                    </GuildBadge>
                  </Title>
                  <Description>{guild.description}</Description>
                </Content>
              </Radio>
            </Container>
          );
        })}
        <Container direction="vertical" key="none-guild">
          <Radio value="none">
            <Content>
              <Title>None</Title>
            </Content>
          </Radio>
        </Container>
      </Radio.Group>
      <Footer
        {...{
          continueTo: nextPage,
          onBack,
          isBackDisabled: false,
          onContinue,
          isDisabled: !selectedGuild,
        }}
      />
    </Root>
  );
};
