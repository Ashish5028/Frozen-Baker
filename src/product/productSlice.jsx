import { createSlice, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { createProductApi } from "../app/apiUrls";
import { getProductApi } from "../app/apiUrls";
// api/url
const URL = "http://localhost:4050/api/get/image";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const getProductDetails = createAsyncThunk("uploadUser", async () => {
  const response = await axios.get(getProductApi);
  // console.log(response.data);
  return response.data;
});
export const uploadProductDetails = createAsyncThunk(
  "uploadProductDetails",
  async (datas, { rejectWithValue }) => {
    const response = await fetch(createProductApi, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datas),
    });
    try {
      const result = await response.json();

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

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

export default ProductSlice.reducer;
