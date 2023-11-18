import Web3 from "web3";
import { nftAbi, nftProxiAbi } from "./abi/nft";
import { AbiItem } from "web3-utils";

export async function resolveNFT() {
  const web3 = new Web3(
    "https://mainnet.infura.io/v3/bbad6dc9dece4ec1b9c0beae4aea0a9d"
  );

  // Replace the wallet address with the address you want to check
  const walletAddress = "0x88e4519e2Baa513Ed92B0Ae4c788D7E5c5B03Ea4";
  // const walletAddress = "0xE38ac7Cb0516D093c440b57D7846Ac4db57dEDB5";

  const contracts = {
    armanino: "0x6761DC899f300a16d6070Fe1139A4EE037B057d3",
  };
  // Define the contract address of the NFT contract you want to check
  const contractAddress = contracts.armanino;

  // Create an instance of the NFT contract
  const contract = new web3.eth.Contract(
    nftProxiAbi as AbiItem[],
    contractAddress
  );

  const implementation = await contract.methods.implementation().call();

  const nftContract = new web3.eth.Contract(
    nftAbi as AbiItem[],
    contractAddress // implementation
  );

  // Get the total number of NFTs owned by the wallet address
  const balance = await nftContract.methods.balanceOf(walletAddress).call();

  // Loop through each NFT and log its details to the console
  for (let i = 0; i < balance; i++) {
    const tokenId = await nftContract.methods
      .tokenOfOwnerByIndex(walletAddress, i)
      .call();
    const tokenURI = await nftContract.methods.tokenURI(tokenId).call();
  }
}
