import { IENSDefaultKey, Wallet } from "ui/types";
import { NetowrkExplorer, Network } from "ui/types";
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const ensTextDefaultKeys: IENSDefaultKey[] = [
  "avatar",
  "email",
  "com.discord",
  "com.github",
  "org.telegram",
  "com.twitter",
  "art.persona",
  "description",
];
export const APP_NAME = "persona";
export const LOCAL_STORAGE_PARAMS = {
  theme: `${APP_NAME}_theme`,
  wallet: `${APP_NAME}_wallet`,
  persona: `${APP_NAME}_persona`,
  address: `${APP_NAME}_address`,
  networkId: `${APP_NAME}_networkId`,
};
export const BSCExplorer = (base: string): NetowrkExplorer => ({
  label: "Bscscan",
  url: {
    base,
    addressPath: "/address/[address]",
    txPath: "/tx/[tx]",
    blockPath: "/block/[block]",
  },
});
export const PolygonExplorer = (base: string): NetowrkExplorer => ({
  label: "Bscscan",
  url: {
    base,
    addressPath: "/address/[address]",
    txPath: "/tx/[tx]",
    blockPath: "/block/[block]",
  },
});
export const NETWORKS: Network[] = [
  {
    label: "Binance",
    id: "56",
    name: "binance",
    symbol: "BNB",
    decimals: 18,
    explorer: BSCExplorer("https://bscscan.com"),
    blockTxs: 563, //1477000 / 68400 * 14
  },
  {
    label: "Binance Test",
    id: "97",
    name: "binance",
    symbol: "BNB",
    decimals: 18,
    explorer: BSCExplorer("https://testnet.bscscan.com"),
    blockTxs: 563, //1477000 / 68400 * 14
  },
  {
    label: "Polygon",
    id: "137",
    symbol: "MATIC",
    name: "polygon",
    decimals: 18,
    explorer: PolygonExplorer("https://polygonscan.com"),
    blockTxs: 635, //3106458 / 68400 * 14
  },
  {
    label: "Polygon Test",
    id: "80001",
    symbol: "MATIC",
    name: "polygon",
    decimals: 18,
    explorer: PolygonExplorer("https://mumbai.polygonscan.com`"),
    blockTxs: 635, //3106458 / 68400 * 14
  },
];
export const WALLETS: Wallet[] = [
  {
    label: "Metamask",
    name: "metamask",
  },
  {
    label: "Wallet Connect",
    name: "walletConnect",
  },
  {
    label: "Trust Wallet",
    name: "trustWallet",
  },
];
export const appAddresses = {
  ens: {
    registry: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  },
};
