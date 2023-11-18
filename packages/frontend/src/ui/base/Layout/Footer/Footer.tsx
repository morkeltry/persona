import { FC } from "react";
import { styled } from "styled-components";
import { Brand, Logo, Name } from "../common";
import { DiscordIcon, Telegram3Icon } from "ui/base/svg";

const Root = styled.div``;
const Docs = styled.div`
  display: flex;
  justify-content: center;
`;
const Link = styled.a`
  color: var(--background-new-dark-100, #000);
  font-family: Satoshi;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
  padding: 10px;
`;
export interface FooterProps {}
export const Footer: FC<FooterProps> = () => {
  return (
    <Root>
      <Brand>
        <Logo src="/assets/logo.png" alt="persona" />
        <Name>persona</Name>
      </Brand>
      <Docs>
        <Link href="#" target="_blank">
          Community Guideline
        </Link>
        <Link href="#" target="_blank">
          Terms of Services
        </Link>
        <Link href="#" target="_blank">
          Documentations
        </Link>
        <Link href="#" target="_blank">
          Privacy Policy
        </Link>
      </Docs>
      <Docs>
        <Link href="https://x.com/personadotart" target="_blank">
          <img src="/assets/platforms/x.png" alt="persona twitter" />{" "}
        </Link>
        <Link href="https://discord.com/personadotart" target="_blank">
          <DiscordIcon />
        </Link>
        <Link href="https://telegram.org/personadotart" target="_blank">
          <Telegram3Icon />
        </Link>
      </Docs>
    </Root>
  );
};
