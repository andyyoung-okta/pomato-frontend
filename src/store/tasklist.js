import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const tasklistSlice = createSlice({
  name: "tasks",
  initialState: { active: [], completed: [], inputs: {} },
  reducers: {
    add(state, action) {
      const id = uuidv4();
      state.active.push({
        id,
        actual: 0,
        ...action.payload,
      });
      state.inputs[id] = [action.payload.name, action.payload.expected];
    },
    update(state, action) {
      state.active[
        state.active.findIndex((task) => task.id === action.payload.id)
      ] = action.payload;
      state.inputs[action.payload.id] = [action.payload.name, action.payload.expected];
    },
    remove(state, action) {
      state.active = state.active.filter((task) => task.id !== action.payload);
      delete state.inputs[action.payload];
    },
    finish(state) {
      state.completed.push(state.active[0]);
      state.active.shift();
    },
    type(state, action) {
      const { id, name, expected } = action.payload;
      state.inputs[id] = [name, expected];
    },
    reset(state, action) {
      state.inputs = state.active.reduce(
        (obj, { id, name, expected }) => ((obj[id] = [name, expected]), obj),
        {}
      );
    }
  },
});

export const tasklistActions = tasklistSlice.actions;

export default tasklistSlice.reducer;
