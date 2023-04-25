import React from "react";

import { Table } from "../../tools/ui_components";

import useCart from "./useCart";
import StyledCartView from "./StyledCartView";
import Checkout from "../../tools/ui_components/Checkout";

const CartView = () => {
  const { cart, columns, getKeyRow } = useCart();

  const data = Object.values(cart);

  const subTotal = data.reduce(
    (sum, { quantity, product: { price } }) => sum + quantity * price,
    0
  );
  const shippingPrice: number = 0;
  const total = subTotal + shippingPrice;

  return (
    <StyledCartView>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div className="CartView__header">
          <div className="CartView__header_text">Your Cart</div>
        </div>
        <div className="wrapper">
          <div className="CartView__grid">
            <Table
              className={"cart"}
              columns={columns}
              data={data}
              getKeyRow={getKeyRow}
            />
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              overflow: "auto",
            }}
          >
            <Checkout
              shippingPrice={shippingPrice}
              subTotal={subTotal}
              total={total}
              disabled={!data.length}
            />
          </div>
        </div>
      </div>
    </StyledCartView>
  );
};

export default CartView;
