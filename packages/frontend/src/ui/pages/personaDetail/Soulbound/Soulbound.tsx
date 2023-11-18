import { MoreOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { FC, useState } from "react";
import { styled } from "styled-components";
import { AddCircleIcon, AppDropdown } from "ui/base";
import { IRecordKey } from "ui/types";

const Root = styled.div``;
const Card = styled.div`
  width: 214px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid var(--slate-300, #cbd5e1);
  background: var(--white-100, #fff);
  position: relative;
`;
const Image = styled.img`
  width: 131px;
  height: 133px;
  flex-shrink: 0;
`;
const Score = styled.div`
  position: absolute;
  left: 8px;
  top: 8px;
  display: inline-flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 5.996px;
  border-radius: 8px;
  background: var(--slate-100, #f1f5f9);

  color: var(--slate-700, #334155);
  font-family: Satoshi;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 166.667% */
`;
const Menu = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
`;
const Name = styled.div`
  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */
  cursor: pointer;
`;
const Achieved = styled.div`
  color: var(--gray-500, #6b7280);
  font-family: Satoshi;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 163.636% */
`;
const NewCatelogue = styled.div`
  display: inline-flex;
  padding: 8px 6px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: var(--slate-50, #f8fafc);

  svg {
    height: 20px;
    width: 20px;
  }

  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */
`;
export interface ScoredBoundToken {
  label: string;
  name: string;
  platform: IRecordKey | "others";
  timestamp: number;
  score: number;
  image: string;
}

interface ISoulboundCategories {
  name: string;
  label: string;
}
export interface SoulboundProps {
  tokens: ScoredBoundToken[];
  categories?: ISoulboundCategories[];
}
export const Soulbound: FC<SoulboundProps> = ({ tokens, categories }) => {
  const [selectedCat, setSelectedCat] = useState<string>();
  return (
    <Root>
      <Row
        gutter={24}
        style={{
          marginLeft: 1,
          marginBottom: 10,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <AppDropdown
          value={
            categories?.find((item) => item.name === selectedCat)?.label ||
            "Select Category"
          }
          containerProps={{
            style: {
              borderRadius: 8,
              backgroundColor: "#F1F5F9",
            },
          }}
          items={
            categories?.map((item) => ({
              key: item.name,
              label: item.label,
              onClick() {
                setSelectedCat(item.name);
              },
            })) || []
          }
        />
        <NewCatelogue>
          <AddCircleIcon />
          New Catalogue
        </NewCatelogue>
      </Row>
      <Row gutter={[24, 24]}>
        {tokens?.map((token, index) => {
          return (
            <Col span={8} key={`persona-soul-bound-token-${index}`}>
              <Card>
                <Image src={token.image} alt="soul bound token for persona" />
                <Score>{token.score}</Score>
                <Menu>
                  <MoreOutlined />
                </Menu>
                <Name>{token.label}</Name>
                <Achieved>Achieved 2023</Achieved>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Root>
  );
};
