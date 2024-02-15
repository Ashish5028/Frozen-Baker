import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userSlice from "../user/userSlice";
import teamSlice from "../ourTeam/teamSlice";
import headerSlice from "../header/headerSlice";
import pastrySlice from "../page/uploadProduct/pastry/pastrySlice";
import chocolateSlice from "../page/uploadProduct/chocolate/chocolateSlice";
import icecreamSlice from "../page/uploadProduct/iceCream/icecreamSlice";
import productSlice from "../product/productSlice";
import addressSlice from "../page/address/addressSlice";
const persistConfig = {
  key: "root",
  storage,
};
const reducer = combineReducers({
  product: productSlice,
  users: userSlice,
  team: teamSlice,
  header: headerSlice,
  pastry: pastrySlice,
  chocolate: chocolateSlice,
  icecream: icecreamSlice,
  address: addressSlice,
});
const persistReducers = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistReducers,
});

export const persistor = persistStore(store);
