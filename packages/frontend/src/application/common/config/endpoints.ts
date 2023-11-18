import { CONFIG } from "./config";

export const appEndpoints = {
  openseaMetadata: (url: string) =>
    `${CONFIG.backendApi}nfts/opensea?url=${url}`,
  userENSs: (addr: string) => `${CONFIG.backendApi}ens/list/${addr}`,
  userNFTs: (addr: string) => `${CONFIG.backendApi}nfts/${addr}`,
};
