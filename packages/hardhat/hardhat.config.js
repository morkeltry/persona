require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


module.exports = {
  solidity: "0.8.22",
  networks: {
		//Add extra chains as needed 
    hardhat: {
      chainId: 84531,
    },
      basegoerli: {
        url: `${process.env.ALCHEMY_BASE_GOERLI_URL}`,
        accounts: [`0x${process.env.PRIVATE_KEY}`],
        gasPrice: 8000000000,
      }, 
  },
  defaultNetwork: "hardhat",
  etherscan: {
    apiKey: "PLACEHOLDER_STRING"
  },
};
