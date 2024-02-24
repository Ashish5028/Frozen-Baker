import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { getApi } from "./teamSlice";
import Team from "./component/team";

export const TeamIndex = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApi());
  });
  return (
    <div className=" ">
      <Team />
    </div>
  );
};
