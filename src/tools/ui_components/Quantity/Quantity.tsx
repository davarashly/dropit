import React, { FC } from "react";

import StyledQuantity from "./StyledQuantity";
import { CatalogProduct } from "../../../modules/product/types";

interface Props {
  quantity: number;
  product: CatalogProduct;
  onChangeQuantity: (product: CatalogProduct, quantity: number) => void;
}

const Quantity: FC<Props> = ({ quantity, product, onChangeQuantity }) => {
  return (
    <StyledQuantity>
      <span
        onClick={() => onChangeQuantity(product, quantity - 1)}
        className="btn"
      >
        ‒
      </span>
      <input
        type="text"
        value={quantity}
        onChange={(e) => onChangeQuantity(product, +e.target.value)}
      />
      <span
        onClick={() => onChangeQuantity(product, quantity + 1)}
        className="btn"
      >
        +
      </span>
    </StyledQuantity>
  );
};

export default Quantity;
