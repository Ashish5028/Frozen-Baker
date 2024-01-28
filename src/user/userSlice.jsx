import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createUserApi } from "../app/apiUrls";

const URL = "http://localhost:3001/api/get/users";

export const createUser = createAsyncThunk(
  "createUser",
  async (datas, { rejectWithValue }) => {
    console.log("sadjk", datas);
    const response = await fetch(createUserApi, {
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

export const getUsers = createAsyncThunk("getUsers", async () => {
  const response = await axios.get(URL);
  console.log(response.data);
  return response.data;
});
const UserSlice = createSlice({
  name: getUsers,
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default UserSlice.reducer;
