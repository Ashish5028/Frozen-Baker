import { createSlice, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { getProductApi } from "../app/apiUrls";

// api/url

const initialState = {
  users: [],
  cartItems: [],
  loading: false,
  error: null,
};

export const getProductDetails = createAsyncThunk("uploadUser", async () => {
  const response = await axios.get(getProductApi);
  // console.log(response.data);
  return response.data;
});

const ProductSlice = createSlice({
  name: "getProduct",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProductDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { addtoCart, removetoCart } = ProductSlice.actions;
export default ProductSlice.reducer;
