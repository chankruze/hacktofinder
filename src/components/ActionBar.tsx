/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 17:04:22 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useAppContext } from "../contexts/AppContext";
// icons
import { RiLayoutGridLine, RiLayoutRowLine } from "react-icons/ri";
import classNames from "classnames";
import { ViewMode } from "../App";
import { LanguageSearch } from "./LanguageSearch";
import { LangaugeSelect } from "./LangaugeSelect";
import { SortSelect } from "./SortSelect";

export const ActionBar = () => {
  const { viewMode, setViewMode } = useAppContext();

  return (
    <div className="flex gap-4">
      {/* language query */}
      {/* <div className="w-1/3">
        <LanguageSearch />
      </div> */}
      {/* language select */}
      <LangaugeSelect />
      {/* sort select */}
      <SortSelect />
      {/* view mode */}
      <div className="hidden sm:flex w-fit ml-auto items-center divide-x">
        <div
          className={classNames(
            "p-2 w-min flex items-center gap-2 rounded-l duration-150 cursor-pointer",
            "dark:border-dark-secondary dark:bg-dark-primary dark:text-dark-secondary",
            "dark:hover:text-dark-accent",
            { "dark:!text-dark-accent": viewMode === ViewMode.GRID }
          )}
          onClick={() => setViewMode(ViewMode.GRID)}
        >
          <RiLayoutGridLine size={32} />
        </div>
        <div
          className={classNames(
            "p-2 w-min flex items-center gap-2 rounded-r duration-150 cursor-pointer",
            "dark:border-dark-secondary dark:bg-dark-primary dark:text-dark-secondary",
            "dark:hover:text-dark-accent",
            { "dark:!text-dark-accent": viewMode === ViewMode.LIST }
          )}
          onClick={() => setViewMode(ViewMode.LIST)}
        >
          <RiLayoutRowLine size={32} />
        </div>
      </div>
    </div>
  );
};
