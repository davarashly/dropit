import React, { FC } from "react";
import { CatalogProduct } from "../../../../modules/product/types";
import { Tooltip } from "@mui/material";
import { addProduct, store } from "../../../store";
import { AddToCartIconForwarded } from "../../../icons/IconAddToCart";

interface Props {
  product: CatalogProduct;
}

const SingleProduct: FC<Props> = ({ product }) => {
  return (
    <div className="single-product">
      <img src={product.image} alt="" />
      <div
        className="gray-color"
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          paddingInline: "1rem",
        }}
      >
        <p>{product.id}</p>
        <p>{product.title}</p>
        <p>${product.price.toFixed(2)}</p>
      </div>
      <div
        className="CatalogView__grid_addToCart"
        onClick={() => store.dispatch(addProduct(product))}
      >
        <Tooltip title={"Add to Cart"}>
          <div>
            <AddToCartIconForwarded />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default SingleProduct;
