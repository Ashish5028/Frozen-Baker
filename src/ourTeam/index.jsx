import React, { useState } from "react";
import Team from "./component/team";
import { SearchBarIndex } from "../SearchBar";

export const TeamIndex = () => {
  const [results, setResults] = useState([]);
  return (
    <div className="bg-zinc-300 h-screen">
      {/* <Team /> */}
      <SearchBarIndex />
      <br />
      <input type="radio" placeholder="sjkdk" className="pl-10"></input>
    </div>
  );
};
