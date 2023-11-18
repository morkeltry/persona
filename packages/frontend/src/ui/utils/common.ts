import { styled } from "styled-components";
import { IGuildKey } from "ui/types";
import { IColorScheme } from "ui/utils";

export const cssHide = {
  style: { display: "none" },
};
export const guilds: IGuildKey[] = [
  "community",
  "artist",
  "creator",
  "engineer",
  "investor",
  "writer",
];
export const guildDetails: {
  label: string;
  description: string;
  key: IGuildKey;
}[] = [
  { label: "Community", description: "", key: "community" },
  {
    label: "Artist Guild",
    description: "Create art collections",
    key: "artist",
  },
  {
    label: "Creator Guild",
    description: "Create short films, music videos, and more",
    key: "creator",
  },
  {
    label: "Engineer Guild",
    description: "Build amazing websites and code bases",
    key: "engineer",
  },
  {
    label: "Investor Guild",
    description: "Invest in art, projects, and creators",
    key: "investor",
  },
  {
    label: "Writer Guild",
    description: "Write stories and build knowledge bases",
    key: "writer",
  },
];
export const GuildBadge = styled.div<{ color: string }>`
  display: flex;
  // padding: 10px 12px !important;
  padding: 5px 20px !important;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 24px;
  background: ${({ color }) => color};

  text-transform: capitalize;
  color: var(--white-100, #fff);
  font-family: Satoshi;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
`;
export const TransferIconContainer = styled.div<{ in: boolean }>`
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 12px;
  background: ${(props) => (props.in ? "#F0FDF4" : "#fef2f2")};
`;
export const TabContainer = styled.div`
  ${({ theme: { colors } }) => `
  .ant-tabs .ant-tabs-tab {
    font-family: Satoshi;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    color: var(--gray-900, #000);
  }
  .ant-tabs .ant-tabs-tab .ant-tabs-tab-btn {
    color: var(--gray-600, #4B5563);
    font-family: Satoshi;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 133.333% */
  }
  .ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    font-weight: 700;
    color: ${(colors as IColorScheme).primarySingle};
  }
  .ant-tabs .ant-tabs-tab:hover {
    color: ${(colors as IColorScheme).primarySingle};
  }
  .ant-tabs-top >.ant-tabs-nav .ant-tabs-ink-bar {
    background: ${(colors as IColorScheme).primarySingle};
  }
  .ant-tabs .ant-tabs-extra-content {
    display: flex;
    align-items: center;
  }
  `}
`;
