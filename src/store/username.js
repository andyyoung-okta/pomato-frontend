import { createSlice } from "@reduxjs/toolkit";

const usernameSlice = createSlice({
  name: "username",
  initialState: { username: null },
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
  },
});

export const usernameActions = usernameSlice.actions;

export default usernameSlice.reducer;
