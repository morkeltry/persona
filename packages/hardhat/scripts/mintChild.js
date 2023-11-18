require("hardhat");
require("dotenv").config();

async function main() {
    //Get the contract instance
    const Child = await ethers.getContractFactory("ChildNFT");
    const child = await Child.attach(process.env.CHILD_NFT_ADDRESS);
    tokenId = await child.nextId()

    //Default IPFS hash for ChildNFT json metadata. Replace with whatever you want
    const baseURI="ipfs://QmTRxBoLapSUgAiaz2FxvQYW2ektgJnhoomzaQ8Q76puvA"

    //Address you want to mint your NFT to ( in this case this is the account )
    const to = "0x92388aFbd5158b50e19c1272c1B88b9A3f62eB2A"
    // Mint child token
    const tx = await child.safeMint(to, baseURI);

    // Wait for the transaction to be mined
    const receipt = await tx.wait();

    console.log("Transaction hash:", receipt.hash);
    console.log("Gas used:", receipt.cumulativeGasUsed);

    // Check if the transaction was successfull (status 1 )
    if( receipt.status === 1){
        console.log(`Transaction was successfull. Token ${tokenId} minted to ${to}`);
    } else {
        console.log("Transaction failed");
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
