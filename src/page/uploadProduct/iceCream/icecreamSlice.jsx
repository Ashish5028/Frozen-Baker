import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getIcecreamApi } from "../../../app/apiUrls";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const getIcecreamDetails = createAsyncThunk("getIcecream", async () => {
  const response = await axios.get(getIcecreamApi);
  // console.log(response.data);
  return response.data;
});

const IceCreamSlice = createSlice({
  name: "getIcecream",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getIcecreamDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getIcecreamDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getIcecreamDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default IceCreamSlice.reducer;
