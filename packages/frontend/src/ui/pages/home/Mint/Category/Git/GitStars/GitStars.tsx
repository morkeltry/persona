import { FC } from "react";
import { styled } from "styled-components";
import { Description, SearchInput, Title, Card } from "../../../common";
import {
  CommitIcon,
  SearchIcon,
  SpotIcon,
  StarIcon,
  ToolTipContent,
} from "ui/base";
import { Switch, Tooltip } from "antd";
import { InfoCircleFilled } from "@ant-design/icons";
import { getColor } from "ui/utils";

export interface IGitRepo {
  name: string;
  description: string;
  languages: { name: string; color: string }[];
  stars: number;
  commits: number;
  lastUpdateTimestamp: number;
}
const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Stat = styled.div`
  display: flex;
  align-items: center;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px 0 0;

  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
`;
const Allow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  .ant-switch.ant-switch-checked:hover:not(.ant-switch-disabled) {
    background: ${(props) => getColor(props, "primarySingle")};
  }
  .ant-switch.ant-switch-checked:not(.ant-switch-disabled) {
    background: ${(props) => getColor(props, "primarySingle")};
  }
`;
const Text = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export interface GitStarsProps {
  repos?: IGitRepo[];
  selectedRepo?: IGitRepo;
  onSelectRepo: (repo: IGitRepo) => void;
}
const Container = styled.div``;
export const GitStars: FC<GitStarsProps> = ({
  repos,
  selectedRepo,
  onSelectRepo,
}) => {
  return (
    <Root>
      <SearchInput prefix={<SearchIcon />} />
      {repos?.map((repo, index) => {
        const selected = repo.name === selectedRepo?.name;
        return (
          <Container key={`repo-${repo.name}-${index}`}>
            <Card selected={selected} onClick={() => onSelectRepo(repo)}>
              <Title selected={selected}>{repo.name}</Title>
              <Description selected={selected}>{repo.description}</Description>
              <Stat>
                <Item>
                  <SpotIcon /> {repo.languages?.[0].name}
                </Item>
                <Item>
                  <StarIcon />
                  {repo.stars}
                </Item>
                <Item>
                  <CommitIcon />
                  {repo.commits}
                </Item>
                <Item>Updated </Item>
              </Stat>
            </Card>
            {selected && (
              <Allow>
                <Text>
                  Allow dynamic minting
                  <Tooltip
                    title={
                      <ToolTipContent
                        title={"Dynamic Minting"}
                        description={
                          "Once the minting process of an item is finished, any changes made to the original item will be updated on the blockchain. These changes may include the number of likes, commits, comments, and more."
                        }
                      />
                    }
                  >
                    <InfoCircleFilled />
                  </Tooltip>
                </Text>
                <Switch />
              </Allow>
            )}
          </Container>
        );
      })}
    </Root>
  );
};
