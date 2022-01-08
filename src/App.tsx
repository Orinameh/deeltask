import "./App.css";
import { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";
import { useDebounce } from "./hooks/useDebounce";
import ListItem from "./components/ListItem";
import { fetchSearchResults } from "./api";

export type Result = {
  [key: string]: any;
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<Array<Result>>([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);

  useEffect(() => {
      if (debouncedSearchTerm) {
        setLoading(true);
        fetchSearchResults<Result>(debouncedSearchTerm).then((results) => {
          setLoading(false);
          setResults(results as Result[]);
        }).catch(err => {
          setResults([]);
        });
      } else {
        setResults([]);
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm((e.target as HTMLInputElement).value);
  };
  return (
    <div className="App">
      <h3>Deel Frontend Task</h3>
      <SearchInput searchTerm={searchTerm} onChange={onChange} />
      {loading && <p>Searching.....</p>}
      {
        results.length > 0 &&
        <div className="list-container">
        {results?.map((result) => (
          <ListItem key={result.id} {...result} searchTerm={debouncedSearchTerm} />
        ))}
      </div>
      }
    </div>
  );
}

export default App;
