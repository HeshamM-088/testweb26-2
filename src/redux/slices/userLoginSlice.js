import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
};

const userLoginSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    login: (state) => {
      state.userName = `Ahmed`;
    },
    logout: (state) => {
      state.userName = ``;
    },
  },
});

export const userAuth = userLoginSlice.reducer;

export const { login, logout } = userLoginSlice.actions;
