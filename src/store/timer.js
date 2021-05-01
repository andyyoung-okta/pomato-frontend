import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
  initialState: { seconds: null, pomo: true, total: 0 },
  reducers: {
    set(state, action) {
      state.seconds = action.payload;
    },
    tick(state) {
      state.seconds -= 1;
      if (state.seconds === 0) {
        if (state.pomo) {
          state.total += 1;
        }
        state.pomo = !state.pomo;
      }
    }
  },
});

export const timerActions = timerSlice.actions;

export default timerSlice.reducer;
