import { createSlice, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

import { getChocolateApi } from "../../../app/apiUrls";

export const getChocolateDetail = createAsyncThunk("uploadUser", async () => {
  const response = await axios.get(getChocolateApi);
  return response.data;
});

const ChocolateSlice = createSlice({
  name: "getPastry",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChocolateDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(getChocolateDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getChocolateDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default ChocolateSlice.reducer;
