import { CatalogState } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PRODUCTS_STORE_NAME } from "../variables";

const initialProductsState: CatalogState = {
  products: [],
};

export const productsSlice = createSlice({
  name: PRODUCTS_STORE_NAME,
  initialState: initialProductsState,
  reducers: {
    setProducts(
      state: CatalogState,
      action: PayloadAction<CatalogState["products"]>
    ) {
      state.products = action.payload;
    },
  },
});

export const productsSliceActions = productsSlice.actions;
export const { setProducts } = productsSliceActions;
