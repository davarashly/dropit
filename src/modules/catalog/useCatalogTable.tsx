import { Tooltip } from "@mui/material";
import React, { useCallback, useMemo } from "react";

import { GetKeyRow, TableColumn } from "../../tools/ui_components/Table/types";

import { CatalogProduct } from "../product/types";
import { AddToCartIconForwarded } from "../../tools/icons/IconAddToCart";

interface Props {
  onAddItem: (item: CatalogProduct) => void;
}

function useCatalogTable({ onAddItem }: Props) {
  const columns: TableColumn<CatalogProduct>[] = useMemo(
    () => [
      {
        key: "image",
        title: "Image",
        width: "22%",
        renderCell: (item) => (
          <img
            alt=""
            src={item.image}
            className="CatalogView__grid_productImage"
          />
        ),
      },
      {
        key: "id",
        title: "ID",
        width: "22%",
        renderCell: (item) => <span className="gray-color">{item.id}</span>,
      },
      {
        key: "title",
        title: "Title",
        width: "22%",
        renderCell: (item) => <span className="gray-color">{item.title}</span>,
      },
      {
        key: "price",
        title: "Price",
        width: "22%",
        renderCell: (item) => (
          <span className="gray-color">${item.price.toFixed(2)}</span>
        ),
      },
      {
        key: "action",
        title: "",
        width: "12%",
        renderCell: (item) => (
          <div
            className="CatalogView__grid_addToCart"
            onClick={() => onAddItem(item)}
          >
            <Tooltip title={"Add to Cart"}>
              <div>
                <AddToCartIconForwarded />
              </div>
            </Tooltip>
          </div>
        ),
      },
    ],
    [onAddItem]
  );

  const getKeyRow: GetKeyRow<CatalogProduct> = useCallback(
    (item) => item.id.toString(),
    []
  );

  return {
    columns,
    getKeyRow,
  };
}

export default useCatalogTable;
