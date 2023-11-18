import { FC, useState } from "react";
import { styled } from "styled-components";
import { AppButton, AppDropdown, CopyIcon } from "ui/base";
import { IPersona } from "ui/types";
import { Label, Row } from "../common";
import { PersonCard } from "../../PersonCard";

const Root = styled.div``;
const Address = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  background: var(--slate-700, #334155);

  color: var(--white-white, #fff);
  font-variant-numeric: lining-nums tabular-nums;
  font-family: Satoshi;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
`;
export interface ReceiveTransferProps {
  personas: IPersona[];
  onCancel: () => void;
}
export const ReceiveTransfer: FC<ReceiveTransferProps> = ({
  personas,
  onCancel,
}) => {
  const [persona, setPersona] = useState<IPersona>(personas[0]);

  return (
    <Root>
      <Row>
        <Label>You will be receiving to</Label>
        <AppDropdown
          items={personas.map((persona) => {
            return {
              label: persona.ens,
              key: persona.ens,
              onClick() {
                setPersona(persona);
              },
            };
          })}
          value={persona.ens}
          containerProps={{
            style: {
              borderRadius: 8,
              background: "#f1f5f9",
              border: "solid 1px #cbd5e1",
            },
          }}
        />
      </Row>
      {persona && (
        <Row style={{ alignItems: "center", marginTop: 20 }}>
          <div style={{ width: 370 }}>
            <PersonCard ensRecord={persona} />
          </div>
          <Address>
            {persona.address} <CopyIcon />
          </Address>
        </Row>
      )}
      <Row style={{ marginTop: 20 }}>
        <AppButton variant="secondary" onClick={onCancel} noElevate>
          Cancel
        </AppButton>
      </Row>
    </Root>
  );
};
