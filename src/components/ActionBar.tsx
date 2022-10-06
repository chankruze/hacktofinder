/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 17:04:22 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useAppContext } from "../contexts/AppContext";
// icons
import { RiGridLine, RiFileListLine } from "react-icons/ri";
import classNames from "classnames";
import { ViewMode } from "../App";

export const ActionBar = () => {
  const { viewMode, setViewMode } = useAppContext();

  return (
    <div className="flex justify-end">
      {/* view mode */}
      <div className="w-min flex items-center">
        <div
          className={classNames(
            "p-2 w-min flex items-center gap-2 rounded-l duration-150",
            "bg-opacity-10 bg-dark-accent text-dark-accent",
            "hover:bg-opacity-30",
            { "bg-opacity-100 text-dark-primary": viewMode === ViewMode.GRID }
          )}
          onClick={() => setViewMode(ViewMode.GRID)}
        >
          <RiGridLine size={32} />
        </div>
        <div
          className={classNames(
            "p-2 w-min flex items-center gap-2 rounded-r duration-150",
            "bg-opacity-10 bg-dark-accent text-dark-accent",
            "dark:hover:bg-opacity-30",
            { "bg-opacity-100 text-dark-primary": viewMode === ViewMode.LIST }
          )}
          onClick={() => setViewMode(ViewMode.LIST)}
        >
          <RiFileListLine size={32} />
        </div>
      </div>
    </div>
  );
};
