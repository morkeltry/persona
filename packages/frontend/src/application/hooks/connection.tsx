import {
  selectConnection,
  connectionActions,
  useAppDispatch,
  useAppSelector,
} from "application/redux";
import {
  AppInfrastructure,
  LOCAL_STORAGE_PARAMS,
  ZERO_ADDRESS,
} from "application/utils";
import { ensRegister, ensResolver } from "application/integrations";
import { WalletName, IAccount } from "ui/types";
import { useEns } from "./ens";
import { IENSRecord } from "ui/types";
import { ConnectionOverlayVar } from "ui/base";
export const useConnection = () => {
  const ens = useEns();
  const dispatch = useAppDispatch();
  const connection = useAppSelector(selectConnection);
  const getResolvedAccount = async (address: string) => {
    const web3 = await AppInfrastructure.getWeb3();
    const resolverAddr = await ensRegister(web3).reverseResolver(address);
    const account: IAccount = {
      address,
    };
    if (resolverAddr !== ZERO_ADDRESS) {
      account.ensName = await ensResolver({ web3, address }, resolverAddr).name(
        address
      );
      if (account.ensName) {
        account.avatar = await ensResolver({ web3 }, resolverAddr).text(
          account.ensName,
          "avatar"
        );
      }
    }
    return account;
  };
  const getResolvedAccounts = async () => {
    const accounts = AppInfrastructure.accounts;
    const resolved: IAccount[] = [];
    if (accounts && accounts.length > 0) {
      for (let i = 0; i < accounts.length; i++) {
        resolved.push(await getResolvedAccount(accounts[i]));
      }
    }
    dispatch(connectionActions.setResolvedAccounts(resolved));
  };
  const setConnectionOverlayVars = (values: Partial<ConnectionOverlayVar>) => {
    dispatch(connectionActions.setConnOverlayVars(values));
  };
  const connectWallet = (wallet: WalletName) => {
    return new Promise<{ wallet: WalletName; address: string }>(
      (resolve, reject) => {
        AppInfrastructure.getInfrastructure(wallet).then(async (infra) => {
          if (infra) {
            try {
              const { web3, wallet, balance, accounts } = infra;
              ens.init(web3);
              //const address = "0x88e4519e2Baa513Ed92B0Ae4c788D7E5c5B03Ea4"; //accounts?.[0]; TODO://
              const address = accounts?.[0];

              if (address) {
                const result = {
                  wallet,
                  address,
                  balance,
                };
                dispatch(connectionActions.setConnection(result));
                resolve(result);
              }
            } catch (err) {
              reject(err);
            } finally {
            }
          }
        });
      }
    );
  };
  const connectPersona = (persona: IENSRecord) => {
    dispatch(
      connectionActions.setConnection({
        persona,
      })
    );
    localStorage.setItem(LOCAL_STORAGE_PARAMS.persona, persona.ens);
  };
  const resolveEnsName = async (
    address: string,
    updateState?: boolean
  ): Promise<IENSRecord> => {
    const web3 = await AppInfrastructure.getWeb3();
    ens.init(web3);
    const resolvedENS = await ens?.resolveENSAddr(address);
    if (resolvedENS.texts?.avatar) {
      resolvedENS.nfts.avatar = await ens.getNFTDataFromAvatarRecord(
        resolvedENS.texts.avatar
      );
    }
    return resolvedENS;
  };
  const disconnectWallet = () => {
    AppInfrastructure.disconnect();
    dispatch(connectionActions.unsetConnection());
  };
  return {
    ...connectionActions,
    getResolvedAccounts,
    getResolvedAccount,
    resolvedAccounts: connection.resolvedAccounts,
    connection,
    setConnectionOverlayVars,
    connectWallet,
    resolveEnsName,
    disconnectWallet,
    connectPersona,
  };
};
