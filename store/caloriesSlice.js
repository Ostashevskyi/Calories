import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCalories = createAsyncThunk(
  "calories/getCalories",
  async function () {
    const options = {
      method: "GET",
      headers: {
        "X-Api-Key": "2dVrftqy2tRtt7YMHOHrvw==Z4jv2ywUUbf4PlPY",
      },
      contentType: "application/json",
    };

    const response = await fetch(
      "https://api.calorieninjas.com/v1/nutrition?query=10kg onion",
      options
    );

    const data = await response.json();

    console.log(data);

    return data.items;
  }
);

const caloriesSlice = createSlice({
  name: "calories",
  initialState: {
    status: "",
    error: "",
    calories: 0,
  },
  extraReducers: (builder) => {
    builder.addCase(getCalories.fulfilled, (state, action) => {
      state.error = "";
      state.status = "fulfilled";
      state.calories = action.payload;
    });
    builder.addCase(getCalories.rejected, (state, action) => {
      state.error = action.payload;
      console.log(action.payload);
      state.status = "rejected";
    });
    builder.addCase(getCalories.pending, (state) => {
      state.status = "pending";
    });
  },
});

export default caloriesSlice.reducer;
