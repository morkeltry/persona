import { FC } from "react";
import { GitCategory, GitCategoryProps, IGitData } from "./Git";
import { IPlatform } from "../Account";
export interface CategoryProps {
  onCancel: () => void;
  platform: IPlatform;
  gitCatProps: Omit<GitCategoryProps, "onCancel" | "onMintStar">;
  onMint: (gitData: IGitData) => void;
}
export const Category: FC<CategoryProps> = ({
  gitCatProps,
  platform,
  onCancel,
  onMint,
}) => {
  switch (platform.url) {
    case "com.github":
      return (
        <GitCategory {...gitCatProps} onCancel={onCancel} onMintStar={onMint} />
      );
  }
  return null;
};
