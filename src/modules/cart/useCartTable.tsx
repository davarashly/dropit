import { Tooltip } from "@mui/material";
import React, { useCallback, useMemo } from "react";

import { GetKeyRow, TableColumn } from "../../tools/ui_components/Table/types";

import { CartDetails, CatalogProduct } from "../product/types";
import Quantity from "../../tools/ui_components/Quantity";
import { DeleteFromCartIconForwarded } from "../../tools/icons/IconDeleteFromCart";

interface Props {
  onRemoveItem: (item: CatalogProduct) => void;
  onChangeQuantity: (product: CatalogProduct, quantity: number) => void;
}

function useCartTable({ onRemoveItem, onChangeQuantity }: Props) {
  const columns: TableColumn<CartDetails>[] = useMemo(
    () => [
      {
        key: "item",
        title: "Item",
        renderCell: ({ product }) => (
          <img
            alt=""
            src={product.image}
            className="CartView__grid_productImage"
          />
        ),
      },
      {
        key: "title",
        title: "Title",
        renderCell: ({ product }) => (
          <span className="gray-color">{product.title}</span>
        ),
      },
      {
        key: "price",
        title: "Price",
        renderCell: ({ product }) => (
          <span className="gray-color">${product.price.toFixed(2)}</span>
        ),
      },
      {
        key: "quantity",
        title: "Quantity",
        renderCell: ({ quantity, product }) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              position: "relative",
            }}
          >
            <Quantity
              product={product}
              quantity={quantity}
              onChangeQuantity={onChangeQuantity}
            />
            <b
              className="only-gadget"
              style={{
                position: "absolute",
                bottom: 0,
                right: -35,
                whiteSpace: "nowrap",
              }}
            >
              Total: ${(product.price * quantity).toFixed(2)}
            </b>
          </div>
        ),
      },
      {
        key: "total",
        title: "Total",
        renderCell: ({ product, quantity }) => (
          <b
            className="only-desktop"
            style={{
              position: "absolute",
              whiteSpace: "nowrap",
            }}
          >
            $ {(product.price * quantity).toFixed(2)}
          </b>
        ),
      },
      {
        key: "action",
        title: "",
        renderCell: ({ product }) => (
          <div
            className="CartView__grid_addToCart"
            onClick={() => onRemoveItem(product)}
          >
            <Tooltip title={"Delete from Cart"}>
              <div style={{ display: "flex" }}>
                <DeleteFromCartIconForwarded />
              </div>
            </Tooltip>
          </div>
        ),
      },
    ],
    [onRemoveItem, onChangeQuantity]
  );

  const getKeyRow: GetKeyRow<CartDetails> = useCallback(
    ({ product }) => product.id.toString(),
    []
  );

  return {
    columns,
    getKeyRow,
  };
}

export default useCartTable;
