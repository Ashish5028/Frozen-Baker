import React, { useEffect, useState } from "react";
import Team from "./component/team";

import { MegaMenuIndex } from "../megamenu";
import MovieDetails from "./component/movieDetails";
import { useDispatch } from "react-redux";
import { getApi } from "./teamSlice";

export const TeamIndex = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApi());
  });
  return (
    <div className=" h-screen">
      <MovieDetails />
    </div>
  );
};
