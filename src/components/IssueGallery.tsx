/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 16:19:04 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { Issue } from "../helpers";
import { IssueCard } from "./IssueCard";
import { useAppContext } from "../contexts/AppContext";
import { ViewMode } from "../App";

export const IssueGallery = () => {
  const { issues, viewMode } = useAppContext();

  if (!issues) return null;

  return (
    <div>
      {viewMode === ViewMode.GRID ? (
        <div className="text-gray-200 grid grid-cols-3 gap-4">
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
