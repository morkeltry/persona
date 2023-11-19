import { NewPersona } from "ui/pages/newPersona";
import { accessories } from "../dummy";
import { useNFTs } from "application/hooks"
import { selectConnection, selectNFTs, useAppSelector } from "application/redux";
import { useEffect } from "react";

export default function NewPersonaPage() {
  const { address } = useAppSelector(selectConnection);
  const nfts = useAppSelector(selectNFTs);
  const { getNfts } = useNFTs();
  useEffect(() => {
    if(address){
      getNfts(address, true);
    }
  }, [address])
  return (
    <NewPersona
      nfts={nfts}
      onMint={(data) => {
        console.log({ data });
      }}
      checkNameAvailability={async (name: string) => {
        return false;
      }}
      images={{
        general: [
          { item: "/assets/nft/persona1.png", price: 0 },
          { item: "/assets/nft/persona2.png", price: 0 },
          { item: "/assets/nft/persona3.png", price: 0 },
        ],
        bgColor: [
          { item: "#fff", price: 0.0 },
          { item: "#ffe0b3", price: 0.52 },
          { item: "#ff9c95", price: 0.52 },
          { item: "#fdffb3", price: 0.52 },
          { item: "#b3ffc4", price: 0.52 },
          { item: "#95b9ff", price: 0.52 },
          { item: "#b2fffa", price: 0.52 },
          { item: "#beb3ff", price: 0.52 },
          { item: "#f195ff", price: 0.52 },
        ],
        accessories,
      }}
    />
  );
}
