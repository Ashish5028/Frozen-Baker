import React from "react";
import "./SearchResultList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultList = ({ results }) => {
  return (
    <div className="result-list">
      {results.map((results, id) => {
        return <SearchResult results={results} key={id} />;
      })}
    </div>
  );
};
