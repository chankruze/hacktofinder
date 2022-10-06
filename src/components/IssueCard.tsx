/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 15:38:19 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import classNames from "classnames";
import { FC } from "react";
import moment from "moment";
import { getRepoName, Issue, parseEmojis } from "../helpers";
// icons
import {
  RiExternalLinkLine,
  RiCalendarCheckLine,
  RiGitRepositoryLine,
  RiRecordCircleLine,
} from "react-icons/ri";
import { Badge } from "./Badge";

type Props = {
  issue: Issue;
};

export const IssueCard: FC<Props> = ({ issue }) => {
  return (
    <div
      className={classNames(
        "p-4 space-y-3 rounded duration-150",
        "bg-dark-primary"
      )}
    >
      <div className="flex gap-2 justify-between flex-wrap">
        {/* repo */}
        <a
          href={issue.repository.url}
          target="_blank"
          className="flex items-center gap-1 text-blue-400 dark:hover:text-blue-400/70 duration-150"
        >
          <RiGitRepositoryLine className="w-6 h-6" />
          {getRepoName(issue.repository.url)}
          <RiExternalLinkLine />
        </a>
        {/* date */}
        <Badge accent="blue" size="xs" fatText>
          <RiCalendarCheckLine />{" "}
          {moment(issue.createdAt).format("DD MMM YYYY hh:mm A")}
        </Badge>
      </div>
      {/* title */}
      <div className="flex items-center gap-1">
        <RiRecordCircleLine className="w-6 h-6 text-green-500" />
        <a
          href={issue.url}
          className="w-fit text-xl font-medium line-clamp-2 text-ellipsis hover:text-blue-400"
        >
          {issue.title}{" "}
          <span className="dark:text-dark-accent">
            #{issue.url.split("/")[6]}
          </span>
        </a>
      </div>
      {/* labels */}
      <div className="flex gap-2 flex-wrap">
        {issue.labels.edges.map(({ node: { name } }) => (
          <Badge accent="yellow" size="sm">
            {parseEmojis(name)}
          </Badge>
        ))}
      </div>
    </div>
  );
};
