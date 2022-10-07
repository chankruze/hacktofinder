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
import nodataSVG from "../assets/nodata.svg";
import { LoadMore } from "./LoadMore";

export const IssueGallery = () => {
  const { language, issues, viewMode, isLoading } = useAppContext();

  if (isLoading)
    return (
      <p className="text-2xl dark:text-dark-accent p-4 text-center">
        Loading {language} issues...
      </p>
    );

  if (!isLoading && issues && issues.length === 0) {
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
    <div className="space-y-4">
      {viewMode === ViewMode.GRID ? (
        <div className="text-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {issues.map(({ issue }: Issue) => (
            <IssueCard key={issue.url} issue={issue} />
          ))}
        </div>
      ) : (
        <div className="text-gray-200 flex flex-col gap-4">
          {issues.map(({ issue }: Issue) => (
            <IssueCard key={issue.url} issue={issue} />
          ))}
        </div>
      )}
      {/* load more issues button */}
      <div className="text-center">
        <LoadMore />
      </div>
    </div>
  );
};
