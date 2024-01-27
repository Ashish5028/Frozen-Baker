import { createSlice, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  value: 0,
};

// export const createUser = createAsyncThunk(
//   "createUser",
//   async (datas, { rejectWithValue }) => {
//     console.log("sadjk", datas);
//     const response = await fetch("http://localhost:3001/api/user/save", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(datas),
//     });
//     try {
//       const result = await response.json();

//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
const URL = "http://localhost:3001/api/get/image";

export const getProductDetails = createAsyncThunk("uploadUser", async () => {
  const response = await axios.get(URL);
  console.log(response.data);
  return response.data;
});

const ProductSlice = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // .addCase(createUser.pending, (state) => {
      //   state.loading = TextTrackCue;
      // })
      // .addCase(createUser.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.users.push(action.payload);
      // })
      // .addCase(createUser.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message;
      // })
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
