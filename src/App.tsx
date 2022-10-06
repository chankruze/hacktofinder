import { useEffect, useState } from "react";
import { fetchRepos, getIssues, sortIssues, SortKeys } from "./helpers";
// context
import { AppContext } from "./contexts/AppContext";
// svg
import chooseSVG from "./assets/choose.svg";
import { Header } from "./components/Header";
import { Preferences } from "./components/Preferences";

export default function App() {
  const [language, setLanguage] = useState("all");
  const [sortKey, setSortKey] = useState(SortKeys.DATE_CREATED);

  const [languageQuery, setLanguageQuery] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [searchedRepos, setSearchedRepos] = useState(null);

  useEffect(() => {
    if (language) {
      setIsLoading(true);

      (async () => {
        const repos = await fetchRepos(language);
        const issues = sortIssues(getIssues(repos), SortKeys.DATE_CREATED);
        setIsLoading(false);
        setSearchedRepos(issues);
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
      }}
    >
      <div className="min-h-screen flex flex-col bg-white dark:bg-dark-primary overflow-hidden overflow-y-hidden">
        {/* top header */}
        <div className="p-4 h-56 sm:h-80 bg-dark-accent flex flex-col items-center justify-evenly gap-4">
          {/* headline */}
          <Header />
          {/* preferences */}
          <Preferences />
        </div>
        {/* results */}
        <div className="flex-1 flex items-center justify-center overflow-x-auto">
          {/* loading */}
          {isLoading && (
            <p className="text-2xl dark:text-dark-accent p-4">
              Loading {language} issues...
            </p>
          )}
          {/* result div */}
          {!isLoading && searchedRepos && (
            <div className="text-gray-200">
              <pre>{JSON.stringify(searchedRepos, null, 2)}</pre>
            </div>
          )}
          {/* empty div + choose svg */}
          {!isLoading && !searchedRepos && (
            <div className="flex flex-col gap-4 justify-center items-center">
              <img src={chooseSVG} alt="choose svg" className="h-64" />
              <p className="p-4 text-2xl dark:text-dark-accent capitalize">
                🙄 please choose a language
              </p>
            </div>
          )}
        </div>
      </div>
    </AppContext.Provider>
  );
}
