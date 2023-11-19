import { BasicProps } from "antd/es/layout/layout";
import { ExecutionContext } from "styled-components";
import { IColorScheme } from "./utils";
export interface IWearable {
  item: string;
  price: number;
  label?: string;
}
export type IRecordValues = Partial<Record<IRecordKey, string>>;
export interface IMenuItem<T> {
  key: T;
  label: string;
}
/** MESSAGES */
export enum TX_SPEED {
  DEFAULT = "Default",
  FAST = "Fast",
  SUPER_FAST = "Super fast!",
}
export type IEmojiCode = string;
export type IReaction = Record<IEmojiCode, IIndividual[]>;
export interface IMessage {
  type: "text" | "image" | "file" | "pdf" | "voicenote" | "proposal";
  timestamp: number;
  from: string;
  to: string;
  fromEns: IIndividual;
  toEns: IIndividual;
  reply?: IMessage;
  reactions: IReaction;
}
export interface ITextMessage extends IMessage {
  text: string;
}
export interface IFileMessage extends IMessage {
  name: string;
  url: string;
}
export interface IProposalMessage extends IMessage {
  contract: string;
  proposalID: number;
}

/********PROPOSAL *********** */
export interface IProposal {
  _id: string;
  contract: string;
  status: IProposalStatus;
  image: string;
  timestamp: number;
  author: IAuthor;
  title: string;
  description: string;
  content: string;
  voteUp: number;
  voteDown: number;
}
export type IProposalStatus = "failed" | "passed" | "paused" | "active";
/********PROPOSAL *********** */
export interface ICoin {
  contract: string;
  image: string;
  symbol: string;
  decimal: number;
  amount: string;
}
export type ITransferTypes = "coin" | "nft";
export interface ITransfer<T, ITransferTypes> {
  from: IIndividual;
  to: IIndividual;
  timestamp: number;
  asset: T;
  assetType: ITransferTypes;
}
export type IActivity =
  | ITransfer<ICoin, "token">
  | ITransfer<INFTMetadata, "nft">;
export interface IPost {
  post: ICanvas;
  by: IAuthor;
  timestamp: number;
}
//********** CANVAS ************ */
export type ICanvasType = "article" | "nft" | "music" | "video" | "auction";
export type ICanvas = ICanvasArticle | ICanvasNFT;

export interface ICanvasNFT extends INFTMetadata {
  canvasType: ICanvasType;
}
export interface ICanvasArticle extends IArticle {
  canvasType: ICanvasType;
}
export interface ICanvasArticle extends IArticle {
  canvasType: ICanvasType;
}
export interface IIndividual {
  avatar: string;
  name: string;
}
export type IAuthor = IIndividual;
export interface IArticle {
  author: IAuthor;
  title: string;
  body: string;
  image: string;
}

export interface INFTMetadataResolved {
  name: string;
  description: string;
  image: any;
}
export type INFTStandard = "erc1155" | "erc721";
export interface INFTMetadata {
  standard: INFTStandard;
  contract: string;
  token_id: string;
  url: any;
  tx_hash: string;
  block_number: number;
  resolved: INFTMetadataResolved;
}
export type IENSRegister = ".eth" | ".art" | ".persona.eth";
export interface IAccount {
  address: string;
  ensName?: string;
  avatar?: string;
}
export interface INFT {
  nftID: string;
  tokenID: number;
  description: React.ReactNode;
  image: string;
}
export interface INFTCollection {
  nftID: string;
  image: string;
  totalSupply: number;
  totalMinted: number;
}
export interface IDAOProfile {
  name: string;
  symbol: string;
  website: string;
  purpose: string;
  avatar: string;
}

export type IGuildKey =
  | "community"
  | "engineer"
  | "artist"
  | "investor"
  | "creator"
  | "writer";
export interface IGuild {
  dataKey: IGuildKey;
  title: string;
  description: string;
  image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
export type StepStatus = "error" | "wait" | "process" | "finish";
export type ITheme = "dark" | "light";
export type Days =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";
export type IAuctionDuration = "days" | "hours" | "minutes";
export interface IAuction {
  duration: Record<IAuctionDuration, number>;
  frequency: Days[];
  minAmount: number;
}
export interface IDAO {
  ens: IENSRecord;
  tokens: string[];
  members: string[];
  badges: string[];
  auction: IAuction;
}
export interface IToken {
  address: string;
  name: string;
  symbol: string;
  totalSupply?: string;
  image: string;
}
export interface ITokenPrice extends IToken {
  price: number;
  marketCap: number;
}
export interface IDAOTokenInfo extends ITokenPrice {
  balance?: string;
}
// export interface IPersona {
//   name: string;
//   imageUrl: string;
//   ens: string;
// }
export type IPersona = IENSRecord;
export interface IUser extends IPersona {}
export interface IBadge {
  name: string;
  role: string;
  imageUrl: string;
  description?: string;
}

export type IENSDefaultKey =
  | "com.twitter"
  | "com.github"
  | "com.discord"
  | "org.telegram"
  | "avatar"
  | "website"
  | "email"
  | "description"
  | "art.persona"
  | "com.genius"
  | "com.apple-music"
  | "com.x";
export type IRecordKey = IENSDefaultKey;

export type IENSDefaultTextRecords = Partial<
  Record<IENSDefaultKey, string | IGuildKey>
>;
export type ensChainKeys = "eth" | "btc";
export type IPersonaNFT = "avatar" | "banner";
export interface IENSRecord {
  address: string;
  ens: string;
  resolverAddr?: string;
  texts?: Partial<IENSDefaultTextRecords>;
  addresses?: Partial<Record<ensChainKeys, string>>;
  nfts: Record<IPersonaNFT, INFTMetadata | undefined>;
  score: number;
}

export type ExplorerName = "Etherscan" | "Polygonscan" | "Bscscan" | "Explorer";
export type NetowrkExplorerPath = "address" | "transaction" | "block";
export type SupportedNetworkId = "56" | "97" | "80001" | "137";
// export type ISwap = "pancakeSwap" | "quickSwap" | "smartSwap" | "p2p";
// export type INFT = "opensea" | "nftTrade" | "refinable";
export type WalletName =
  | "binance"
  | "metamask"
  | "trustWallet"
  | "walletConnect";
export interface Wallet {
  label: string;
  name: WalletName;
}
export interface NetowrkExplorer {
  label: ExplorerName;
  url: {
    base: string;
    addressPath: string;
    txPath: string;
    blockPath: string;
  };
}
export interface Network {
  label: string;
  id: SupportedNetworkId;
  url?: string;
  symbol: string;
  name: string;
  decimals: number;
  explorer: NetowrkExplorer;
  blockTxs: number;
}

export interface ICollectibles {
  avatarUrl: string;
  description: React.ReactNode;
  timeAgo: React.ReactNode;
  proofIcon: React.ReactNode;
}

export type IStyledProps = ExecutionContext &
  Omit<
    BasicProps & React.RefAttributes<HTMLElement> & object,
    keyof ExecutionContext
  > & {
    colors: IColorScheme;
  };
