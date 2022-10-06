/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Oct 06 2022 08:37:16 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

if (!import.meta.env.VITE_GITHUB_TOKEN) {
  throw new Error(
    "Please set `VITE_GITHUB_TOKEN` value in environment variable"
  );
}

export const fetchRepos = async (language: string) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${import.meta.env.VITE_GITHUB_TOKEN}`,
  };

  const year = new Date().getFullYear();

  //   graphql query
  const query = `query {
        search(
          type: REPOSITORY
          query: """
          topic:hacktoberfest 
          created:>=${year}-01-01 
          language:${language} 
          """
          first: 30
        ) {
          repos: edges {
              cursor
            repo: node {
              ... on Repository {
                issues(
                  labels: "hacktoberfest"
                  first: 20
                  filterBy: { assignee: null }
                  states: OPEN
                  orderBy: { field: CREATED_AT, direction: DESC }
                ) {
                  issuesAll: edges {
                    issue: node {
                      title
                      url
                      createdAt
                      repository{
                          url
                      }
                      labels(first:2){
                          edges{
                              node{
                                  name
                              }
                          }
                      }
                      comments {
                        totalCount
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      `;

  const result = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ query: query }),
  });
  const data = await result.json();
  const searchedRepos = data.data.search.repos;
  //   this.cursor = searchedRepos[searchedRepos.length - 1].cursor;
  const repos = data.data.search.repos.filter(({ repo }: { repo: any }) => {
    return repo.issues.issuesAll.length > 0;
  });
  return repos;
};

export const getRepoName = (repoUrl: string) => {
  return repoUrl.split("/").slice(-2).join("/");
};
