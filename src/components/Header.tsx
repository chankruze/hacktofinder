/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 11:08:45 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

export const Header = () => {
  return (
    <p className="text-center dark:text-dark-primary text-3xl sm:text-5xl font-bold leading-normal">
      Find issues having tag{" "}
      <span className="dark:text-blue-600">"Hacktoberfest"</span>
      🔎
    </p>
  );
};
