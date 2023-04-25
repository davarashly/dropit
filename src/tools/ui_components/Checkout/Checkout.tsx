import React, { FC } from "react";

import StyledCheckout from "./StyledCheckout";

interface Props {
  shippingPrice: number;
  subTotal: number;
  total: number;
  disabled?: boolean;
}

const Checkout: FC<Props> = ({ shippingPrice, subTotal, total, disabled }) => {
  return (
    <StyledCheckout>
      <div
        className="CartView__grid checkout"
        style={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="info-box">
          <p className="title border">Order summary</p>
          <p className="sub-info-box">
            <span>Subtotal</span>
            <span>$ {subTotal.toFixed(2)}</span>
          </p>
          <p
            style={{
              marginBottom: 0,
            }}
            className="sub-info-box"
          >
            <span>Shipping</span>
            <span>
              {shippingPrice ? `$ ${shippingPrice.toFixed(2)}}` : "Free"}
            </span>
          </p>
        </div>
        <div className="info-box">
          <p className="title" style={{ marginBottom: 0 }}>
            <span>Total</span>
            <span>$ {total.toFixed(2)}</span>
          </p>
        </div>
      </div>
      <button disabled={disabled}>Checkout</button>
    </StyledCheckout>
  );
};

export default Checkout;
