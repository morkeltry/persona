import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { INFTMetadata } from "ui/types";

const initialState: INFTMetadata[] = [];
const nftSlice = createSlice({
  name: "nfts",
  initialState,
  reducers: {
    setAllNFTs: (state, action: PayloadAction<INFTMetadata[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setAllNFTs } = nftSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectNFTs = (state: RootState) => state.nfts;

export default nftSlice.reducer;
