import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: { test: 5 },
  reducers: {
    mostatas: () => {},
  },
});

export const myTest = testSlice.reducer;
export const { mostatas } = testSlice.actions;
