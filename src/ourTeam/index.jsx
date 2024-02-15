import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { getApi } from "./teamSlice";

import AppDetails from "./component/movieDetails";

export const TeamIndex = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApi());
  });
  return (
    <div className=" ">
      {/* <Team /> */}
      {/* <CARTPAGE /> */}
      <AppDetails />
    </div>
  );
};
