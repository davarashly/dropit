import React, { FC } from "react";

import CartIcon from "../../../assets/cart.svg";
import { useSelector } from "react-redux";
import { CartState } from "../../../store/types";

const Cart: FC = () => {
  const cart = useSelector<CartState, CartState["cart"]>((state) => state.cart);

  const cartLength = Object.keys(cart).length;

  return (
    <div style={{ position: "sticky", top: 0 }}>
      <img src={CartIcon} alt="" />
      {cartLength ? <span className="badge">{cartLength}</span> : ""}
    </div>
  );
};

export default Cart;
