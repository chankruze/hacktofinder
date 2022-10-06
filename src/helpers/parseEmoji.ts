/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 21:11:17 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { toArray } from "react-emoji-render";

export const parseEmojis = (value: string) => {
  const emojisArray = toArray(value);

  // toArray outputs React elements for emojis and strings for other
  const newValue = emojisArray.reduce((previous, current) => {
    if (typeof current === "string") {
      return previous + current;
    }
    // @ts-ignore
    return previous + current.props.children;
  }, "");

  return newValue;
};
