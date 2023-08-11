import { configureStore } from "@reduxjs/toolkit";
import caloriesSlice from "./caloriesSlice";
import productsSlice from "./productsSlice";

const store = configureStore({
  reducer: {
    calories: caloriesSlice,
    products: productsSlice,
  },
});

export default store;
