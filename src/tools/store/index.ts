import {
  createSlice,
  configureStore,
  PayloadAction,
} from "@reduxjs/toolkit";
import { CatalogProduct } from "../../modules/product/types";
import { CartState } from "./types";
import { indexedDBMiddleware, loadStateFromIndexedDB } from "./db";
import { STORE_NAME } from "./variables";

const initialCartState: CartState = {
  cart: {},
};

const cartCounterSlice = createSlice({
  name: STORE_NAME,
  initialState: initialCartState,
  reducers: {
    loadFromIndexedDB(state: CartState, action: PayloadAction<CartState>) {
      state.cart = action.payload.cart;
    },
    clearCart(state: CartState) {
      state.cart = {};
    },
    removeProduct(state: CartState, action: PayloadAction<string>) {
      const productId = action.payload;

      delete state.cart[productId];
    },
    addProduct(state: CartState, action: PayloadAction<CatalogProduct>) {
      const product = action.payload;

      if (!state.cart[product.id]) {
        state.cart[product.id] = { product, quantity: 1 };
      }
    },
    changeAmount(
      state: CartState,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) {
      const { productId, quantity } = action.payload;

      if (state.cart[productId]) {
        state.cart[productId].quantity = Math.max(Math.min(quantity, 99), 1);
      }
    },
  },
});

export const cartCounterSliceActions = cartCounterSlice.actions;
export const { clearCart, removeProduct, addProduct, changeAmount } =
  cartCounterSliceActions;

export const store = configureStore({
  reducer: cartCounterSlice.reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(indexedDBMiddleware),
});

// To load the initial state from IndexedDB
loadStateFromIndexedDB().then((loadedState) => {
  store.dispatch({
    type: `${STORE_NAME}/loadFromIndexedDB`,
    payload: loadedState,
  });
});

store.subscribe(() => {
  // For debug
  console.group("Store was updated:");
  console.log(store.getState());
  console.groupEnd();
});
