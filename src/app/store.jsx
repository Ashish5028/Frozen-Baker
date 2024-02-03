import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../product/productSlice";
import userSlice from "../user/userSlice";
import teamSlice from "../ourTeam/teamSlice";
import headerSlice from "../header/headerSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    users: userSlice,
    team: teamSlice,
    header: headerSlice,
  },
});

export default store;
