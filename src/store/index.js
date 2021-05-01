import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./global";
import toastReducer from "./toast";
import tasklistReducer from "./tasklist";
import timerReducer from "./timer";

const store = configureStore({
  reducer: {
    global: globalReducer,
    toast: toastReducer,
    tasklist: tasklistReducer,
    timer: timerReducer,
  },
});

export default store;
