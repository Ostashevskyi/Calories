import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import caloriesSlice from "./caloriesSlice";
import productsSlice from "./productsSlice";
import dateSlice from "./dateSlice";

const store = configureStore({
  reducer: {
    calories: caloriesSlice,
    products: productsSlice,
    date: dateSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
