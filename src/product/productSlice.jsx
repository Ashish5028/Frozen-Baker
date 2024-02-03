import { createSlice, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import {
  createDelivaryDetails,
  createProductApi,
  getProductApi,
} from "../app/apiUrls";

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
export const uploadDeivaryDetails = createAsyncThunk(
  "uploadDelivaryDetails",
  async (datas, { rejectWithValue }) => {
    const response = await fetch(createDelivaryDetails, {
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
  reducers: {
    addtoCart: (state, action) => {
      state.users = state.users.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    removetoCart: (state, action) => {
      state = state.filter((item) => item.id !== action.payload);
    },
  },
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
