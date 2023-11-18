import { FC, useState } from "react";
import { styled } from "styled-components";
import { Account, AccountProps, IPersonaLink, IPlatform } from "./Account";
import { IPersona } from "ui/types";
import { Profile } from "./Profile";
import { Category, CategoryProps, IGitData } from "./Category";

const Root = styled.div`
  width: 100%;
`;

export type IMintData = IGitData;
export interface IMintFunctionParams {
  persona: IPersona;
  platform: IPlatform;
  data: IMintData;
}
export type IMintPage = "persona" | "profile" | "category" | "mint";
export interface MintProps {
  allPersonaLinks: Record<string, IPersonaLink[]>;
  accountProps: Omit<
    AccountProps,
    "onContinue" | "allPersonaLinks" | "onCancel"
  >;
  page: IMintPage;
  setPage: (page: IMintPage) => void;
  categoryProps: Omit<CategoryProps, "onCancel" | "platform" | "onMint">;
  onCancel: () => void;
  onMint: (data: IMintFunctionParams) => Promise<boolean>;
}
export const Mint: FC<MintProps> = ({
  accountProps,
  page,
  setPage,
  categoryProps,
  allPersonaLinks,
  onCancel,
  onMint,
}) => {
  const [persona, setPersona] = useState<IPersona>();
  const [platform, setPlatform] = useState<IPlatform>();
  const [personaLinks, setPersonaLinks] = useState<IPersonaLink[]>([]);
  const onMintData =
    (persona: IPersona, platform: IPlatform) => (data: IMintData) => {
      onMint({ persona, platform, data });
    };
  return (
    <Root>
      {page === "persona" && (
        <Account
          {...accountProps}
          allPersonaLinks={allPersonaLinks}
          onContinue={(persona) => {
            setPersona(persona);
            setPersonaLinks(allPersonaLinks?.[persona.ens]);
            setPage("profile");
          }}
          onCancel={onCancel}
        />
      )}
      {page === "profile" && (
        <Profile
          {...{ persona, personaLinks }}
          onCancel={() => setPage("persona")}
          onContinue={(platform) => {
            setPlatform(platform);
            setPage("category");
          }}
        />
      )}
      {page === "category" && (
        <Category
          platform={platform as IPlatform}
          onCancel={() => setPage("profile")}
          onMint={onMintData(persona as IPersona, platform as IPlatform)}
          {...categoryProps}
          // gitCatProps={gitCatProps}
        />
      )}
    </Root>
  );
};
