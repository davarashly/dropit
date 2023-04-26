import { CartState } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CART_STORE_NAME } from "../variables";
import { CatalogProduct } from "../../../modules/product/types";
import notification from "../../ui_components/Notification";

const initialCartState: CartState = {
  cart: {},
};

export const cartSlice = createSlice({
  name: CART_STORE_NAME,
  initialState: initialCartState,
  reducers: {
    loadFromIndexedDB(state: CartState, action: PayloadAction<CartState>) {
      state.cart = action.payload.cart;
    },
    clearCart(state: CartState) {
      state.cart = {};
    },
    removeProduct(
      state: CartState,
      action: PayloadAction<CatalogProduct["id"]>
    ) {
      const productId = action.payload;

      if (state.cart[productId]) {
        delete state.cart[productId];

        notification(
          "The product was successfully deleted from the cart!",
          "info"
        );
      }
    },
    addProduct(state: CartState, action: PayloadAction<CatalogProduct>) {
      const product = action.payload;

      if (!state.cart[product.id]) {
        state.cart[product.id] = { product, quantity: 1 };

        notification(
          "The product was successfully added to the cart!",
          "success"
        );
      } else {
        notification("The product is already in the cart!", "warning");
      }
    },
    changeQuantity(
      state: CartState,
      action: PayloadAction<{ productId: number | string; quantity: number }>
    ) {
      const { productId } = action.payload;
      const quantity = isNaN(action.payload.quantity)
        ? 1
        : action.payload.quantity;

      if (state.cart[productId]) {
        state.cart[productId].quantity = Math.max(Math.min(quantity, 99), 1);
        notification("The product quantity was updated!", "success");
      }
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export const { clearCart, removeProduct, addProduct, changeQuantity } =
  cartSliceActions;
