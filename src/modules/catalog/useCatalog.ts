import { useCallback, useEffect } from "react";

import { API } from "../../contexts/api";
import useFlag from "../../tools/hooks/useFlag";

import { CatalogProduct } from "../product/types";

import useCatalogTable from "./useCatalogTable";

import { addProduct, store, setProducts } from "../../tools/store";
import { useSelector } from "react-redux";
import { RootState } from "../../tools/store/types";

const useCatalog = () => {
  const { products } = useSelector<RootState, RootState["products"]>(
    (s) => s.products
  );

  const [isLoading, onStartLoading, onEndLoading] = useFlag(true);

  const handleAddProductToCart = useCallback((product: CatalogProduct) => {
    store.dispatch(addProduct(product));
  }, []);

  const { columns, getKeyRow } = useCatalogTable({
    onAddItem: handleAddProductToCart,
  });

  useEffect(
    () => {
      if (products.length) {
        return onEndLoading();
      }

      onStartLoading();

      API.product
        .getAll()
        .then((products) =>
          store.dispatch(
            setProducts(
              products.map((p) => ({
                ...p,
                // title: "Men black T-shirt",
              }))
            )
          )
        )
        .finally(onEndLoading);
    },
    [] // eslint-disable-line
  );

  return {
    isLoading,
    products,
    columns,
    getKeyRow,
  };
};

export default useCatalog;
