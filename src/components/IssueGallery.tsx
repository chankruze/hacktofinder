/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 16:19:04 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { Issue } from "../helpers";
import { IssueCard } from "./IssueCard";
import { useAppContext } from "../contexts/AppContext";
import { ViewMode } from "../App";
// svg
import chooseSVG from "../assets/choose.svg";
import nodataSVG from "../assets/nodata.svg";

export const IssueGallery = () => {
  const { issues, viewMode } = useAppContext();

  if (!issues)
    return (
      <div className="flex flex-col gap-4 justify-center items-center">
        <img src={chooseSVG} alt="choose svg" className="h-64" />
        <p className="p-4 text-2xl dark:text-dark-accent capitalize">
          🤘 please choose a language
        </p>
      </div>
    );

  if (issues.length === 0) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center">
        <img src={nodataSVG} alt="choose svg" className="h-64" />
        <p className="p-4 text-2xl dark:text-dark-accent capitalize">
          🙄 No issues found
        </p>
      </div>
    );
  }

  return (
    <div>
      {viewMode === ViewMode.GRID ? (
        <div className="text-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {issues.map(({ issue }: { issue: Issue }) => (
            <IssueCard key={issue.url} issue={issue} />
          ))}
        </div>
      ) : (
        <div className="text-gray-200 flex flex-col gap-4">
          {issues.map(({ issue }: { issue: Issue }) => (
            <IssueCard key={issue.url} issue={issue} />
          ))}
        </div>
      )}
    </div>
  );
};
