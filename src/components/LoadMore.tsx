/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Oct 07 2022 11:27:56 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import classNames from "classnames";
import { useAppContext } from "../contexts/AppContext";

export const LoadMore = () => {
  const { loadIssues } = useAppContext();

  return (
    <button
      className={classNames(
        "py-3 px-4 border-0 rounded duration-150 ease-in-out",
        "dark:bg-dark-primary/60 dark:text-dark-accent",
        "dark:hover:bg-dark-primary"
      )}
      onClick={loadIssues}
    >
      Load more issues
    </button>
  );
};
