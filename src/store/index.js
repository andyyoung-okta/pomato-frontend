import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "./username";
import toastReducer from "./toast";

const store = configureStore({
  reducer: { username: usernameReducer, toast: toastReducer },
});

export default store;
