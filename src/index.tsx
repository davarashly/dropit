import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";

import AppRouter from "./contexts/navigation/AppRouter";
import { store } from "./tools/store";
import { Header } from "./tools/ui_components";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AppRouter />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
