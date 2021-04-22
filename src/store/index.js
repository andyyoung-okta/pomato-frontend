import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "./username";
import toastReducer from "./toast";
import tasklistReducer from "./tasklist";

const store = configureStore({
  reducer: {
    username: usernameReducer,
    toast: toastReducer,
    tasklist: tasklistReducer,
  },
});

export default store;
