/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 15:38:19 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import classNames from "classnames";
import { FC } from "react";
import moment from "moment";
import { getRepoName, Issue } from "../helpers";
// icons
import { RiExternalLinkLine } from "react-icons/ri";

type Props = {
  issue: Issue;
};

export const IssueCard: FC<Props> = ({ issue }) => {
  return (
    <a
      className={classNames(
        "p-4 space-y-3 rounded duration-150",
        "bg-dark-primary",
        "dark:hover:bg-opacity-60"
      )}
      href={issue.url}
    >
      <div className="flex gap-2 justify-between">
        {/* repo */}
        <a
          href={issue.repository.url}
          target="_blank"
          className="flex items-center gap-1 text-blue-400 hover:text-blue-500"
        >
          {getRepoName(issue.repository.url)}
          <RiExternalLinkLine />
        </a>
        {/* date */}
        <span
          className={classNames(
            "px-2 py-1 rounded text-sm font-medium",
            "bg-blue-900 bg-opacity-40 text-blue-400"
          )}
        >
          {moment(issue.createdAt).format("DD MMM YYYY hh:mm A")}
        </span>
      </div>

      {/* labels */}
      <div className="flex gap-2">
        {issue.labels.edges.map(({ node: { name } }) => (
          <span
            className={classNames(
              "px-2 py-1 rounded text-sm font-medium",
              "bg-dark-accent bg-opacity-10 text-dark-accent"
            )}
          >
            {name}
          </span>
        ))}
      </div>
      {/* title */}
      <p className="text-xl font-medium line-clamp-2 text-ellipsis">
        {issue.title}
      </p>
    </a>
  );
};
