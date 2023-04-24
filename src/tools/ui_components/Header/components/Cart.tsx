import React, { FC } from "react";

import { useSelector } from "react-redux";
import { CartState } from "../../../store/types";
import { CartIcon } from "../../../icons";

const Cart: FC = () => {
  const cart = useSelector<CartState, CartState["cart"]>((state) => state.cart);

  const cartLength = Object.keys(cart).length;

  return (
    <div style={{ position: "relative" }}>
      <CartIcon />
      {cartLength ? <span className="badge">{cartLength}</span> : ""}
    </div>
  );
};

export default Cart;
