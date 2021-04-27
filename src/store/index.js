import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./global";
import toastReducer from "./toast";
import tasklistReducer from "./tasklist";

const store = configureStore({
  reducer: {
    global: globalReducer,
    toast: toastReducer,
    tasklist: tasklistReducer,
  },
});

export default store;
