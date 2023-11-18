import { Input } from "antd";
import { FC } from "react";
import { styled } from "styled-components";
import { platforms } from "ui/pages/home/Mint/Account";
import { AddonBefore, LinkBtn, PlatformCard } from "ui/pages/newPersona/common";
import { IPersona, IRecordKey, IRecordValues } from "ui/types";

const Root = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Image = styled.img`
  height: 20px;
  width: 20px;
`;
const Description = styled.div`
  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;
export interface ProfileProps {
  records?: IRecordValues;
  personas: IPersona[];
  linkedRecords: IRecordKey[];
  onLink: (url: IRecordKey, username: string) => void;
  onUnlink: (url: IRecordKey) => void;
}
export const Profile: FC<ProfileProps> = ({
  records,
  linkedRecords,
  onLink,
  onUnlink,
}) => {
  return (
    <Root>
      <Description>Social Profile</Description>
      {platforms.map((platform, index) => {
        const isLinked = linkedRecords.indexOf(platform.url) !== -1;
        return (
          <PlatformCard key={`persona-platform-${index}`}>
            <Input
              value={records?.[platform.url]}
              onChange={({ target: { value } }) => {
                // setRecords({ ...records, [platform.url]: value });
              }}
              addonBefore={
                <AddonBefore>
                  {platform.name}{" "}
                  {typeof platform.Icon === "string" ? (
                    <Image src={platform.Icon} alt="persona links" />
                  ) : (
                    <platform.Icon />
                  )}
                </AddonBefore>
              }
              suffix={
                <LinkBtn
                  isLinked={isLinked}
                  noElevate
                  disabled={!records?.[platform.url]}
                  onClick={() => {
                    if (isLinked) onUnlink(platform.url);
                    else {
                      if (records?.[platform.url]) {
                        onLink(platform.url, records[platform.url] as string);
                      }
                    }
                  }}
                >
                  {isLinked ? "Unlink" : "Link"}
                </LinkBtn>
              }
              size="large"
            />
          </PlatformCard>
        );
      })}
    </Root>
  );
};
