import React, { useEffect } from "react";
import { LOCAL_STORAGE_PARAMS } from "./utils";
import { useAppSelector } from "./redux";
import { WalletName } from "ui/types";
import { selectSettings } from "./redux/settings.core";
import { useConnection } from "./hooks";

export const AppInitAdapter = ({ children }: { children: React.ReactNode }) => {
  const settings = useAppSelector(selectSettings);
  // const personaActions = usePersona();
  // const dispatch = useAppDispatch();
  const connAction = useConnection();
  useEffect(() => {
    (async () => {
      try {
        const wallet = localStorage.getItem(LOCAL_STORAGE_PARAMS.wallet);
        // const personaName = localStorage.getItem(LOCAL_STORAGE_PARAMS.persona);
        if (wallet) {
          await connAction.connectWallet(wallet as WalletName);
          // connAction.setConnectionOverlayVars({
          //   modalType: "persona",
          //   showModal: true,
          //   isSearching: true,
          // });
          // const personas = await personaActions.getAllPersonas(address);
          // connAction.setConnectionOverlayVars({
          //   isSearching: false,
          // });
          // if (!personaName) {
          //   const persona = personas.find((item) => item.ens === personaName);
          //   if (persona) {
          //     connAction.connectPersona(persona);
          //     connAction.setConnectionOverlayVars({
          //       modalType: undefined,
          //       showModal: false,
          //     });
          //   }
          // }
        }
        // const theme = localStorage.getItem(LOCAL_STORAGE_PARAMS.theme);
        // dispatch(setSettings({ theme: (theme as ITheme) || "dark" }));
      } catch (err) {}
    })();
  }, []);
  if (!settings.theme) return null;
  return <>{children}</>;
};
