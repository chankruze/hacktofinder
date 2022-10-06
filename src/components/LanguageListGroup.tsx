/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 07:35:31 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import classNames from "classnames";
import { FC } from "react";

type Props = {
  languages: string[];
  title: string;
  onLanguageSelect: (l: string) => void;
};

export const LanguageListGroup: FC<Props> = ({
  languages,
  title,
  onLanguageSelect,
}) => {
  return (
    <div className="spacey-2">
      <p className="font-bold dark:text-dark-accent p-2">{title}</p>
      {languages.map((l) => (
        <p
          key={l}
          className={classNames(
            "p-2 rounded cursor-pointer duration-150",
            "dark:hover:dark:bg-dark-accent/20 dark:text-dark-light"
          )}
          onClick={() => onLanguageSelect(l)}
        >
          {l}
        </p>
      ))}
    </div>
  );
};
