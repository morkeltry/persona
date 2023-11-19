import {
  IActivity,
  IFileMessage,
  IMessage,
  IPersona,
  IPost,
  IProposal,
  IProposalMessage,
  ITextMessage,
  ITokenPrice,
} from "ui/types";
import { utils } from "ui/utils";
export const ensNames = [
  "dr3a.eth",
  "adebimpe.xyz",
  "vitalik.eth",
  "jesse.xyz",
  "IvanKraft.eth",
  "BLKHAT.eth",
  "lovvr.eth",
  "alisha.eth",
];
export const imageIds = ["4", "5", "6", "7", "8", "9", "10", "11"];
export const friends: IPersona[] = imageIds.map((item, index) => ({
  ens: ensNames[index],
  address: "0x",
  score: 7,
  nfts: {
    avatar: {
      standard: "erc1155",
      block_number: 0,
      url: "",
      token_id: "1",
      contract: "0x",
      tx_hash: "0x",
      resolved: {
        name: item,
        image: `/assets/punks/punk${item}.png`,
        description: "",
      },
    },
    banner: undefined,
  },
  texts: {
    avatar: `/assets/punks/punk${item}.png`,
  },
}));
export const people: IPersona[] = imageIds.map((item, index) => ({
  address: "0x",
  ens: ensNames[index],
  score: 8,
  texts: {
    "art.persona": "engineer",
    avatar: `/assets/punks/punk${item}.png`,
    description: "Gamer",
    "com.github": "",
    "com.twitter": "@chokey2nv",
    "org.telegram": "@ceejay_priest",
  },
  nfts: {
    avatar: {
      block_number: 0,
      tx_hash: "0x",
      contract: "0x",
      standard: "erc1155",
      token_id: "1",
      url: "",
      resolved: {
        image: `/assets/punks/punk${item}.png`,
        name: "",
        description: "",
      },
    },
    banner: undefined,
  },
}));
export const proposals: IProposal[] = [
  {
    _id: "1",
    contract: "0x",
    image: "/assets/persona.png",
    title:
      "Establish a community grant fund for supporting innovative projects within the DAO",
    description:
      "Create community grant fund to nurture innovative projects aligned with DAO's mission and drive collective growth.",
    content:
      "This proposal mandates a collective vote to determine whether we should permit the issuance of Artist badges to members within this community.",
    timestamp: utils.currentTimestamp(),
    status: "failed",
    author: {
      name: "ceejay.eth",
      avatar: "",
    },
    voteDown: 23,
    voteUp: 12,
  },
  {
    _id: "2",
    contract: "0x",
    image: "/assets/persona.png",
    title: "Allow Artist badges to be issued to members",
    description: "",
    content:
      "This proposal mandates a collective vote to determine whether we should permit the issuance of Artist badges to members within this community.",
    timestamp: utils.currentTimestamp(),
    status: "failed",
    author: {
      name: "ceejay.eth",
      avatar: "",
    },
    voteDown: 23,
    voteUp: 12,
  },
  {
    _id: "3",
    contract: "0x",
    image: "/assets/persona.png",
    title: "Allow Artist badges to be issued to members",
    description: "",
    content:
      "This proposal mandates a collective vote to determine whether we should permit the issuance of Artist badges to members within this community.",
    timestamp: utils.currentTimestamp(),
    status: "passed",
    author: {
      name: "ceejay.eth",
      avatar: "",
    },
    voteDown: 23,
    voteUp: 12,
  },
];
export const messages: IMessage[] = [
  {
    type: "text",
    from: "0x",
    to: "0x",
    fromEns: {
      name: "ceejay.persona.eth",
      avatar: "/assets/persona.png",
    },
    toEns: { name: "femi.eth", avatar: "/assets/persona.png" },
    timestamp: Date.now(),
    text: "How are you?",
    reactions: {
      "128293": friends.map((i) => ({
        avatar: i.nfts?.avatar?.resolved?.image,
        name: i.ens,
      })),
    },
  } as ITextMessage,
  {
    from: "0x",
    to: "0x",
    fromEns: {
      name: "ceejay.persona.eth",
      avatar: "/assets/persona.png",
    },
    toEns: { name: "femi.eth", avatar: "/assets/persona.png" },
    timestamp: Date.now(),
    file: "game file",
    type: "pdf",
    url: "",
    name: "",
    reactions: {},
  } as IFileMessage,
  {
    from: "0x",
    to: "0x",
    fromEns: {
      name: "ceejay.persona.eth",
      avatar: "/assets/persona.png",
    },
    toEns: { name: "femi.eth", avatar: "/assets/persona.png" },
    timestamp: Date.now(),
    file: "game file",
    type: "voicenote",
    url: "https://api.twilio.com//2010-04-01/Accounts/AC25aa00521bfac6d667f13fec086072df/Recordings/RE6d44bc34911342ce03d6ad290b66580c.mp3",
    reactions: {},
    name: "",
  } as IFileMessage,
  {
    from: "0x",
    to: "0x",
    fromEns: {
      name: "ceejay.eth",
      avatar: "/assets/persona.png",
    },
    toEns: { name: "femi.eth", avatar: "/assets/persona.png" },
    timestamp: Date.now(),
    file: "game file",
    type: "proposal",
    reactions: {},
    proposalID: 1,
    contract: "0x",
  } as IProposalMessage,
];
export const daoActivities: IActivity[] = [
  {
    asset: {
      contract: "0x",
      amount: "300000000000000000000000000000",
      symbol: "ETH",
      decimal: 18,
      image: "/assets/persona.png",
    },
    timestamp: utils.currentTimestamp(),
    assetType: "token",
    from: {
      name: "ceejayDao",
      avatar: "/assets/persona.png",
    },
    to: {
      name: "emeka#123",
      avatar: "/assets/persona.png",
    },
  },
  {
    asset: {
      contract: "0x",
      amount: "3000000000000000000000000",
      symbol: "ETH",
      decimal: 18,
      image: "/assets/persona.png",
    },
    timestamp: utils.currentTimestamp(),
    assetType: "token",
    to: {
      name: "ceejayDao",
      avatar: "/assets/persona.png",
    },
    from: {
      name: "emeka#123",
      avatar: "/assets/persona.png",
    },
  },
  {
    asset: {
      standard: "erc1155",
      block_number: 23,
      contract: "0x",
      token_id: "323",
      url: "",
      tx_hash: "0x",
      resolved: {
        image: "/assets/persona.png",
        description: "",
        name: "Art#9384",
      },
    },
    timestamp: utils.currentTimestamp(),
    assetType: "nft",
    to: {
      name: "ceejayDao",
      avatar: "/assets/persona.png",
    },
    from: {
      name: "emeka#123",
      avatar: "/assets/persona.png",
    },
  },
];
export const posts: IPost[] = [
  {
    timestamp: utils.currentTimestamp(),
    by: {
      name: "ceejay.eth",
      avatar: "/assets/persona.png",
    },
    post: {
      title: "First Article",
      body: "By default, NFT collectible supplies are unlimited but you have the option of setting a preferred supply quantity. Leaving th...",
      author: { avatar: "/assets/persona.png", name: "ceejay.eth" },
      image: "",
      canvasType: "article",
    },
  },
  {
    timestamp: utils.currentTimestamp(),
    by: {
      name: "ceejay.eth",
      avatar: "/assets/persona.png",
    },
    post: {
      title: "First Article",
      body: "By default, NFT collectible supplies are unlimited but you have the option of setting a preferred supply quantity. Leaving th...",
      author: { avatar: "/assets/persona.png", name: "ceejay.eth" },
      image: "/assets/persona.png",
      canvasType: "article",
    },
  },
  {
    timestamp: utils.currentTimestamp(),
    by: {
      name: "ceejay.eth",
      avatar: "/assets/persona.png",
    },
    post: {
      standard: "erc1155",
      canvasType: "nft",
      block_number: 23,
      contract: "0x",
      token_id: "323",
      url: "",
      tx_hash: "0x",
      resolved: {
        image: "/assets/persona.png",
        description: "",
        name: "Art#9384",
      },
    },
  },
];

export const apiTokens: ITokenPrice[] = [
  {
    address: "0x1",
    name: "Polygon",
    symbol: "MATIC",
    image: "/assets/token.svg",
    price: 1.1,
    marketCap: 200000000,
  },
  {
    address: "0x2",
    name: "Polygon",
    symbol: "MATIC",
    image: "/assets/token.svg",
    price: 1.1,
    marketCap: 200000000,
  },
];
export const persona: IPersona = {
  ens: "ceejay.persona.eth",
  score: 6,
  texts: {
    "art.persona": "engineer",
    avatar: "/assets/persona.png",
    "com.github": "chokey2nv",
    "com.twitter": "chokey2nv",
    website: "https://chokey2nv.com",
    "com.discord": "ceejay#232",
    "org.telegram": "ceejay_priest",
    description:
      "HarmonyDAO is a decentralized autonomous organization focused on promoting harmony and collaboration within the web3 space!",
  },
  nfts: {
    avatar: {
      resolved: {
        image: "/assets/persona.png",
        name: "My First Articl",
        description: "This is the my first article",
      },
      standard: "erc1155",
      contract: "",
      token_id: "",
      url: "",
      tx_hash: "",
      block_number: 0,
    },
    banner: {
      resolved: {
        image: "/assets/sample/banners/banner1.png",
        name: "",
        description: "",
      },
      standard: "erc1155",
      contract: "",
      token_id: "",
      url: "",
      tx_hash: "",
      block_number: 0,
    },
  },
  address: "0x000",
};
export { persona as dummyPersona };
