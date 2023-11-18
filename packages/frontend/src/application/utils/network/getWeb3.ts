import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { WalletName } from "ui/types";

const resolveWeb3 = async (networkWallet: WalletName) => {
  //@ts-ignore
  const BinanceChain = window.BinanceChain,
    //@ts-ignore
    ethereum = window.ethereum,
    //@ts-ignore
    _web3 = window.web3 as Web3;

  if (networkWallet === "binance") {
    if (BinanceChain) {
      const web3 = new Web3(BinanceChain);
      const accounts = await BinanceChain.request({ method: "eth_accounts" });
      return { web3, accounts };
    } else throw new Error("Binance Extension not installed");
  } else if (networkWallet === "walletConnect") {
    const provider = new WalletConnectProvider({
      rpc: {
        56: "https://bsc-dataseed.binance.org/",
        97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
        137: "https://polygon-rpc.com/",
        80001: "https://rpc-mumbai.maticvigil.com",
      },
    });
    await provider.enable();
    //@ts-ignore
    const web3 = new Web3(provider),
      accounts = await web3.eth.getAccounts();
    return { web3, accounts };
  } else {
    if (ethereum) {
      if (!Boolean(ethereum)) {
        //&& ethereum.isMetaMask
        return; //no metamask
      }
      // Request account access if needed
      //   await ethereum.enable();
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const web3 = new Web3(ethereum);
      // Acccounts now exposed
      return { web3, accounts };
    }
    // Legacy dapp browsers...
    else if (_web3) {
      // Use Mist/MetaMask's provider.
      console.log("Injected web3 detected.");
      return { web3: _web3, accounts: await _web3.eth.getAccounts() };
    }
    // Fallback to localhost; use dev console port by default...
    else {
      const provider = new Web3.providers.HttpProvider("http://127.0.0.1:9545");
      const web3 = new Web3(provider);
      console.log("No web3 instance injected, using Local web3.");
      return { web3, accounts: await web3.eth.getAccounts() };
    }
  }
};
interface GetWeb3Props {
  web3: Web3;
  accounts: string[];
}
const getWeb3 = (networkWallet: WalletName): Promise<GetWeb3Props> =>
  new Promise(async (resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    try {
      window.addEventListener(`load`, async () => {
        try {
          const web3 = (await resolveWeb3(networkWallet)) as GetWeb3Props;
          resolve(web3);
        } catch (error) {
          console.error(error);
          reject(error);
        }
      });
      // If document has loaded already, try to get Web3 immediately.
      if (document.readyState === `complete`) {
        const web3 = (await resolveWeb3(networkWallet)) as GetWeb3Props;
        resolve(web3);
      }
    } catch (error) {
      reject(error);
    }
  });
export default getWeb3;
export { getWeb3 };
