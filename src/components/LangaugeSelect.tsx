/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 20:12:06 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import classNames from "classnames";
import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { allLanguages, topLanguages } from "../data/languages";
import { LanguageListGroup } from "./LanguageListGroup";

export const LangaugeSelect = () => {
  const { language, setLanguage } = useAppContext();
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const selectLanguage = (l: string) => {
    setLanguage(l);
    setIsSelectOpen(false);
  };

  return (
    <div className="w-64 select-none">
      <p
        className={classNames(
          "p-3 rounded cursor-pointer duration-150 font-medium",
          "dark:bg-dark-primary dark:text-dark-accent",
          "dark:hover:bg-dark-primary/60"
        )}
        onClick={() => setIsSelectOpen(!isSelectOpen)}
      >
        {language || "👇 Select a language"}
      </p>

      <div
        className={classNames(
          "w-64 p-2 rounded mt-1 max-h-64 overflow-auto absolute",
          "dark:bg-dark-primary",
          { hidden: !isSelectOpen }
        )}
      >
        {/* <LanguageSearch /> */}
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
  );
};
