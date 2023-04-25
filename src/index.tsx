import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";

import AppRouter from "./contexts/navigation/AppRouter";
import { store } from "./tools/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
