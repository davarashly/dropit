import { useCallback } from "react";

import { CatalogProduct } from "../product/types";

import useCartTable from "./useCartTable";

import { changeQuantity, removeProduct, store } from "../../tools/store";
import { useSelector } from "react-redux";
import { RootState } from "../../tools/store/types";

const useCart = () => {
  const { cart } = useSelector<RootState, RootState["cart"]>(
    (state) => state.cart
  );

  const handleRemoveProductFromCart = useCallback((product: CatalogProduct) => {
    store.dispatch(removeProduct(product.id));
  }, []);

  const handleChangeQuantity = useCallback(
    (product: CatalogProduct, quantity: number) => {
      store.dispatch(changeQuantity({ productId: product.id, quantity }));
    },
    []
  );

  const { columns, getKeyRow } = useCartTable({
    onRemoveItem: handleRemoveProductFromCart,
    onChangeQuantity: handleChangeQuantity,
  });

  return {
    cart,
    columns,
    getKeyRow,
  };
};

export default useCart;
