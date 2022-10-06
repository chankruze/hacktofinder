import { useEffect, useState } from "react";
import { fetchRepos, getIssues, sortIssues, SortKeys } from "./helpers";
// context
import { AppContext } from "./contexts/AppContext";
// svg
import chooseSVG from "./assets/choose.svg";
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
  const [issues, setIssues] = useState([]);
  const [viewMode, setViewMode] = useState(ViewMode.GRID);

  useEffect(() => {
    if (language) {
      setIsLoading(true);

      (async () => {
        const repos = await fetchRepos(language);
        const issues = sortIssues(getIssues(repos), SortKeys.DATE_CREATED);
        setIsLoading(false);
        setIssues(issues);
      })();
    }
  }, [language]);

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
        <div className="p-4 min-h-screen space-y-4 bg-white dark:bg-dark-secondary overflow-hidden overflow-y-hidden">
          {/* action bar */}
          <ActionBar />
          {/* results */}
          <div className="flex-1 flex items-center justify-center overflow-x-auto">
            {/* loading */}
            {isLoading && (
              <p className="text-2xl dark:text-dark-accent p-4">
                Loading {language} issues...
              </p>
            )}
            {/* empty div + choose svg */}
            {!isLoading && !issues && (
              <div className="flex flex-col gap-4 justify-center items-center">
                <img src={chooseSVG} alt="choose svg" className="h-64" />
                <p className="p-4 text-2xl dark:text-dark-accent capitalize">
                  🙄 please choose a language
                </p>
              </div>
            )}
            {/* result div */}
            {!isLoading && issues && <IssueGallery />}
          </div>
        </div>
      </Layout>
    </AppContext.Provider>
  );
}
