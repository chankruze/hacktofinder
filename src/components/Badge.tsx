/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 16:01:56 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import classNames from "classnames";
import { FC, ComponentProps, PropsWithChildren } from "react";

export type BadgeProps = PropsWithChildren<
  ComponentProps<"p"> & {
    accent:
      | "blue"
      | "red"
      | "green"
      | "yellow"
      | "gray"
      | "pink"
      | "transparent";
    size?: "xs" | "sm" | "xl";
    fatText?: boolean;
  }
>;

export const Badge: FC<BadgeProps> = ({ children, accent, size, fatText }) => {
  return (
    <p
      className={classNames(
        "w-fit flex items-center gap-1 rounded p-2",
        {
          "py-1 text-xs": size === "xs",
          "py-1 text-sm": size === "sm",
        },
        {
          "font-medium": fatText,
        },
        {
          "bg-blue-400 bg-opacity-40 text-blue-800": accent === "blue",
          "dark:bg-blue-800 dark:bg-opacity-40 dark:text-blue-400":
            accent === "blue",
        },
        {
          "bg-red-400 bg-opacity-40 text-red-800": accent === "red",
          "dark:bg-red-800 dark:bg-opacity-40 dark:text-red-400":
            accent === "red",
        },
        {
          "bg-green-400 bg-opacity-40 text-green-800": accent === "green",
          "dark:bg-green-800 dark:bg-opacity-40 dark:text-green-400":
            accent === "green",
        },
        {
          "bg-yellow-400 bg-opacity-40 text-yellow-800": accent === "yellow",
          "dark:bg-yellow-800 dark:bg-opacity-40 dark:text-yellow-400":
            accent === "yellow",
        },
        {
          "bg-gray-400 bg-opacity-40 text-gray-800": accent === "gray",
          "dark:bg-gray-700 dark:bg-opacity-40 dark:text-gray-400":
            accent === "gray",
        },
        {
          "bg-pink-400 bg-opacity-40 text-pink-800": accent === "pink",
          "dark:bg-pink-700 dark:bg-opacity-40 dark:text-pink-400":
            accent === "pink",
        },
        {
          "bg-transparent text-gray-500 border border-gray-200":
            accent === "transparent",
          "dark:text-gray-400 dark:border-gray-700": accent === "transparent",
        }
      )}
    >
      {children}
    </p>
  );
};
