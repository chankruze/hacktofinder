/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 15:38:19 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { FC } from "react";
import classNames from "classnames";
import moment from "moment";
import { getRepoName, Issue, parseEmojis } from "../helpers";
// icons
import {
  RiExternalLinkLine,
  RiCalendarCheckLine,
  RiGitRepositoryLine,
} from "react-icons/ri";
import { Badge } from "./Badge";

type Props = Issue & {};

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
          <RiGitRepositoryLine className="w-5 h-5" />
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
      <a
        href={issue.url}
        className="w-fit text-xl font-medium line-clamp-2 text-ellipsis hover:text-blue-400"
      >
        {issue.title}{" "}
        <span className="dark:text-dark-accent">
          #{issue.url.split("/")[6]}
        </span>
      </a>

      <div className="flex items-center justify-between flex-wrap gap-2">
        {/* labels */}
        <div className="flex gap-2 flex-wrap">
          {issue.labels.edges.map(({ node: { name } }, idx) => (
            <Badge key={idx} accent="yellow" size="sm">
              {parseEmojis(name)}
            </Badge>
          ))}
        </div>
        <Badge accent="green" size="sm" fatText>
          {issue.comments.totalCount} Comments
        </Badge>
      </div>
    </div>
  );
};
