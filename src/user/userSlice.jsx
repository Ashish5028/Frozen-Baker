import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createUserApi, getUserApi, loginUserApi } from "../app/apiUrls";

export const createUser = createAsyncThunk(
  "createUser",
  async (datas, { rejectWithValue }) => {
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

export const loginUser = createAsyncThunk(
  "loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(loginUserApi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUsers = createAsyncThunk("getUsers", async () => {
  const response = await axios.get(getUserApi);
  // console.log(response.data);
  return response.data;
});
const UserSlice = createSlice({
  name: getUsers,
  initialState: {
    user: [],
    data: [],
    item: null,
    isLoggedIn: false,
    loading: false,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.item = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.item = null;
    },
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
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUserData, login, logout } = UserSlice.actions;

export default UserSlice.reducer;
