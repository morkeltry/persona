import Web3 from "web3";
import ensRegisterABI from "../utils/network/abis/ens.register.json";
import { AbiItem } from "web3-utils";
import { appAddresses } from "application/utils/constants";
import { ethers } from "ethers";

export const ensRegister = (web3: Web3) => {
  const instance = new web3.eth.Contract(
    ensRegisterABI as AbiItem[],
    appAddresses.ens.registry
  );
  function getReverseNode(addr: string) {
    return ethers.utils.namehash(addr.slice(2).toLowerCase() + ".addr.reverse");
  }
  return {
    reverseResolver(addr: string): Promise<string> {
      const nodeHash = getReverseNode(addr);
      return instance.methods.resolver(nodeHash).call();
    },
    resolver(domain: string): Promise<string> {
      return instance.methods.resolver(ethers.utils.namehash(domain)).call();
    },
  };
};
