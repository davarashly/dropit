import React, { FC } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../../store/types";
import { CartIcon } from "../../../icons";
import { Link } from "react-router-dom";
import pathsApp from "../../../../contexts/navigation/pathsApp";

const Cart: FC = () => {
  const { cart } = useSelector<RootState, RootState["cart"]>(
    (state) => state.cart
  );

  const cartLength = Object.keys(cart).length;

  return (
    <Link to={pathsApp.cart} style={{ position: "relative", display: "block" }}>
      <CartIcon />
      {cartLength ? <span className="badge">{cartLength}</span> : ""}
    </Link>
  );
};

export default Cart;
