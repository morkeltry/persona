require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const {
  ALCHEMY_GOERLI_URL,
  MULTIBAAS_API_KEY,
  MULTIBAAS_DEPLOYMENT_URL,
  PRIVATE_KEY
} = process.env;

module.exports = {
  solidity: "0.8.22",
  networks: {
		//Add extra chains as needed 
    hardhat: {
      chainId: 1337,
    },
      goerli: {
        url: `${ALCHEMY_GOERLI_URL}`,
        accounts: [`0x${PRIVATE_KEY}`],
      }, 
      // multibaas default to multibaas_base_goerli
      multibaas: {
        url: `{MULTIBAAS_DEPLOYMENT_URL}/web3/{MULTIBAAS_API_KEY}`,
        chainId: `84531`,
        accounts: [`0x${PRIVATE_KEY}`],
      },
      multibaas_base_goerli: {
        url: `{MULTIBAAS_DEPLOYMENT_URL}/web3/{MULTIBAAS_API_KEY}`,
        chainId: `84531`,
        accounts: [`0x${PRIVATE_KEY}`],
      },
  }, 
  defaultNetwork: "hardhat",
  mbConfig: {
    apiKey: MULTIBAAS_API_KEY,
    host: new URL(  MULTIBAAS_DEPLOYMENT_URL),
    allowUpdateAddress: ["development"],
    allowUpdateContract: ["development"],
  },
};