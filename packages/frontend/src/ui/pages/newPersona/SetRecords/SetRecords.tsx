import { FC } from "react";
import { styled } from "styled-components";
import { Footer } from "../Footer";
import { platforms } from "ui/pages/home/Mint/Account";
import { Input } from "antd";
import { TelegramIcon } from "ui/base";
import { IRecordKey, IRecordValues } from "ui/types";
import { AddonBefore, PlatformCard, LinkBtn } from "../common";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .ant-input-group > .ant-input:first-child,
  .ant-input-group .ant-input-group-addon:first-child {
    width: 157px;
    text-align: start;
    border-radius: 8px 0px 0px 8px;
    border: 1px solid var(--slate-100, #f1f5f9);
    background: var(--slate-100, #f1f5f9);
  }
`;
const Image = styled.img`
  height: 20px;
  width: 20px;
`;

export interface SetRecordsProps {
  onBack: () => void;
  onContinue: () => void;
  nextPage: string;
  onLink: (url: IRecordKey, username: string) => void;
  records?: IRecordValues;
  setRecords: (records: IRecordValues) => void;
}
export const SetRecords: FC<SetRecordsProps> = ({
  onBack,
  onContinue,
  nextPage,
  onLink,
  setRecords,
  records,
}) => {
  return (
    <Root>
      {platforms.map((platform, index) => {
        return (
          <PlatformCard key={`persona-platform-${index}`}>
            <Input
              value={records?.[platform.url]}
              onChange={({ target: { value } }) => {
                setRecords({ ...records, [platform.url]: value });
              }}
              addonBefore={
                <AddonBefore>
                  {platform.name}{" "}
                  {typeof platform.Icon === "string" ? (
                    <Image src={platform.Icon} alt="persona links" />
                  ) : platform.url === "org.telegram" ? (
                    <TelegramIcon />
                  ) : (
                    <platform.Icon />
                  )}
                </AddonBefore>
              }
              suffix={
                <LinkBtn
                  noElevate
                  disabled={!records?.[platform.url]}
                  onClick={() => {
                    if (records?.[platform.url]) {
                      onLink(platform.url, records[platform.url] as string);
                    }
                  }}
                >
                  Link
                </LinkBtn>
              }
              size="large"
            />
          </PlatformCard>
        );
      })}
      <div style={{ marginTop: 20 }} />
      <Footer
        {...{
          continueTo: nextPage,
          onBack,
          isBackDisabled: false,
          onContinue,
          isDisabled: false,
        }}
      />
    </Root>
  );
};
