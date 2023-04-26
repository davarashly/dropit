import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";

import pathsApp from "./pathsApp";
import CartPage from "./pages/CartPage";
import { Header } from "../../tools/ui_components";

import { ToastContainer } from "react-toastify";

const AppRouter: FC = () => (
  <Router>
    <Switch>
      <Route exact path={pathsApp.home}>
        <HomePage />
      </Route>
      <Route>
        <Header />
        <Route path={pathsApp.catalog}>
          <CatalogPage />
        </Route>
        <Route path={pathsApp.cart}>
          <CartPage />
        </Route>
      </Route>
    </Switch>
    <ToastContainer />
  </Router>
);

export default AppRouter;
