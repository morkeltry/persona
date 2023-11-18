require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


module.exports = {
  solidity: "0.8.22",
  networks: {
		//Add extra chains as needed 
    hardhat: {
      chainId: 1337,
    },
      basegoerli: {
        url: `${process.env.ALCHEMY_BASE_GOERLI_URL}`,
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      }, 
  }, 
  defaultNetwork: "hardhat",
};