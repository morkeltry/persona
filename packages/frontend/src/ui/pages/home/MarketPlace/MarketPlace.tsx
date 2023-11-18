import { FC, useEffect, useState } from "react";
import { styled } from "styled-components";
import { AssetMenu, Menu, MenuContainer } from "../../common";
import { IWearable } from "ui/types";
import { Col, Row } from "antd";
import { AppButton } from "ui/base";
type IAssetCatKey = "general" | "bodyAccessories" | "handAccessories";
const assetMenus: { key: IAssetCatKey; label: string }[] = [
  { key: "general", label: "General" },
  { key: "bodyAccessories", label: "Body Accessories" },
  { key: "handAccessories", label: "Hand Accessories" },
];
const Root = styled.div``;
const WearableContainer = styled.div``;
const Card = styled.div`
  width: 282px;
  height: 330px;
  flex-shrink: 0;
  border-radius: 24px;
  background: var(--zinc-50, #fafafa);
`;
const CardImage = styled.img`
  width: 266px;
  height: 183px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #f1f1f1;
  padding: 10px 20px;
`;
const CardBody = styled.div`
  width: 100%;
  display: inline-flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 24px;
  background: var(--zinc-50, #fafafa);
`;
const CardBodyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
const CardBodyRowLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1px;
`;
const CardBodyName = styled.div`
  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */
`;
const CardBodyPrice = styled.div`
  color: var(--gray-500, #6b7280);
  font-family: Satoshi;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 163.636% */
`;
const CardBodyHighlight = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: var(--red-50, #fef2f2);

  color: var(--red-800, #991b1b);
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;
const Button = styled(AppButton)`
  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 24px;
`;
export interface MarketPlaceProps {
  fetchAccessories: (category: IAssetCatKey) => Promise<IWearable[]>;
  onPreview: (wearable: IWearable) => void;
}
export const MarketPlace: FC<MarketPlaceProps> = ({
  fetchAccessories,
  onPreview,
}) => {
  const [tab, setTab] = useState<IAssetCatKey>("general");
  const [wearables, setWearables] = useState<IWearable[]>([]);

  useEffect(() => {
    (async () => {
      setWearables(await fetchAccessories(tab));
    })();
  }, [tab]);

  // useEffect(() => {}, []);
  return (
    <Root>
      <MenuContainer>
        <Menu>
          {assetMenus.map((menu, index) => {
            return (
              <AssetMenu
                selected={menu.key === tab}
                key={`asset-item-${index}`}
                onClick={() => setTab(menu.key)}
              >
                {menu.label}
              </AssetMenu>
            );
          })}
        </Menu>
      </MenuContainer>
      <WearableContainer>
        <Row gutter={[24, 24]}>
          {wearables?.map((wearable, index) => {
            return (
              <Col span={6} key={`wearable-collection-${index}`}>
                <Card>
                  <CardImage src={wearable.item} alt="wearable item" />
                  <CardBody>
                    <CardBodyRow>
                      <CardBodyRowLeft>
                        <CardBodyName>{wearable.label}</CardBodyName>
                        <CardBodyPrice>{wearable.price} ETH</CardBodyPrice>
                      </CardBodyRowLeft>
                      {wearable.price > 0.5 && (
                        <CardBodyHighlight>Expensive</CardBodyHighlight>
                      )}
                    </CardBodyRow>
                    <CardBodyRow>
                      <Button noElevate onClick={() => onPreview(wearable)}>
                        Preview
                      </Button>
                      <Button noElevate variant="accent">
                        Buy item
                      </Button>
                    </CardBodyRow>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </WearableContainer>
    </Root>
  );
};
