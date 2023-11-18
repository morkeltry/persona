import { MoreOutlined } from "@ant-design/icons";
import { Col, Row, Switch } from "antd";
import { FC, useState } from "react";
import { styled } from "styled-components";
import { AddCircleIcon, AppDropdown } from "ui/base";
import { IRecordKey, IWearable } from "ui/types";

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
  margin-top: 10px;
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
const Price = styled.div`
  color: var(--gray-500, #6b7280);
  font-family: Satoshi;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 163.636% */
`;

export interface SwagProps {
  swags: IWearable[];
}
export const Swag: FC<SwagProps> = ({ swags }) => {
  const [selectedCat, setSelectedCat] = useState<string>();
  const [equipped, setEquipped] = useState<string[]>([]);
  return (
    <Root>
      <Row gutter={[24, 24]}>
        {swags?.map((token, index) => {
          return (
            <Col span={8} key={`persona-soul-bound-token-${index}`}>
              <Card>
                <Image src={token.item} alt="swag token for persona" />
                <Score>
                  {equipped?.indexOf(token.item) === -1 ? "Equip" : "Equipped"}
                </Score>
                <Menu>
                  <Switch
                    onChange={(checked) => {
                      const newEquipped = [...equipped];
                      if (checked) newEquipped.push(token.item);
                      else
                        newEquipped.splice(newEquipped.indexOf(token.item), 1);
                      setEquipped(newEquipped);
                    }}
                  />
                </Menu>
                <Name>{token.label}</Name>
                <Price>{token.price}</Price>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Root>
  );
};
