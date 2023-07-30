import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getCityLocation = createAsyncThunk(
  "weather/getCityLocation",
  async function ({ city }, { rejectWithValue }) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=54f93c8c6338b38d52ba5d3312805284`
      );
      const data = await response.json();

      const { lat } = data[0];
      const { lon } = data[0];

      return [lat, lon];
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCityWeather = createAsyncThunk(
  "weather/fetchWeather",
  async function ({ city }, { dispatch }) {
    try {
      const [lat, lon] = (await dispatch(getCityLocation({ city: "Lviv" })))
        .payload;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=54f93c8c6338b38d52ba5d3312805284`
      );

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchWeather = createSlice({
  name: "weather",
  initialState: {
    status: "",
    error: "",
    temp: 0,
    icon: "",
    desc: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCityWeather.fulfilled, (state, action) => {
      state.status = "fulfilled";

      state.temp = (action.payload.main.temp - 273.15).toFixed(1);
      state.icon = action.payload.weather[0].icon;
      state.desc = action.payload.weather[0].description;
    });
    builder.addCase(getCityWeather.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });
    builder.addCase(getCityWeather.pending, (state) => {
      state.status = "pending";
    });
  },
});

export default fetchWeather.reducer;
