import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAddress, uploadAddress } from "../../app/apiUrls";

export const SaveAddress = createAsyncThunk(
  "userAddress",
  async ({ name, email, address, landmark, altnumber, number, user }) => {
    try {
      const result = await fetch(uploadAddress, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          address,
          landmark,
          altnumber,
          number,
          user,
        }),
      });
      const res = await result.json();
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
);
export const getUserAddress = createAsyncThunk("getAddress", async () => {
  const result = await axios.get(getAddress);
  // console.log(result);
  return result.data;
});

const AddressSlice = createSlice({
  name: "address",
  initialState: {
    address: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.address = action.payload;
        state.error = null;
      })
      .addCase(getUserAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default AddressSlice.reducer;
