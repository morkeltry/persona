import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { IENSRecord } from "ui/types";

const initialState: IENSRecord[] = [];
const personaSlice = createSlice({
  name: "persona",
  initialState,
  reducers: {
    setAllPersona: (state, action: PayloadAction<IENSRecord[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setAllPersona } = personaSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectPersona = (state: RootState) => state.persona;

export default personaSlice.reducer;
