import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import AppRouter from "./contexts/navigation/AppRouter";

const App = () => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
