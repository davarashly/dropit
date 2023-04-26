import React, { FC } from "react";

import { LoadingSpinner, Table } from "../../tools/ui_components";

import useCart from "./useCart";
import StyledCartView from "./StyledCartView";
import Checkout from "../../tools/ui_components/Checkout";
import ModalWindow from "../../tools/ui_components/ModalWindow";
import useFlag from "../../tools/hooks/useFlag";
import { clearCart, store } from "../../tools/store";
import pathsApp from "../../contexts/navigation/pathsApp";
import { useHistory } from "react-router-dom";

const CartView: FC = () => {
  const { cart, columns, getKeyRow } = useCart();
  const history = useHistory();

  const data = Object.values(cart);

  const subTotal = data.reduce(
    (sum, { quantity, product: { price } }) => sum + quantity * price,
    0
  );
  const shippingPrice = 0;
  const total = subTotal + shippingPrice;

  const [isVisible, showModal, _hideModal] = useFlag(false);
  const [isLoading, onStartLoading, onEndLoading] = useFlag(false);

  const checkout = async () => {
    try {
      onStartLoading();

      await new Promise((resolve) => setTimeout(resolve, 1300)); // requests
      store.dispatch(clearCart());
      showModal();
    } catch (e) {
      console.error(e);
    } finally {
      onEndLoading();
    }
  };

  const hideModal = () => {
    _hideModal();

    return history.push(pathsApp.catalog);
  };

  return (
    <StyledCartView>
      <ModalWindow
        isVisible={isVisible}
        hideModal={hideModal}
        title="Checkout completed"
        description="Thanks for buying, see you soon!"
        buttonText="See Ya"
      />
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
              checkout={checkout}
            />
          </div>
        </div>
      </div>
      <LoadingSpinner isVisible={isLoading} />
    </StyledCartView>
  );
};

export default CartView;
