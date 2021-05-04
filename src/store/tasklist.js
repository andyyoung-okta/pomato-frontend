import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const tasklistSlice = createSlice({
  name: "tasks",
  initialState: { active: [], completed: [] },
  reducers: {
    add(state, action) {
      state.active.push({
        id: uuidv4(),
        actual: 0,
        ...action.payload,
      });
    },
    update(state, action) {
      state.active[
        state.active.findIndex((task) => task.id === action.payload.id)
      ] = action.payload;
    },
    remove(state, action) {
      state.active = state.active.filter((task) => task.id !== action.payload);
    },
    increment(state) {
      state.active[0].actual += 1;
    },
    finish(state) {
      state.completed.push(state.active[0]);
      state.active.shift();
    },
  },
});

export const tasklistActions = tasklistSlice.actions;

export default tasklistSlice.reducer;
