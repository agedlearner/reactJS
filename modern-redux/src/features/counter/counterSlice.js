import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", //A unique name for slice
  initialState: { value: 0 }, //initial state
  reducers: { // Reducer Logic - Can modify the state directly
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const {increment, decrement, reset} = counterSlice.actions;

export default counterSlice.reducer;