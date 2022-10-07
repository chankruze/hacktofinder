import { useEffect, useState } from "react";
import { fetchRepos, getIssues, sortIssues, SortKeys } from "./helpers";
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
  const [languageQuery, setLanguageQuery] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [issues, setIssues] = useState([]);
  const [viewMode, setViewMode] = useState(ViewMode.GRID);

  useEffect(() => {
    if (language) {
      // start loading indicator
      setIsLoading(true);

      (async () => {
        // get the searched repos
        const repos = await fetchRepos(language);
        // stop loading indicator
        setIsLoading(false);
        // save the repos to state
        setRepos(repos);
        // extract and sort the issues
        const issues = sortIssues(getIssues(repos), sortKey);
        // save the issues to state
        setIssues(issues);
      })();
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

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        sortKey,
        setSortKey: (k: SortKeys) => setSortKey(k),
        issues,
        viewMode,
        setViewMode,
      }}
    >
      <Layout>
        {/* action bar */}
        <ActionBar />
        {/* results */}
        <div className="flex-1 flex items-center justify-center overflow-x-auto">
          {/* loading */}
          {isLoading ? (
            <p className="text-2xl dark:text-dark-accent p-4">
              Loading {language} issues...
            </p>
          ) : (
            <IssueGallery />
          )}
        </div>
      </Layout>
    </AppContext.Provider>
  );
}
