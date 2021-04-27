import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: { username: null, started: false },
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    start(state) {
      state.started = true;
    }
  },
});

export const globalActions = globalSlice.actions;

export default globalSlice.reducer;
