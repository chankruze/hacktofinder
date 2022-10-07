/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Oct 07 2022 07:58:14 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useState } from "react";
import classNames from "classnames";
import { useAppContext } from "../contexts/AppContext";
import { SortKeys } from "../helpers";
// icons
import { RiFilter3Line } from "react-icons/ri";

export const SortSelect = () => {
  const { sortKey, setSortKey } = useAppContext();
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const selectSortKey = (k: SortKeys) => {
    setSortKey(k);
    setIsSelectOpen(false);
  };

  return (
    <div className="select-none">
      {/* dropdwon handle */}
      <div
        className={classNames(
          "w-full p-2 flex relative items-center gap-2 rounded cursor-pointer duration-150",
          "dark:bg-dark-primary dark:text-dark-accent",
          "dark:hover:bg-dark-primary/60"
        )}
        onClick={() => setIsSelectOpen(!isSelectOpen)}
      >
        <div className="text-dark-accent">
          <RiFilter3Line size={32} />
        </div>
        <p className={classNames("w-full  font-medium")}>{sortKey}</p>
      </div>
      {/* dropdown list */}
      <div
        className={classNames(
          "p-2 rounded mt-1 max-h-64 overflow-auto absolute",
          "dark:bg-dark-primary",
          { hidden: !isSelectOpen }
        )}
      >
        {Object.keys(SortKeys).map((k) => (
          <p
            key={k}
            className={classNames(
              "p-2 rounded cursor-pointer duration-150",
              "dark:hover:dark:bg-dark-accent/20 dark:text-dark-light"
            )}
            onClick={() => selectSortKey(SortKeys[k as keyof typeof SortKeys])}
          >
            {SortKeys[k as keyof typeof SortKeys]}
          </p>
        ))}
      </div>
    </div>
  );
};
