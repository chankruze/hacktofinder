/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 10:04:50 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

export const getIssues = (repos: any) => {
  const issues = repos.flatMap(
    ({ repo }: { repo: any }) => repo.issues.issuesAll
  );
  return issues;
};

export enum SortKeys {
  "DATE_CREATED",
  "NO_REPLIES",
}

export const sortIssues = (issues: any, sortKey: SortKeys) => {
  return issues.sort((a: any, b: any) => {
    // sort by no replies
    if (sortKey === SortKeys.NO_REPLIES) {
      if (a.issue.comments.totalCount > b.issue.comments.totalCount) {
        return 1;
      }

      if (b.issue.comments.totalCount > a.issue.comments.totalCount) {
        return -1;
      }

      return 0;
    }

    // sort by the date created
    if (sortKey === SortKeys.DATE_CREATED) {
      return Date.parse(b.issue.createdAt) - Date.parse(a.issue.createdAt);
    }

    // else unsorted
    return 0;
  });
};