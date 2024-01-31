import React, { useState } from "react";
import Team from "./component/team";

import { MegaMenuIndex } from "../megamenu";

export const TeamIndex = () => {
  const [results, setResults] = useState([]);
  return (
    <div className="bg-zinc-300 h-screen">
      <MegaMenuIndex />
    </div>
  );
};
