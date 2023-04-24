import { useCallback, useEffect, useState } from "react";

import { API } from "../../contexts/api";
import useFlag from "../../tools/hooks/useFlag";

import { CatalogProduct } from "../product/types";

import useCatalogTable from "./useCatalogTable";

import { addProduct, store } from "../../tools/store";

const useCatalog = () => {
  const [products, setProducts] = useState<CatalogProduct[]>([]);
  const [isLoading, onStartLoading, onEndLoading] = useFlag(true);

  const handleAddProductToCart = useCallback((product: CatalogProduct) => {
    store.dispatch(addProduct(product));

    // console.log("handleAddProductToCart");
    // console.log("product", product);
  }, []);

  const { columns, getKeyRow } = useCatalogTable({
    onAddItem: handleAddProductToCart,
  });

  useEffect(
    () => {
      API.product
        .getAll()
        .then((products) =>
          setProducts(
            products.map((p) => ({
              ...p,
              // title: "Men black T-shirt",
            }))
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
