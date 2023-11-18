import { useAppSelector } from "application/redux";
import { selectSettings } from "application/redux/settings.core";
import { ITheme } from "ui/types";
import { colorScheme } from "ui/utils";

export const useTheme = () => {
  const settings = useAppSelector(selectSettings);
  return {
    ...colorScheme[settings.theme as ITheme],
    themeType: settings.theme,
  };
};
