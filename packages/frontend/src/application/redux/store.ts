import { configureStore } from "@reduxjs/toolkit";
import connectionCore from "./connection.core";
import settingsCore from "./settings.core";
import ensCore from "./ens.core";
import nftsCore from "./nfts.core";
import personaCore from "./persona.core";

export const store = configureStore({
  reducer: {
    connection: connectionCore,
    settings: settingsCore,
    ens: ensCore,
    nfts: nftsCore,
    persona: personaCore,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store.getState;
export default store;
