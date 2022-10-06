/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 16:55:07 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { FC, ReactNode } from "react";

type Props = {
  icon: ReactNode;
  url: string;
};

const SocialLink: FC<Props> = ({ icon, url }) => {
  return (
    <a href={url} className="p-2 rounded-full dark:hover:bg-dark-secondary">
      {icon}
    </a>
  );
};

export default SocialLink;
