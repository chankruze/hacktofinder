/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 16:46:55 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React, { ComponentProps, FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

type Props = PropsWithChildren<ComponentProps<"div">>;

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-dark-secondary overflow-hidden">
      <Navbar />
      <div className="p-4 space-y-4">{children}</div>
      <Footer />
    </div>
  );
};
