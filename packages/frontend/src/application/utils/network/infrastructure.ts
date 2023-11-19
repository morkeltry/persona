import { LOCAL_STORAGE_PARAMS, NETWORKS } from "../constants";
import { WalletName } from "ui/types";
import Web3 from "web3";
import getWeb3 from "./getWeb3";
import { TransactionConfig } from "web3-core";

export interface Infra {
  supportedIds: string[];
  web3: Web3;
  accounts: string[] | undefined;
  wallet: WalletName;
  balance: string;
}
export class AppInfrastructure {
  static resolved: Promise<void>;
  static web3: Web3;
  static balance: string;
  static accounts: string[] | undefined;
  static supportedIds = [...NETWORKS.map((item) => item.id)];
  static wallet: string | undefined;
  public constructor(wallet?: WalletName) {
    if (wallet) {
      AppInfrastructure.resolved = this.init(wallet);
    }
  }

  static getWeb3() {
    return this._getWeb3(this.wallet as WalletName);
  }
  protected async init(wallet: WalletName) {
    //getWeb3 here is an external function from './getWeb3'
    //const { web3, accounts } = await getWeb3(wallet);
    const { web3, accounts } = await getWeb3(wallet) || {};
    if(!web3) return;
    AppInfrastructure.web3 = web3;
    AppInfrastructure.accounts = accounts;
    AppInfrastructure.wallet = wallet;
    AppInfrastructure.balance = await web3?.eth.getBalance(accounts[0]);
    if (accounts?.[0]) {
      localStorage.setItem(LOCAL_STORAGE_PARAMS.address, accounts?.[0]);
      localStorage.setItem(LOCAL_STORAGE_PARAMS.wallet, wallet);
    }
  }
  static async disconnect() {
    AppInfrastructure.accounts = undefined;
    AppInfrastructure.wallet = undefined;
    localStorage.removeItem(LOCAL_STORAGE_PARAMS.address);
    localStorage.removeItem(LOCAL_STORAGE_PARAMS.wallet);
  }
  protected static async _getWeb3(wallet: WalletName) {
    if (!this.web3) {
      new AppInfrastructure(wallet);
      await this.resolved;
    }
    return this.web3 as Web3;
  }
  protected static async getAccounts(wallet: WalletName) {
    if (!this.web3) {
      new AppInfrastructure(wallet);
      await this.resolved;
    }
    return this.accounts;
  }
  static async getInfrastructure(
    wallet: WalletName
  ): Promise<Infra | undefined | null> {
    if (!wallet) return null;
    if (!this.web3) {
      new AppInfrastructure(wallet);
      await this.resolved;
    }
    return {
      supportedIds: this.supportedIds,
      web3: this.web3,
      accounts: this.accounts,
      wallet,
      balance: this.balance,
    };
  }
  static async getBalance(address?: string) {
    if (!this.web3) {
      throw new Error("wallet not connected");
    }
    if (!address) address = this.accounts?.[0];
    if (!address) return;
    return this.web3.eth.getBalance(address);
  }
  static async getTransactionFee(txConfig: TransactionConfig) {
    if (!this.web3) {
      throw new Error("wallet not connected");
    }
    const gasLimit = await this.web3.eth.estimateGas(txConfig);
    const gasPrice = await this.web3.eth.getGasPrice();
    const txFee = gasLimit * Number(gasPrice);

    const feesInEth = this.web3.utils.fromWei(txFee.toString(), "ether");
    return feesInEth;
  }
}
export default AppInfrastructure;
