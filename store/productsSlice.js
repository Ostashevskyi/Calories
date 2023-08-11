import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async function () {
    try {
      const res = await fetch("/api/products/getProducts", {
        method: "GET",
      });

      const products = await res.json();

      return products.res;
    } catch (error) {
      throw new Error(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    status: "",
    error: "",
    products: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.error = "";
      state.status = "fulfilled";
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "rejected";
    });
    builder.addCase(getProducts.pending, (state) => {
      state.status = "pending";
    });
  },
});

export default productsSlice.reducer;
