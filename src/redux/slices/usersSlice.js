import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("/getUsers", async (x, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    const { data } = await axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/users`,
    });

    return data;
  } catch (e) {
    return rejectWithValue(e);
  }
});

export const getUserDetails = createAsyncThunk(
  "/getUsers/userID",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data } = await axios({
        method: "post",
        url: `https://fakestoreapi.com/products/${id}`,
      });

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const initialState = {
  users: [],
  loading: true,
  err: null,
  userInfo: null,
  userInfoLoading: true,
  userInfoErr: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    // get all users
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.users = payload;
      state.loading = false;
      state.usersStartingWithK = payload.filter((obj) =>
        obj.username.startsWith("K")
      );
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload.message;
    });

    // get single user
    builder.addCase(getUserDetails.pending, (state, action) => {
      state.userInfoLoading = true;
    });
    builder.addCase(getUserDetails.fulfilled, (state, { payload }) => {
      state.userInfoLoading = false;
      state.userInfo = payload;
    });
    builder.addCase(getUserDetails.rejected, (state, action) => {
      state.userInfoLoading = false;
      console.log(action);
    });
  },
});

export const allUsers = usersSlice.reducer;
