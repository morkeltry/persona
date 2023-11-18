import {
  ensRegister,
  ensResolver,
  nftResolver,
} from "application/integrations";
import { setAllENS, useAppDispatch } from "application/redux";
import {
  AppInfrastructure,
  ZERO_ADDRESS,
  ensTextDefaultKeys,
} from "application/utils";
import {
  IENSDefaultTextRecords,
  IENSRecord,
  INFTMetadata,
  INFTStandard,
} from "ui/types";
import Web3 from "web3";

export const useEns = () => {
  let web3 = AppInfrastructure.web3;
  const dispatch = useAppDispatch();
  function init(newWeb3: Web3) {
    if (!web3) web3 = newWeb3;
  }
  function decomposeEnsAvatar(
    avatar: string
  ): Pick<INFTMetadata, "contract" | "standard" | "token_id"> | undefined {
    if (!avatar) return;
    const avatarArray = avatar.split("/");
    const contractInfo = avatarArray[1].split(":");
    const token_id = avatarArray[2];
    const standard = contractInfo[0] as INFTStandard;
    const contract = contractInfo[1];
    return { contract, token_id, standard };
  }
  async function getNFTDataFromAvatarRecord(
    avatar: string
  ): Promise<INFTMetadata | undefined> {
    if (!avatar) return;
    const decomposedData = decomposeEnsAvatar(avatar);
    if (!decomposedData) return;
    const { contract, standard, token_id } = decomposedData;
    let uri, nft;
    if (standard.toLowerCase() === "erc1155") {
      uri = await nftResolver({ web3 }).erc1155(contract).uri(token_id);
    } else if (standard.toLowerCase() === "erc1155") {
      // uri = await nftResolver({web3}).erc721(contract)
      //TODO://
    }
    if (uri) {
      nft = await nftResolver({ web3 }).metadata(uri, token_id, contract);
    }
    return {
      contract,
      standard,
      token_id,
      url: uri,
      tx_hash: "",
      block_number: -1,
      resolved: {
        name: nft?.name,
        description: nft?.description,
        image: nft?.image,
      },
    };
  }
  async function resolveAvatar(avatar: string): Promise<string | undefined> {
    if (!avatar) return;
    const decomposedData = decomposeEnsAvatar(avatar);
    if (!decomposedData) return;
    const { contract, standard, token_id } = decomposedData;
    if (standard === "erc1155") {
      const uri = await nftResolver({ web3 }).erc1155(contract).uri(token_id);
      if (uri) {
        const nft = await nftResolver({ web3 }).metadata(
          uri,
          token_id,
          contract
        );
        return nft?.["image"];
      }
    }
  }
  async function getDefaultTextRecords(
    domain: string,
    resolverAddr: string
  ): Promise<IENSDefaultTextRecords> {
    const web3 = await AppInfrastructure.getWeb3();
    const resolver = ensResolver({ web3 }, resolverAddr);
    const records: IENSDefaultTextRecords = {};
    for (let i = 0; i < ensTextDefaultKeys.length; i++) {
      const textRecord = await resolver?.text(domain, ensTextDefaultKeys[i]);
      records[ensTextDefaultKeys[i]] = textRecord || "";
    }
    return records;
  }
  async function resolveENS(
    domain: string,
    address: string
  ): Promise<IENSRecord> {
    const web3 = await AppInfrastructure.getWeb3();
    const resolverAddr = await ensRegister(web3).resolver(domain);
    let texts;
    if (resolverAddr !== ZERO_ADDRESS) {
      texts = await getDefaultTextRecords(domain, resolverAddr);
    }
    return {
      ens: domain,
      resolverAddr,
      score: 0,
      texts,
      address,
      nfts: {
        avatar: undefined,
        banner: undefined,
      },
    };
  }
  async function getENSFromResolvedNFTs(
    metadata: INFTMetadata[],
    primaryEns: IENSRecord,
    address: string,
    updateState?: boolean
  ): Promise<IENSRecord[]> {
    const listEnses = metadata.filter(
      ({ resolved: { name, description } }) =>
        (name?.includes(".eth") && description?.includes("ENS name")) ||
        (name?.includes(".art") &&
          description?.includes("ART Ethereum Name Service"))
    );
    const resolvedEnses = [];
    for (let i = 0; i < listEnses.length; i++) {
      const { resolved } = listEnses[i] || {};
      if (!resolved?.name) continue;
      try {
        const resultResolved = await resolveENS(resolved.name, address);
        resolvedEnses.push(resultResolved);
      } catch (fetchError) {
        console.log({ fetchError });
      }
    }
    let ensList = resolvedEnses;
    const enses = structuredClone(ensList) as IENSRecord[];
    if (enses && !enses.find((item) => item?.ens === primaryEns.ens)) {
      enses.push(primaryEns);
    }
    if (updateState) {
      dispatch(setAllENS(enses as IENSRecord[]));
    }
    return structuredClone(enses);
  }
  /**
   * This does not update the state of the application, use connection hook resolveEns instead
   * @param address wallet address
   * @returns return ens record of the address
   */
  async function resolveENSAddr(address: string): Promise<IENSRecord> {
    const web3 = await AppInfrastructure.getWeb3();
    const resolverAddr = await ensRegister(web3).reverseResolver(address);
    let domain, texts;
    if (resolverAddr !== ZERO_ADDRESS) {
      domain = await ensResolver({ web3, address }, resolverAddr).name(address);
      if (domain) {
        texts = await getDefaultTextRecords(domain, resolverAddr);
      }
    }
    return {
      ens: domain || "",
      address,
      resolverAddr,
      texts,
      nfts: {
        avatar: undefined,
        banner: undefined,
      },
      score: 0,
    };
  }
  return {
    init,
    resolveENS,
    resolveENSAddr,
    resolveAvatar,
    getDefaultTextRecords,
    getENSFromResolvedNFTs,
    getNFTDataFromAvatarRecord,
  };
};
