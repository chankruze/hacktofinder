/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 07:46:59 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
// icons
import { RiSearch2Line } from "react-icons/ri";

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
    <div className="flex items-center dark:text-dark-light dark:bg-dark-primary rounded">
      <div className="p-3 pr-0">
        <RiSearch2Line />
      </div>
      <input
        type="text"
        value={languageQuery}
        onChange={(e) => setLanguageQuery(e.target.value)}
        ref={languageRef}
        className={classNames(
          "w-full p-3 border-0 outline-0 rounded focus:ring-0 bg-transparent"
        )}
        placeholder="i.e. javascript, python, go etc."
      />
    </div>
  );
};
