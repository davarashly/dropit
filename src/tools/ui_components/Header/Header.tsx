import React, { FC } from "react";

import StyledHeader from "./StyledHeader";
import Cart from "./components/Cart";

import logo from "../../assets/logo.svg";

const Header: FC = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="" />
      <Cart />
    </StyledHeader>
  );
};

export default Header;
