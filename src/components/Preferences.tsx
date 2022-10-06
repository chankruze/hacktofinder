/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 11:09:32 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useState } from "react";
import classNames from "classnames";
// contexts
import { useAppContext } from "../contexts/AppContext";
// data
import { allLanguages, topLanguages } from "../data/languages";
// components
import { LanguageListGroup } from "./LanguageListGroup";
import { LanguageSearch } from "./LanguageSearch";

export const Preferences = () => {
  const { language, setLanguage, sortKey, setSortKey } = useAppContext();
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const selectLanguage = (l: string) => {
    setLanguage(l);
    setIsSelectOpen(false);
  };

  return (
    <div className="p-4">
      <div className="w-64 select-none">
        <p
          className={classNames(
            "p-4 rounded cursor-pointer duration-150 font-medium ",
            "dark:bg-dark-secondary dark:text-white",
            "dark:hover:bg-dark-primary"
          )}
          onClick={() => setIsSelectOpen(!isSelectOpen)}
        >
          {language || "👇 Select a language"}
        </p>

        <div
          className={classNames(
            "w-64 bg-dark-secondary p-2 rounded mt-2 max-h-64 overflow-auto absolute",
            { hidden: !isSelectOpen }
          )}
        >
          <LanguageSearch />
          <LanguageListGroup
            languages={topLanguages}
            title="🚀 Top Languages"
            onLanguageSelect={selectLanguage}
          />
          <LanguageListGroup
            languages={allLanguages}
            title="🦥 All Languages"
            onLanguageSelect={selectLanguage}
          />
        </div>
      </div>
    </div>
  );
};
