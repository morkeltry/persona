import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { IAccount, IENSRecord, WalletName } from "ui/types";
import { ConnectionOverlayVar } from "ui/base";
export interface IWalletState {
  wallet?: WalletName;
  address?: string;
  balance: string;
  resolvedAccounts?: IAccount[];
  persona?: IENSRecord;
  overlayVars?: ConnectionOverlayVar;
}
const initialState: IWalletState = {
  balance: "0",
};

const connectionSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    unsetConnection: (state) => {
      state = { balance: "0" };
      return state;
    },
    setResolvedAccounts: (state, action: PayloadAction<IAccount[]>) => {
      state = { ...state, resolvedAccounts: action.payload };
      return state;
    },
    setConnection: (state, action: PayloadAction<Partial<IWalletState>>) => {
      state = { ...state, ...action.payload };
      return state;
    },
    setConnOverlayVars: (
      state,
      action: PayloadAction<Partial<ConnectionOverlayVar>>
    ) => {
      state = {
        ...state,
        overlayVars: {
          ...(state.overlayVars || {}),
          ...action.payload,
        } as ConnectionOverlayVar,
      };
      return state;
    },
  },
});

export const { actions: connectionActions } = connectionSlice;
// Other code such as selectors can use the imported `RootState` type
export const selectConnection = (state: RootState) => state.connection;

export default connectionSlice.reducer;
