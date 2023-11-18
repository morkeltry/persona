import { Switch } from "antd";
import { FC, useState } from "react";
import { styled } from "styled-components";
import { AppButton, PersonaFrame } from "ui/base";
import { IPersona, IWearable } from "ui/types";

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
const Header = styled.div`
  width: 100%;
  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 140% */
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 100%;
`;
const WearableContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  background: #fafafa;
`;
const WearableImage = styled.img`
  width: 40px;
  height: 29.565px;
`;
const WearableInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1px;
`;
const WearableHeader = styled.div`
  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */
`;
const WearableDescription = styled.div`
  color: var(--gray-500, #6b7280);
  font-family: Satoshi;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 163.636% */
`;
const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
export interface WearablePreviewProps {
  persona?: IPersona;
  wearable?: IWearable;
  onBuyItem: (item: IWearable) => void;
}
export const WearablePreview: FC<WearablePreviewProps> = ({
  persona,
  wearable,
  onBuyItem,
}) => {
  const [equipped, setEquipped] = useState<boolean>(false);
  return (
    <Root>
      <Header>Preview</Header>
      {persona && <PersonaFrame ensRecord={persona} />}
      <Row>
        <WearableContainer>
          <WearableImage src={wearable?.item} alt="wearble nft image" />
          <WearableInfoContainer>
            <WearableHeader>{wearable?.label}</WearableHeader>
            <WearableDescription>{wearable?.price} ETH</WearableDescription>
          </WearableInfoContainer>
        </WearableContainer>
        <SwitchContainer>
          Equip {equipped && "ped"} <Switch />
        </SwitchContainer>
      </Row>
      <AppButton
        variant="accent"
        fullWidth
        onClick={() => {
          if (wearable) onBuyItem(wearable);
        }}
      >
        Buy item
      </AppButton>
    </Root>
  );
};
