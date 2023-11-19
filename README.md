# persona

persona is an identity platform that lets users build a custom pfp, register an ens subdomain for free, and deploy it as a tokenbound account. 

When crafting a Persona profile, you have the ability to curate traits across numerous NFT collections all within one convenient inventory system. For instance, owning a Bored Ape Yacht Club (BAYC) NFT featuring a fez allows you to pair it seamlessly with items from diverse NFT collections. Moreover, you can use Apecoin to acquire distinct assets not found within these collections, thereby establishing unique market values for each trait. By blending your preferred elements from various collections, you can fashion a personalized PFP (profile picture) that truly reflects your tastes. Persona serves as a connecting link between diverse metaverse projects, fostering a safer gaming atmosphere through the integration of NFTs.

# includes 
- Frontend code
- Backend code to resolve nft data on base
- Smart contracts for minting tokenbound accounts


## We made the following transactions on base goerli:

Minting a token under a tokenbound account (childNFT):
https://goerli.basescan.org/tx/0x0e3781b5d53c4e6c3ce58d895453155a573b75db85395444ba6e4d3fb6a452b0

Account Creation:

https://goerli.basescan.org/tx/0xe832a94b62df438f60197b2d10458807b310a11d8216c5c1e7d2988e92bd17c9

Registry Deployment:

https://goerli.basescan.org/tx/0x8a9ba666d5a856697767507c14861c1c0a69222c79ec2cfb7f82c5f6da00b98c


### To run the hardhat deploy:

```
cd packages hardhat
npx hardhat compile
npx hardhat run --network basegoerli scripts/deploy.js

```
