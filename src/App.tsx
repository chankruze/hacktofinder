import { useEffect, useState } from "react";
import {
  fetchRepos,
  getIssues,
  Issue,
  Repo,
  sortIssues,
  SortKeys,
} from "./helpers";
// context
import { AppContext } from "./contexts/AppContext";
// components
import { IssueGallery } from "./components/IssueGallery";
import { Layout } from "./components/Layout";
import { ActionBar } from "./components/ActionBar";

export const enum ViewMode {
  "LIST",
  "GRID",
}

export default function App() {
  const [language, setLanguage] = useState("all");
  const [sortKey, setSortKey] = useState(SortKeys.DATE_CREATED);
  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState<Repo[] | []>([]);
  const [cursor, setCursor] = useState("");
  const [issues, setIssues] = useState<Issue[] | []>([]);
  const [viewMode, setViewMode] = useState(ViewMode.GRID);

  useEffect(() => {
    if (language) {
      (async () => await loadIssues())();
    }
  }, [language]);

  useEffect(() => {
    if (sortKey) {
      // extract and sort the issues from repo (saved in state) using new sortKey
      const issues = sortIssues(getIssues(repos), sortKey);
      // save the issues to state
      setIssues(issues);
    }
  }, [sortKey]);

  const loadIssues = async () => {
    // start loading indicator
    setIsLoading(true);
    // get the searched repos
    const searchedRepos = await fetchRepos(language, cursor);
    // update cursor
    setCursor(searchedRepos[searchedRepos.length - 1].cursor);
    // stop loading indicator
    setIsLoading(false);
    // save the repos to state
    // setRepos((prev) => [...prev, ...searchedRepos]);
    setRepos(searchedRepos);
    // extract and sort the issues
    const searchedIssues = sortIssues(getIssues(searchedRepos), sortKey);
    // save the issues to state
    // setIssues((prev) => [...prev, ...searchedIssues]);
    setIssues(searchedIssues);
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        language,
        setLanguage,
        sortKey,
        setSortKey: (k: SortKeys) => setSortKey(k),
        issues,
        viewMode,
        setViewMode,
        loadIssues,
      }}
    >
      <Layout>
        {/* action bar */}
        <ActionBar />
        {/* results */}
        <div className="flex-1 flex items-center justify-center overflow-x-auto">
          <IssueGallery />
        </div>
      </Layout>
    </AppContext.Provider>
  );
}
