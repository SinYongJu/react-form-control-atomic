import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import LandingPage from "./components/page/LandingPage";
import SamplePage from "./components/page/SamplePage";
import SearchPage from "./components/page/SearchPage";

const App = () => {
  return (
    <>
      <header>
        <h1>Form control</h1>
      </header>
      <SearchPage></SearchPage>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
