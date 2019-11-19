import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import LandingPage from "./components/page/LandingPage";
import SamplePage from "./components/page/SamplePage";
import SearchPage from "./components/page/SearchPage";
import { SearchProvider } from "./components/context/SearchContext";
import EditPage from "./components/page/EditPage";
import { EditProvider } from "./components/context/EditContext";
const App = () => {
  return (
    <>
      <header>
        <h1>Form control</h1>
      </header>
      <EditProvider>
        <SearchProvider>
          <SearchPage></SearchPage>
          <EditPage />
        </SearchProvider>
      </EditProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
