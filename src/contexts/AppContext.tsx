/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 11:10:10 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { createContext, useContext } from "react";
import { SortKeys } from "../helpers";

export type AppContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  sortKey: SortKeys;
  setSortKey: (k: SortKeys) => void;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext(): AppContextType {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useAppContext should be used within the AppContext provider!"
    );
  }

  return context;
}
