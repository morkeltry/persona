import { FC, useEffect, useState } from "react";
import { styled } from "styled-components";
import { Card, Description, Header, HeaderStage, Title } from "../../common";
import { AppButton } from "ui/base";
import { GitStars, IGitRepo } from "./GitStars";
type IGitCategory = "repos" | "stars" | "commits" | "gists";
const gitCategories: {
  key: IGitCategory;
  name: string;
  description: string;
}[] = [
  {
    key: "repos",
    name: "Your Repositories",
    description: "Mint your GitHub repositories as soul tokens",
  },
  {
    key: "stars",
    name: "Your Stars",
    description: "Mint your GitHub stars as soul tokens",
  },
  {
    key: "commits",
    name: "Your Commits",
    description: "Mint your GitHub commits as soul tokens",
  },
  {
    key: "gists",
    name: "Your Gists",
    description: "Mint your GitHub gists as soul tokens",
  },
];
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
export type IGitData = IGitRepo;
export interface GitCategoryProps {
  onMintStar: (gitdata: IGitData) => void;
  onCancel: () => void;
  getCategory: (gitCat?: IGitCategory) => Promise<IGitData[]>;
}
export const GitCategory: FC<GitCategoryProps> = ({
  onMintStar,
  onCancel,
  getCategory,
}) => {
  const [page, setPage] = useState<"home" | IGitCategory>("home");
  const [gitCat, setGitCat] = useState<IGitCategory>();
  const [gitData, setGitData] = useState<IGitData[]>();
  const [selectedGitData, setSelectedGitData] = useState<IGitData>();
  useEffect(() => {
    (async () => {
      setGitData(await getCategory(gitCat));
    })();
  }, [gitCat]);
  return (
    <Root>
      <Header>
        Select category to continue <HeaderStage>Step 3/4</HeaderStage>
      </Header>

      <Body>
        {page === "home" &&
          gitCategories?.map((ev, index) => {
            const selected = ev.key === gitCat;
            return (
              <Card
                key={`persona-${ev.key}-${index}`}
                selected={selected}
                onClick={() => setGitCat(ev.key)}
              >
                <Title selected={selected}>{ev.name}</Title>
                <Description selected={selected}>{ev.description}</Description>
              </Card>
            );
          })}
        {page === "stars" && (
          <GitStars
            repos={gitData}
            {...{
              selectedRepo: selectedGitData,
              onSelectRepo: (repo) => setSelectedGitData(repo),
            }}
          />
        )}
        <AppButton
          variant="accent"
          noElevate
          disabled={!page && !gitData}
          onClick={() => {
            if (page === "home") setPage(gitCat as IGitCategory);
            else onMintStar(selectedGitData as IGitData);
          }}
        >
          Continue
        </AppButton>
        <AppButton
          variant="secondary"
          noElevate
          onClick={() => (page === "home" ? onCancel() : setPage("home"))}
        >
          Cancel
        </AppButton>
      </Body>
    </Root>
  );
};
