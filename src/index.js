import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import CustomRouter from "./components/route/CustomRouter";

const App = () => {
  return (
    <>
      <header>
        <h1>Form control</h1>
      </header>
      <CustomRouter />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
