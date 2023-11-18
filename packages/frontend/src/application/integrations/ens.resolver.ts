import Web3 from "web3";
import ensResolverABI from "../utils/network/abis/ens.resolver.json";
import { AbiItem } from "web3-utils";
import { ethers } from "ethers";

export type IENSResolver = (
  conn: { web3: Web3; address?: string },
  resolverAddr: string
) => {
  name: (addr: string) => Promise<string | undefined>;
  text: (domain: string, key: string) => Promise<string | undefined>;
};
export const ensResolver: IENSResolver = ({ web3, address }, resolverAddr) => {
  if (!resolverAddr) throw new Error("Address can't be empty");
  const instance = new web3.eth.Contract(
    ensResolverABI as AbiItem[],
    resolverAddr
  );
  const { namehash } = ethers.utils;
  function getReverseNode(addr: string) {
    return namehash(addr.slice(2).toLowerCase() + ".addr.reverse");
  }
  return {
    name(addr) {
      return instance.methods.name(getReverseNode(addr)).call();
    },
    async text(domain, key) {
      return instance.methods.text(namehash(domain), key).call();
      // if (key === "avatar") {
      //   return resolveAvatar(result);
      // }
    },
  };
};
