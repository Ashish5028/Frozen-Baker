import React from "react";
import Team from "./component/team";
import { FooterPage } from "../component/footerPage";
import Header from "../component/Header";

export const TeamIndex = () => {
  return (
    <div>
      <Header />
      <Team />
      <FooterPage />
    </div>
  );
};
