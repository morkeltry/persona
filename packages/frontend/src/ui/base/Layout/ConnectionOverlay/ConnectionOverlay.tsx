import { Modal } from "antd";
import WalletSelector from "./WalletSelector";
import { WALLETS } from "application";
import { cssHide } from "ui/utils";
import React from "react";
import { IPersona, WalletName } from "ui/types";
import { PageProcessing } from "./Progress";
import { useNavigate } from "react-router-dom";

export type OverlayType = "wallet" | "progress" | "persona";
export interface ConnectionOverlayVar {
  showModal: boolean;
  modalType: OverlayType | undefined;
  progress: { message: string };
  isSearching: boolean;
  personas: IPersona[];
}
export interface ConnectionOverlayProps extends ConnectionOverlayVar {
  setOverlayVariables: (value: Partial<ConnectionOverlayVar>) => void;
  onConnect: (
    wallet: WalletName
  ) => Promise<{ wallet: WalletName; address: string } | null>;
  // getAllPersonas: (address: string) => Promise<void>;
  onSelectPersona: (persona: IPersona) => void;
}
export const ConnectionOverlay: React.FC<ConnectionOverlayProps> = ({
  showModal,
  modalType,
  progress,
  setOverlayVariables,
  onConnect,
  // getAllPersonas,
}) => {
  return (
    <Modal
      open={showModal}
      onCancel={() => setOverlayVariables({ showModal: false })}
      onOk={() => {}}
      okButtonProps={cssHide}
      cancelButtonProps={cssHide}
    >
      {modalType === "wallet" && (
        <WalletSelector
          wallets={WALLETS}
          onWalletSelect={(wallet) => {
            setOverlayVariables({
              modalType: "progress",
              progress: { message: "Connecting, please wait..." },
            });
            onConnect(wallet)
              .then((result) => {
                setOverlayVariables({
                  showModal: false,
                });
                // if (result) {
                //   const { address } = result;
                // setOverlayVariables({
                // modalType: "persona",
                // isSearching: true,
                // });
                // getAllPersonas(address)
                //   .then(() => {
                //     setOverlayVariables({ isSearching: false });
                //   })
                //   .catch((e) => {
                //     setOverlayVariables({ isSearching: false });
                //   });
                // }
              })
              .catch((err) => {
                console.error(err);
              });
          }}
        />
      )}
      {modalType === "progress" && (
        <PageProcessing message={progress?.message} header="Connect Wallet" />
      )}
    </Modal>
  );
};
