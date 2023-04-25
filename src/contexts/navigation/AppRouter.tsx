import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";

import pathsApp from "./pathsApp";
import CartPage from "./pages/CartPage";
import {Header} from "../../tools/ui_components";

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path={pathsApp.home}>
        <HomePage />
      </Route>

      <Route path={pathsApp.catalog}>
        <CatalogPage />
      </Route>

      <Route path={pathsApp.cart}>
        <CartPage />
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
