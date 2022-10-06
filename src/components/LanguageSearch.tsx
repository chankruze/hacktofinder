/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 07:46:59 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

export const LanguageSearch = () => {
  const [languageQuery, setLanguageQuery] = useState("");

  // input ref
  const languageRef = useRef(null);

  // set auto focus
  useEffect(() => {
    if (languageRef.current) {
      (languageRef.current as HTMLInputElement).focus();
    }
  });

  return (
    <div>
      <input
        type="text"
        value={languageQuery}
        onChange={(e) => setLanguageQuery(e.target.value)}
        ref={languageRef}
        className={classNames(
          "w-full p-2 border-0 outline-0 rounded focus:ring-0",
          "dark:text-dark-light dark:bg-dark-primary"
        )}
      />
    </div>
  );
};
