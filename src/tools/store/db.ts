import { CartState } from "./types";
import { Middleware } from "redux";
import { cartCounterSliceActions } from "./index";
import { DB_NAME, STORE_NAME } from "./variables";

const openDB = (): Promise<IDBDatabase> =>
  new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result;

      db.createObjectStore(STORE_NAME, { keyPath: "id" });
    };
  });

const saveCart = async (cart: CartState["cart"]): Promise<void> => {
  const db = await openDB();
  const transaction = db.transaction(STORE_NAME, "readwrite");
  const store = transaction.objectStore(STORE_NAME);

  for (const key in cart) {
    const cartItem = {
      ...cart[key],
      id: cart[key].product.id, // Add the "id" property based on the product id
    };

    store.put(cartItem);
  }

  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
};

const loadCart = async (): Promise<CartState> => {
  const db = await openDB();
  const transaction = db.transaction(STORE_NAME, "readonly");
  const store = transaction.objectStore(STORE_NAME);

  const request = store.getAll();

  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      const cartItemsArray = request.result;
      const cart: CartState["cart"] = {};

      for (const item of cartItemsArray) {
        cart[item.product.id] = item;
      }

      resolve({ cart });
    };
    request.onerror = () => reject(request.error);
  });
};

export const indexedDBMiddleware: Middleware<{}, CartState> =
  (store) => (next) => async (action) => {
    const result = next(action);

    if (
      Object.keys(cartCounterSliceActions)
        .map((actionName) =>
          actionName !== "loadFromIndexedDB"
            ? `${STORE_NAME}/${actionName}`
            : ""
        )
        .includes(action.type)
    ) {
      await saveCart(store.getState().cart);
    }

    return result;
  };

export const loadStateFromIndexedDB = async (): Promise<CartState> => {
  const cartState = await loadCart();
  const cart: CartState["cart"] = {};

  for (const productId in cartState.cart) {
    cart[productId] = cartState.cart[productId];
  }

  return { cart };
};
