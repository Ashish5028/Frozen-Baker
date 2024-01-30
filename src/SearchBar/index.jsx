import React, { useState } from "react";

import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResultList } from "../SearchBar/SearchResultList";

export const SearchBarIndex = () => {
  const [results, setResults] = useState([]);
  return (
    <div>
      {/* <Team /> */}
      <SearchBar setResults={setResults} />
      <SearchResultList results={results} />
    </div>
  );
};
