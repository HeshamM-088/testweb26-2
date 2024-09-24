import { createSlice } from "@reduxjs/toolkit";

const data = {
  num: 0,
  users: [
    { id: 1, name: "ahmed", age: 30 },
    { id: 2, name: "mohamed", age: 30 },
    { id: 3, name: "morad", age: 30 },
    { id: 4, name: "fergany", age: 30 },
  ],
};

const homeSlice = createSlice({
  name: "number",
  initialState: { ...data, total: data.users.map(({ id }) => id) },
  reducers: {
    increment: (state) => {
      state.num += 1;
    },
    addAge: (state, { payload: id }) => {
      state.users.map((user) => {
        if (user.id == id) {
          user.age += 1;
        }
      });
    },
  },
});

export const myNum = homeSlice.reducer;

export const { increment, addAge } = homeSlice.actions;
