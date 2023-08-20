import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDate = createAsyncThunk(
  "date/getDate",
  async function ({ date }) {
    return date;
  }
);

const dateSlice = createSlice({
  name: "date",
  initialState: {
    status: "",
    error: "",
    date: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getDate.fulfilled, (state, action) => {
      state.date = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(getDate.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "rejected";
    });
    builder.addCase(getDate.pending, (state) => {
      state.status = "pending";
    });
  },
});

export default dateSlice.reducer;
