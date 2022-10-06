/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 16:46:55 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React, { ComponentProps, FC, PropsWithChildren } from "react";
import { Navbar } from "./Navbar";

type Props = PropsWithChildren<ComponentProps<"div">>;

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
