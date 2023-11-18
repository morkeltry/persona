import { FC, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { Footer } from "../Footer";
import { AppButton, ForwardIcon } from "ui/base";
import { Col, Divider, Row } from "antd";
import { AssetMenu, Menu, MenuContainer } from "ui/pages/common";
import { IWearable } from "ui/types";
type IAssetCatKey =
  | "general"
  | "bgColor"
  | "toneAndComplexion"
  | "hair"
  | "hairColor"
  | "facialHair"
  | "facialHairColor"
  | "accessories";
const assetMenus: { key: IAssetCatKey; label: string }[] = [
  { key: "general", label: "General" },
  { key: "bgColor", label: "Background color" },
  { key: "accessories", label: "Accessories" },
  { key: "toneAndComplexion", label: "Tone & complexion" },
  { key: "hair", label: "Hair" },
  { key: "hairColor", label: "Hair color" },
  { key: "facialHair", label: "Facial hair" },
  { key: "facialHairColor", label: "Facial hair color" },
];
const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Fab = styled(AppButton)`
  position: absolute;
  right: 0px;
  top: 5px;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  padding: 5px;
`;
const Card = styled.div<{ selected: boolean; bg: string }>`
  position: relative;
  display: flex;
  width: 208px;
  height: 176px;
  padding: 8px 24px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
  border-radius: 8px;
  background: var(--white-100, #fff);
  border: 1px solid var(--slate-300, #cbd5e1);
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    `
    border: 2px solid #166534;
    `}
  ${({ bg }) => bg && ` background-color: ${bg}`}
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: auto;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Overlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 8px;
  text-transform: uppercase;
  background-color: #57575712;
  border-radius: 8px;
`;
const Empty = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 32px;
`;
const AccessoryImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Label = styled.div``;
type ISelectedImage = Partial<Record<IAssetCatKey, IWearable[]>>;
export interface BuildAvatarProps {
  images: Partial<Record<IAssetCatKey, IWearable[]>>;
  setTotalAmount: (amount: number) => void;
  nextPage: string;
  onBack: () => void;
  selectedImages?: ISelectedImage;
  setAvatar: (selections: ISelectedImage) => void;
  onContinue: () => void;
}
export const BuildAvatar: FC<BuildAvatarProps> = ({
  onBack,
  onContinue,
  nextPage,
  images,
  selectedImages,
  setAvatar,
  setTotalAmount,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<IAssetCatKey>("general");

  useEffect(() => {
    if (!selectedImages) return;
    let amount = 0;
    for (const name in selectedImages) {
      if (Object.prototype.hasOwnProperty.call(selectedImages, name)) {
        const selections = selectedImages[name as IAssetCatKey];
        if (selections)
          for (let i = 0; i < selections.length; i++) {
            const item = selections[i];
            amount += item.price || 0;
          }
      }
    }
    setTotalAmount(amount);
  }, [JSON.stringify(selectedImages)]);
  return (
    <Root>
      <MenuContainer>
        <Menu ref={menuRef}>
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
        <Fab
          variant="accent"
          onClick={() => {
            if (menuRef.current)
              menuRef.current.scrollTo({
                left: menuRef.current.scrollLeft + 170,
                behavior: "smooth", // Enable smooth scrolling
              });
          }}
        >
          <ForwardIcon />
        </Fab>
      </MenuContainer>
      <ImageContainer>
        {images?.[tab] ? (
          <Row gutter={[6, 24]}>
            {images[tab]?.map((item, index) => {
              return (
                <Col span={8} key={`nft-selection-${index}`}>
                  <Card
                    {...{
                      bg: tab === "bgColor" ? item.item : "",
                      selected: Boolean(
                        selectedImages?.[tab] &&
                          selectedImages[tab]?.findIndex(
                            (a) => a.item === item.item
                          ) !== -1
                      ),
                      onClick() {
                        if (
                          tab !== "general" &&
                          (!selectedImages ||
                            selectedImages["general"]?.length === 0)
                        ) {
                          //TODO: notify
                          return;
                        }
                        setAvatar({
                          ...selectedImages,
                          [tab]: [item],
                        });
                      },
                    }}
                  >
                    {tab === "general" && (
                      <Image src={item.item} alt="persona-pfp" />
                    )}
                    {tab === "accessories" && (
                      <AccessoryImage>
                        <Image
                          src={item.item}
                          style={{ width: 113, height: 105 }}
                          alt="persona-pfp"
                        />
                        <Label>{item.label}</Label>
                        <span>{item.price} ETH</span>
                      </AccessoryImage>
                    )}
                    {tab === "bgColor" && (
                      <Overlay>
                        {item.item === "#fff" ? (
                          <span style={{ textTransform: "capitalize" }}>
                            None
                          </span>
                        ) : (
                          item.item
                        )}{" "}
                        <span>{item.price} ETH</span>
                      </Overlay>
                    )}
                  </Card>
                </Col>
              );
            })}
          </Row>
        ) : (
          <Empty>coming soon</Empty>
        )}
      </ImageContainer>
      <Divider>Or</Divider>
      <AppButton variant="secondary" noElevate>
        Select avatar from wallet
      </AppButton>
      <Footer
        {...{
          continueTo: nextPage,
          onBack,
          isBackDisabled: false,
          onContinue,
          isDisabled:
            !selectedImages || Object.keys(selectedImages).length === 0,
        }}
      />
    </Root>
  );
};
