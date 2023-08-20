import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCalories = createAsyncThunk(
  "calories/getCalories",
  async function ({ meal, quantity }) {
    try {
      const options = {
        method: "GET",
        headers: {
          "X-Api-Key": "2dVrftqy2tRtt7YMHOHrvw==Z4jv2ywUUbf4PlPY",
        },
        contentType: "application/json",
      };

      const response = await fetch(
        `https://api.calorieninjas.com/v1/nutrition?query=${quantity}g ${meal}`,
        options
      );

      const data = await response.json();

      const returnedData = data.items[0];

      await fetch("/api/products/sendProduct", {
        method: "POST",
        body: JSON.stringify({
          meal: returnedData.name,
          quantity: returnedData.serving_size_g,
          protein: returnedData.protein_g,
          fats: returnedData.fat_saturated_g,
          carbs: returnedData.carbohydrates_total_g,
          calories: returnedData.calories,
        }),
      });

      return data.items[0];
    } catch (error) {
      throw new Error(error);
    }
  }
);

const caloriesSlice = createSlice({
  name: "calories",
  initialState: {
    status: "",
    error: "",
    meal: "",
    amount: "",
    calories: 0,
    protein: 0,
    fats: 0,
    carbs: 0,
    id: 0,
  },
  extraReducers: (builder) => {
    builder.addCase(getCalories.fulfilled, (state, action) => {
      state.error = "";
      state.status = "fulfilled";
      state.calories = action.payload.calories;
      state.fats = action.payload.fat_saturated_g;
      state.protein = action.payload.protein_g;
      state.carbs = action.payload.carbohydrates_total_g;
      state.amount = action.payload.serving_size_g;
      state.meal = action.payload.name;
    });
    builder.addCase(getCalories.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "rejected";
    });
    builder.addCase(getCalories.pending, (state) => {
      state.status = "pending";
    });
  },
});

export default caloriesSlice.reducer;
