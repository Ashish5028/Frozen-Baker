import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../product/productSlice";
import userSlice from "../user/userSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    users: userSlice,
  },
});

export default store;
