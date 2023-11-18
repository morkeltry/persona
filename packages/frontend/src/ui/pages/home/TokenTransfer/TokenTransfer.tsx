import { Tabs } from "antd";
import { FC } from "react";
import { styled } from "styled-components";
import { TabContainer } from "ui/utils";
import { SendTransfer, SendTransferProps } from "./SendTransfer";
import { ReceiveTransfer } from "./ReceiveTransfer";
import { IPersona } from "ui/types";

const Root = styled.div`
  width: 100%;
`;
const Header = styled(TabContainer)`
  width: 100%;
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list {
    width: 100%;
    justify-content: center;

    .ant-tabs-tab {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
const Body = styled.div``;
const tabItems = [
  { label: "Send", key: "send" },
  { label: "Receive", key: "receive" },
];
export type ITransferAction = "send" | "receive";
export interface TokenTransferProps {
  action: ITransferAction;
  setAction: (action: ITransferAction) => void;
  onCancel: () => void;
  sendTransferProps: Omit<SendTransferProps, "onCancel" | "personas">;
  personas: IPersona[];
}
export const TokenTransfer: FC<TokenTransferProps> = ({
  action,
  setAction,
  onCancel,
  sendTransferProps,
  personas,
}) => {
  return (
    <Root>
      <Header>
        <Tabs
          size="large"
          centered
          items={tabItems}
          onChange={(key) => {
            setAction(key as ITransferAction);
          }}
          activeKey={action}
        />
      </Header>
      <Body>
        {action === "send" && (
          <SendTransfer
            personas={personas}
            onCancel={onCancel}
            {...sendTransferProps}
          />
        )}
        {action === "receive" && (
          <ReceiveTransfer personas={personas} onCancel={onCancel} />
        )}
      </Body>
    </Root>
  );
};
