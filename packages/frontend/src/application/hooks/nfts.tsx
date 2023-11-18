import { CONFIG } from "application/common";
import { appEndpoints } from "application/common/config/endpoints";
import { appFetch } from "application/utils";
import { INFTMetadata } from "ui/types";
import { setAllNFTs, useAppDispatch } from "application/redux";

const validateImage = (image: string) =>
  image.replace("ipfs://", "https://ipfs.io/ipfs/");
export const useNFTs = () => {
  const dispatch = useAppDispatch();

  /**
   * Fetch the all nfts associated with this address from persona endpoint
   * @param addr wallet address
   * @returns return api response from backend (persona)
   */
  async function getUserNFTs(addr: string) {
    let result;
    try {
      result = await appFetch<INFTMetadata[]>(appEndpoints.userNFTs(addr));
      return result;
    } catch (e) {
      console.log(e);
      return result;
    }
  }
  /**
   * Get the list of nfts from endpoint (persona) and/or update the state
   * @param address wallet address
   * @param updateState updates state of the application
   * @returns return the list of nfts metadata
   */
  async function getNfts(
    address: string,
    updateState?: boolean
  ): Promise<INFTMetadata[]> {
    const metadata = await getUserNFTs(address);
    // const metadata = sampleMetaData;
    if (metadata) {
      for (let i = 0; i < metadata.length; i++) {
        const nftMetadata = metadata[i];
        if (typeof nftMetadata.url === "string") {
          let description, name, image;
          try {
            const result = (await appFetch(
              nftMetadata.url.includes("api.opensea.io")
                ? `${CONFIG.backendApi}nfts/opensea?url=${nftMetadata.url}`
                : nftMetadata.url
            )) as any;
            description = result.description;
            name = result.name;
            image = result.image;
          } catch (e) {
            console.error(e);
          }
          if (typeof image === "string") {
            image = validateImage(image);
          }
          metadata[i].resolved = {
            description,
            image,
            name,
          };
        } else if (Array.isArray(nftMetadata.url)) {
          metadata[i].resolved = {
            description: nftMetadata.url.find(
              (item) => item.Key === "description"
            )?.Value as string,
            name: nftMetadata.url.find((item) => item.Key === "name")
              ?.Value as string,
            image: validateImage(
              nftMetadata.url.find((item) => item.Key === "image")
                ?.Value as string
            ),
          };
        }
      }
    }
    if (updateState) {
      dispatch(setAllNFTs(metadata || [])); //TODO:// REMOVE
    }
    return metadata || [];
  }
  return { getUserNFTs, getNfts };
};
