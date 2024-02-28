import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createUserApi, getUserApi, loginUserApi } from "../app/apiUrls";
import { useDispatch } from "react-redux";

export const createUser = createAsyncThunk(
  "createUser",
  async ({ email, password, name, category }, { rejectWithValue }) => {
    const response = await fetch(createUserApi, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, category, email, password }),
    });
    try {
      if (response.ok) {
        const result = await response.json();
        let auth = result.auth;
        let data = result.data.name;
        let Catogery = result.data.category;

        localStorage.setItem("auth", auth);
        localStorage.setItem("User", data);
        localStorage.setItem("Catogery", Catogery);

        return result;
      }
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
    cart: [],
    isLoggedIn: false,
    loading: false,
    error: null,
  },
  reducers: {
    // login: (state, action) => {
    //   state.isLoggedIn = true;
    //   state.user.push(action.payload);
    // },
    // logout: (state) => {
    //   state.isLoggedIn = false;
    //   state.item = null;
    // },
    cartData: (state, action) => {
      state.cart.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder;
    // .addCase(getUsers.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(getUsers.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.user = action.payload;
    // })
    // .addCase(getUsers.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error;
    // })
    // .addCase(createUser.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(createUser.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.user.push(action.payload);
    //   state.error = null;
    // })
    // .addCase(createUser.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // });
  },
});

export const { cartData } = UserSlice.actions;

export default UserSlice.reducer;
