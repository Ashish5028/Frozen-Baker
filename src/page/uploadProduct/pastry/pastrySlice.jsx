import { createSlice, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

import { getPastryApi } from "../../../app/apiUrls";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const getPastryDetails = createAsyncThunk("getPastry", async () => {
  const response = await axios.get(getPastryApi);
  console.log(response.data);
  return response.data;
});

const PastrySlice = createSlice({
  name: "getPastry",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPastryDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPastryDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getPastryDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default PastrySlice.reducer;
