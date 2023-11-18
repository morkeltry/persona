import { setAllPersona, useAppDispatch } from "application/redux";
import { useConnection } from "./connection";
import { useNFTs } from "./nfts";
import { useEns } from "./ens";
import { IPersona } from "ui/types";

export const usePersona = () => {
  const conn = useConnection();
  const nft = useNFTs();
  const ens = useEns();
  const dispatch = useAppDispatch();

  async function getAllPersonas(address: string): Promise<IPersona[]> {
    const resolvedEns = await conn.resolveEnsName(address);
    const nfts = await nft.getNfts(address, true);
    let ensList = await ens.getENSFromResolvedNFTs(
      nfts,
      resolvedEns,
      address,
      true
    );
    const personas = ensList?.filter((item) =>
      Boolean(item?.texts?.["art.persona"])
    );
    conn.setConnectionOverlayVars({ personas });
    dispatch(setAllPersona(personas));
    return personas;
  }
  return { getAllPersonas };
};
