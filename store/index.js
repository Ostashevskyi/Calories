import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";
import caloriesSlice from "./caloriesSlice";

const store = configureStore({
  reducer: {
    weather: weatherSlice,
    calories: caloriesSlice,
  },
});

export default store;
