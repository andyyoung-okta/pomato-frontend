import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const toastSlice = createSlice({
  name: 'toast',
  initialState: { messages: [], added: false },
  reducers: {
    add(state, action) {
      state.added = true;
      state.messages.push({
        id: uuidv4(),
        message: action.payload
      });
    },
    remove(state) {
      state.added = false;
      state.messages.shift();
    }
  }
});

export const toastActions = toastSlice.actions;

export default toastSlice.reducer;