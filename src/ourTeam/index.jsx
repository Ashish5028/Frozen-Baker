import React, { useEffect, useState } from "react";
import Team from "./component/team";

import { MegaMenuIndex } from "../megamenu";
import MovieDetails from "./component/movieDetails";
import { useDispatch } from "react-redux";
import { getApi } from "./teamSlice";
import AppCart from "./component/cart";
import CARTPAGE from "./component/cart";
import ParlorForm from "./component/movieDetails";

export const TeamIndex = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApi());
  });
  return (
    <div className=" ">
      <Team />
      {/* <CARTPAGE /> */}
      {/* <ParlorForm /> */}
    </div>
  );
};
