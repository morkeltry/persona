import { Modal, Tabs } from "antd";
import { FC, useState } from "react";
import { styled } from "styled-components";
import { AppButton, DownArrowSlantIcon, UpArrowSlantIcon } from "ui/base";
import { TabContainer, cssHide } from "ui/utils";
import { IPersona, IWearable } from "ui/types";
import { Personas } from "./Personas";
import { MyPersonas } from "./MyPersonas";
import {
  ITransferAction,
  TokenTransfer,
  TokenTransferProps,
} from "./TokenTransfer";
import { IMintPage, Mint, MintProps } from "./Mint";
import { Processing, ProcessingProps } from "./Processing";
import { routeNames } from "application";
import { persona } from "application/dummy";
import { useNavigate } from "react-router-dom";
import { MarketPlace, MarketPlaceProps } from "./MarketPlace";
import { WearablePreview, WearablePreviewProps } from "./WearablePreview";
import { PageHeader } from "../PageHeader";

const Root = styled.div``;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TxContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const OutlinedBtn = styled(AppButton)`
  display: flex;
  width: 136px;
  height: 54px;
  padding: 16px 16px 16px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 24px;
  border: 1px solid var(--gray-200, #e5e7eb);
  background: var(--white-100, #fff);
`;
const IconContainer = styled.div<{ color: string }>`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var(--gray-50, ${(props) => props.color});
`;
const MintBtn = styled(AppButton)`
  display: flex;
  width: 136px;
  height: 54px;
  padding: 16px 16px 16px 12px;
  justify-content: center;
  align-items: center;
`;
const Body = styled.div`
  margin-top: 50px;
`;
const ModalContainer = styled.div<{ type: IModalType }>`
  display: flex;
  width: 526px;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 24px;
  background: var(--white-100, #fff);
  ${({ type }) => {
    switch (type) {
      case "mint":
        return `
          justify-content: flex-start;
          width: 722px;
        `;
      case "processing":
        return `
          width: 464px;
        `;
      default:
        return ``;
    }
  }}
`;
export interface HomeProps {
  people: IPersona[];
  myPersonas: IPersona[];
  sendTransferProps: TokenTransferProps["sendTransferProps"];
  mintProps: Omit<
    MintProps,
    "onCancel" | "page" | "setPage" | "allPersonaLinks"
  >;
  allPersonaLinks: MintProps["allPersonaLinks"];
  marketPlaceProps: Omit<MarketPlaceProps, "onPreview">;
  connectedPersona?: IPersona;
  onBuyItem: WearablePreviewProps["onBuyItem"];
}
type ITab = "home" | "personas" | "market";
type IModalType = "tx" | "mint" | "processing" | "preview";
export const Home: FC<HomeProps> = ({
  people,
  myPersonas,
  sendTransferProps,
  mintProps,
  allPersonaLinks,
  marketPlaceProps,
  connectedPersona,
  onBuyItem,
}) => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<ITab>("home");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<IModalType>("tx");
  const [transferAction, setTransferAction] = useState<ITransferAction>("send");
  const [mintPage, setMintPage] = useState<IMintPage>("persona");
  const [processData, setProcessData] =
    useState<Omit<ProcessingProps, "onViewToken">>();
  const [previewWearable, setPreviewWearable] = useState<IWearable>();
  const { onMint, ...deepMintProps } = mintProps;
  return (
    <Root>
      <PageHeader
        {...{
          onMint() {
            setOpenModal(true);
            setModalType("mint");
            setMintPage("persona");
          },
          onReceive() {
            setOpenModal(true);
            setModalType("tx");
            setTransferAction("receive");
          },
          onSend() {
            setOpenModal(true);
            setModalType("tx");
            setTransferAction("send");
          },
        }}
      >
        <TabContainer>
          <Tabs
            activeKey={tab}
            items={[
              { label: "Home", key: "home" },
              { label: "My Personas", key: "personas" },
              { label: "Marketplace", key: "market" },
            ]}
            onChange={(key) => {
              setTab(key as ITab);
            }}
          />
        </TabContainer>
      </PageHeader>
      <Body>
        {tab === "home" && <Personas personas={people} />}
        {tab === "personas" && (
          <MyPersonas
            personas={myPersonas}
            onNewPersona={() => navigate(routeNames.newPersona)}
          />
        )}
        {tab === "market" && (
          <MarketPlace
            {...marketPlaceProps}
            {...{
              onPreview(wearable) {
                setModalType("preview");
                setOpenModal(true);
                setPreviewWearable(wearable);
              },
            }}
          />
        )}
      </Body>
      <Modal
        open={openModal}
        onCancel={() => setOpenModal(false)}
        okButtonProps={cssHide}
        cancelButtonProps={cssHide}
      >
        <ModalContainer type={modalType}>
          {modalType === "tx" && (
            <TokenTransfer
              action={transferAction}
              setAction={setTransferAction}
              onCancel={() => setOpenModal(false)}
              {...{ personas: myPersonas, sendTransferProps }}
            />
          )}
          {modalType === "mint" && (
            <Mint
              allPersonaLinks={allPersonaLinks}
              page={mintPage}
              setPage={setMintPage}
              {...deepMintProps}
              onMint={async (data) => {
                setModalType("processing");
                setProcessData({
                  header: "Minting your token",
                  footer: "connecting please wait..",
                  stage: "processing",
                });
                const success = await onMint(data);
                if (success) {
                  setProcessData({
                    header: "Your token has been minted",
                    stage: "completed",
                    image: "/assets/persona.png",
                  });
                  return true;
                }
                return false;
              }}
              onCancel={() => setOpenModal(false)}
            />
          )}
          {modalType === "processing" && (
            <Processing
              onViewToken={() =>
                navigate(routeNames.persona + "/" + persona.ens)
              }
              {...processData}
            />
          )}
          {modalType === "preview" && (
            <WearablePreview
              persona={connectedPersona}
              wearable={previewWearable}
              onBuyItem={onBuyItem}
            />
          )}
        </ModalContainer>
      </Modal>
    </Root>
  );
};
