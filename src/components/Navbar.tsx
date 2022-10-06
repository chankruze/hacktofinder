/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 16:45:23 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { RiGithubLine } from "react-icons/ri";
import SocialLink from "./SocialLink";

export const Navbar = () => {
  return (
    <div className="py-2 px-4 dark:bg-dark-primary dark:text-dark-light flex items-center">
      <div className="flex items-center gap-2">
        <img src="/vite.svg" alt="logo" />
        <p className="text-2xl font-medium font-mono">Hacktofinder</p>
      </div>
      <div className="flex items-center ml-auto">
        <SocialLink
          icon={<RiGithubLine size={28} />}
          url="https://github.com/chankruze/hacktofinder"
        />
      </div>
    </div>
  );
};
