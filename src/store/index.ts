// src/store/store.js ou src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import betReducer from "./slices/betSlice";

export const store = configureStore({
  reducer: {
    bet: betReducer,
  },
});
