/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 11:10:10 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { createContext, useContext } from "react";
import { ViewMode } from "../App";
import { Issue, SortKeys } from "../helpers";

export type AppContextType = {
  isLoading: boolean;
  language: string;
  setLanguage: (lang: string) => void;
  sortKey: SortKeys;
  setSortKey: (k: SortKeys) => void;
  viewMode: ViewMode;
  setViewMode: (v: ViewMode) => void;
  issues: Issue[];
  loadIssues: () => void;
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
