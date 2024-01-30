import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const fetData = (value) => {
    fetch("http://localhost:4050/api/get/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetData(value);
  };
  return (
    <>
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          placeholder="type to search"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </>
  );
};
