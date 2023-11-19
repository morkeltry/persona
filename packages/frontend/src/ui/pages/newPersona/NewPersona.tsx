import { FC, useState } from "react";
import { styled } from "styled-components";
import {
  Header,
  NewPersonaSteps,
  NewPersonaStepsProps,
  stepItems,
} from "./Steps";
import { AppButton, CoinIcon, PersonaFrame } from "ui/base";
import { Col, Row } from "antd";
import { BasicDetail, BasicDetailProps } from "./BasicDetail";
import { SetGuild } from "./SetGuild";
import { IGuildKey, INFTMetadata, IPersona } from "ui/types";
import { BuildAvatar, BuildAvatarProps } from "./BuildAvatar";
import { SetRecords, SetRecordsProps } from "./SetRecords";
import { routeNames } from "application";
import { useNavigate } from "react-router-dom";
import { Preview } from "./Preview";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const StepContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;
const FeeContainer = styled.div`
  display: inline-flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 24px;
  background: var(--slate-100, #f1f5f9);
`;
const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
type IStatuses = NewPersonaStepsProps["statuses"];
export interface NewPersonaProps {
  checkNameAvailability: BasicDetailProps["checkNameAvailability"];
  images: BuildAvatarProps["images"];
  nfts: BuildAvatarProps["nfts"];
  onMint: (data: {
    basicInfo?: Parameters<BasicDetailProps["setBasic"]>[0];
    selectedGuild?: IGuildKey;
    selectedImages?: Parameters<BuildAvatarProps["setAvatar"]>[0];
    records?: Parameters<SetRecordsProps["setRecords"]>[0];
  }) => void;
}
export const NewPersona: FC<NewPersonaProps> = ({
  checkNameAvailability,
  images,
  onMint,
  nfts,
}) => {
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [statuses, setStatuses] = useState<IStatuses>([
    // "finish",
    // "finish",
    // "finish",
    // "finish",
    "process",
  ]);
  const [basicInfo, setBasic] =
    useState<Parameters<BasicDetailProps["setBasic"]>[0]>();
  const [selectedGuild, setGuild] = useState<IGuildKey>();
  const [selectedImages, setAvatar] =
    useState<Parameters<BuildAvatarProps["setAvatar"]>[0]>();
  const [records, setRecords] = useState<
    Parameters<SetRecordsProps["setRecords"]>[0]
  >({});
  const [flip, setFlip] = useState<boolean>(false);
  const [selectedNft, setNft] =
    useState<Parameters<BuildAvatarProps["setNft"]>[0]>();

  const currentIndex = statuses.findIndex((item) => item === "process");
  const prevStep = (currentIndex: number, statuses: IStatuses) => {
    const newStatus = [...statuses];
    newStatus[currentIndex] = "wait";
    newStatus[currentIndex - 1] = "process";
    setStatuses(newStatus);
  };
  const nextStep = (currentIndex: number, statuses: IStatuses) => {
    const newStatus = [...statuses];
    newStatus[currentIndex] = "finish";
    newStatus[currentIndex + 1] = "process";
    setStatuses(newStatus);
  };
  const persona: IPersona = {
    score: 30,
    ens: basicInfo?.name || "",
    texts: {
      ...records,
      description: basicInfo?.description,
      "art.persona": selectedGuild,
    },
    address: "0x",
    nfts: {
      avatar: selectedNft || {
        tx_hash: "",
        block_number: 0,
        standard: "erc721",
        contract: "0x",
        token_id: "",
        url: "",
        resolved: {
          name: "",
          image: selectedImages?.general?.[0].item,
          description: "",
        },
      },
      banner: undefined,
    },
  };
  return (
    <Root>
      <StepContainer>
        <NewPersonaSteps
          statuses={statuses}
          onBack={() => navigate(routeNames.home)}
        />
        <FeeContainer>
          <CoinIcon /> Total cost: <strong>{totalAmount} ETH</strong>
        </FeeContainer>
      </StepContainer>
      {currentIndex === 4 ? (
        <>
          <PreviewHeader>
            <Header {...{ statuses }} />
            <AppButton
              variant="accent"
              style={{ width: 247, padding: 16 }}
              onClick={() =>
                onMint({
                  basicInfo,
                  selectedGuild,
                  selectedImages,
                  records,
                })
              }
            >
              Mint persona
            </AppButton>
          </PreviewHeader>
          <Preview
            {...{
              persona,
              background: selectedImages?.bgColor?.[0].item,
              onEdit(stepIndex) {
                statuses[statuses.length - 1] = "wait";
                statuses[stepIndex] = "process";
                setStatuses([...statuses]);
              },
            }}
          />
        </>
      ) : (
        <Row gutter={24}>
          <Col span={14}>
            <Header {...{ statuses }} />
            <div style={{ marginBottom: 20 }} />
            {currentIndex === 0 && (
              <BasicDetail
                {...{
                  checkNameAvailability,
                  onBack() {
                    //do nothing
                  },
                  basicInfo,
                  setBasic,
                  onContinue() {
                    nextStep(currentIndex, statuses);
                  },
                  nextPage: stepItems[currentIndex + 1].title,
                }}
              />
            )}
            {currentIndex === 1 && (
              <SetGuild
                {...{
                  onBack() {
                    prevStep(currentIndex, statuses);
                  },
                  setGuild,
                  selectedGuild,
                  onContinue() {
                    nextStep(currentIndex, statuses);
                  },
                  nextPage: stepItems[currentIndex + 1].title,
                }}
              />
            )}
            {currentIndex === 2 && (
              <BuildAvatar
                {...{
                  selectedNft,
                  setNft,
                  nfts,
                  images,
                  setTotalAmount,
                  onBack() {
                    prevStep(currentIndex, statuses);
                  },
                  setAvatar,
                  selectedImages,
                  onContinue() {
                    setFlip(true);
                    nextStep(currentIndex, statuses);
                  },
                  nextPage: stepItems[currentIndex + 1].title,
                }}
              />
            )}
            {currentIndex === 3 && (
              <SetRecords
                {...{
                  onBack() {
                    setFlip(false);
                    prevStep(currentIndex, statuses);
                  },
                  setRecords,
                  records,
                  onContinue() {
                    setFlip(false);
                    nextStep(currentIndex, statuses);
                  },
                  nextPage: stepItems[currentIndex + 1].title,
                  onLink(url, username) {
                    console.log({ url, username });
                  },
                }}
              />
            )}
          </Col>
          <Col span={10}>
            <PreviewContainer>
              <PersonaFrame
                background={selectedImages?.bgColor?.[0].item}
                ensRecord={persona}
                flip={flip}
                shadow
                animate
              />
            </PreviewContainer>
          </Col>
        </Row>
      )}
    </Root>
  );
};
