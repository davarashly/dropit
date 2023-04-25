import {
  createSlice,
  configureStore,
  PayloadAction,
  combineReducers,
} from "@reduxjs/toolkit";
import { CatalogProduct } from "../../modules/product/types";
import { CartState, CatalogState } from "./types";
import { indexedDBMiddleware, loadStateFromIndexedDB } from "./db";
import { CART_STORE_NAME, PRODUCTS_STORE_NAME } from "./variables";

const initialCartState: CartState = {
  cart: {},
};

const initialProductsState: CatalogState = {
  products: [],
};

const productsSlice = createSlice({
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

const cartSlice = createSlice({
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

      delete state.cart[productId];
    },
    addProduct(state: CartState, action: PayloadAction<CatalogProduct>) {
      const product = action.payload;

      if (!state.cart[product.id]) {
        state.cart[product.id] = { product, quantity: 1 };
      }
    },
    changeQuantity(
      state: CartState,
      action: PayloadAction<{ productId: number | string; quantity: number }>
    ) {
      let { productId, quantity } = action.payload;
      quantity = isNaN(quantity) ? 1 : quantity;

      if (state.cart[productId]) {
        state.cart[productId].quantity = Math.max(Math.min(quantity, 99), 1);
      }
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export const { clearCart, removeProduct, addProduct, changeQuantity } =
  cartSliceActions;

export const productsSliceActions = productsSlice.actions;
export const { setProducts } = productsSliceActions;

export const store = configureStore({
  reducer: combineReducers({
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(indexedDBMiddleware),
});

// To load the initial state from IndexedDB
loadStateFromIndexedDB().then((loadedState) => {
  store.dispatch({
    type: `${CART_STORE_NAME}/loadFromIndexedDB`,
    payload: loadedState,
  });
});

// For debug
if (process?.env?.NODE_ENV === "development") {
  store.subscribe(() => {
    console.group("Store was updated:");
    console.log(store.getState());
    console.groupEnd();
  });
}
