import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { indexedDBMiddleware, loadStateFromIndexedDB } from "./db";
import { CART_STORE_NAME } from "./variables";
import { productsSlice } from "./modules/Catalog";
import { cartSlice } from "./modules/Cart";

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

export * from "./modules/Catalog";
export * from "./modules/Cart";
