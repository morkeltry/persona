import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { LOCAL_STORAGE_PARAMS } from "application/utils";
import { ITheme } from "ui/types";
interface IWalletState {
  theme: ITheme;
}
const initialState: IWalletState = {
  theme: "light",
};

const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<Partial<IWalletState>>) => {
      if (action.payload.theme) {
        localStorage.setItem(LOCAL_STORAGE_PARAMS.theme, action.payload.theme);
      }
      state = { ...state, ...action.payload };
      return state;
    },
  },
});

export const { setSettings } = settingSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectSettings = (state: RootState) => state.settings;

export default settingSlice.reducer;
