import { appEndpoints } from "application/common/config/endpoints";
import { appFetch } from "application/utils/fetch";
import Web3 from "web3";
import { AbiItem } from "web3-utils";

export type INFTResolver = (conn: { web3: Web3 }) => {
  metadata: (url: string, tokenId: string, addr: string) => Promise<any>;
  erc1155: (addr: string) => {
    uri: (tokenId: string) => Promise<string | undefined>;
  };
  erc721: (addr: string) => void;
};

export const nftResolver: INFTResolver = ({ web3 }) => {
  return {
    metadata: resolveNFTUrl,
    erc1155(addr) {
      const ABI = JSON.parse(
        '[{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]'
      );
      const contract = new web3.eth.Contract(ABI as AbiItem[], addr);
      return {
        async uri(tokenId) {
          return contract.methods.uri(tokenId).call();
        },
      };
    },
    erc721(addr) {}, //TODO:
  };
};
async function resolveNFTUrl(
  url: string,
  tokenId: string,
  addr: string
): Promise<any> {
  if (url.includes("data:application/json")) {
    url = url.split(",")[1];
    return decodeBase6(url);
  }
  url = url.replace("ipfs://", "https://ipfs.io/ipfs/");
  if (url.includes("ens-metadata-service.appspot.com/name/0x")) {
    url = `https://metadata.ens.domains/mainnet/${addr}/{id}`;
  }
  if (url.includes("https://api.opensea.io/api/v1/metadata")) {
    url = url.replace("{id}", Web3.utils.numberToHex(tokenId).slice(2));
  } else {
    url = url.replace("{id}", tokenId);
  }

  try {
    const nftData = (await appFetch(
      url.includes("api.opensea.io") ? appEndpoints.openseaMetadata(url) : url
    )) as any;
    if (typeof nftData === "object") {
      // Update the `image` property
      if (typeof nftData?.["image"] === "string") {
        nftData["image"] = nftData["image"].replace(
          "ipfs://",
          "https://ipfs.io/ipfs/"
        );
      }
    }
    return nftData;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function decodeBase6(base64Str: string): any {
  const decodedString = window.atob(base64Str);

  let data;
  try {
    data = JSON.parse(decodedString);
  } catch (error) {
    throw new Error("Error parsing JSON data");
  }

  return data;
}
