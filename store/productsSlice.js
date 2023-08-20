import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async function ({ date }) {
    try {
      const res = await fetch("/api/products/getProducts", {
        method: "POST",
        body: JSON.stringify({
          date,
        }),
      });

      const products = await res.json();

      return products.res;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async function ({ productID, date }, { dispatch }) {
    try {
      const res = await fetch("/api/products/deleteProduct", {
        method: "DELETE",
        body: JSON.stringify({ productID }),
      });

      const deletedProduct = await res.json();

      dispatch(getProducts({ date }));

      return deletedProduct.deleteRes;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const setTotal = createAsyncThunk(
  "products/setTotal",
  async function ({ totalCarbs, totalFats, totalProteins, totalCalories }) {
    return {
      totalCarbs,
      totalFats,
      totalProteins,
      totalCalories,
    };
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    status: "",
    error: "",
    products: [],
    totalFats: 0,
    totalCarbs: 0,
    totalProteins: 0,
    totalCalories: 0,
  },
  extraReducers: (builder) => {
    // get products
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

    // set total calories
    builder.addCase(setTotal.fulfilled, (state, action) => {
      state.totalCarbs = action.payload.totalCarbs;
      state.totalFats = action.payload.totalFats;
      state.totalProteins = action.payload.totalProteins;
      state.totalCalories = action.payload.totalCalories;
    });

    //delete product
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const deletedProductID = action.payload.id;

      const filteredProducts = state.products.filter(
        (product) => product !== deletedProductID
      );

      state.products = filteredProducts;
    });
  },
});

export default productsSlice.reducer;
