import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../user/userSlice";
import teamSlice from "../ourTeam/teamSlice";
import headerSlice from "../header/headerSlice";
import pastrySlice from "../page/uploadProduct/pastry/pastrySlice";
import chocolateSlice from "../page/uploadProduct/chocolate/chocolateSlice";
import icecreamSlice from "../page/uploadProduct/iceCream/icecreamSlice";
import productSlice from "../product/productSlice";
const store = configureStore({
  reducer: {
    product: productSlice,
    users: userSlice,
    team: teamSlice,
    header: headerSlice,
    pastry: pastrySlice,
    chocolate: chocolateSlice,
    icecream: icecreamSlice,
  },
});

export default store;
