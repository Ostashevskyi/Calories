import { configureStore } from "@reduxjs/toolkit";
import caloriesSlice from "./caloriesSlice";

const store = configureStore({
  reducer: {
    calories: caloriesSlice,
  },
});

export default store;
