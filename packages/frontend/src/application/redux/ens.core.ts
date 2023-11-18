import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { IENSRecord } from "ui/types";

const initialState: IENSRecord[] = [];
const ensSlice = createSlice({
  name: "ens",
  initialState,
  reducers: {
    setAllENS: (state, action: PayloadAction<IENSRecord[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setAllENS } = ensSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectENS = (state: RootState) => state.ens;

export default ensSlice.reducer;
