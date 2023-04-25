import React, { FC } from "react";

import StyledHeader from "./StyledHeader";
import Cart from "./components/Cart";

import logo from "../../assets/logo.svg";
import pathsApp from "../../../contexts/navigation/pathsApp";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <StyledHeader>
      <Link to={pathsApp.catalog}>
        <img src={logo} alt="" />
      </Link>
      <Cart />
    </StyledHeader>
  );
};

export default Header;
