import React from "react";
// import LandingPage from "./components/page/LandingPage";
// import SamplePage from "./components/page/SamplePage";
import SearchPage from "../page/SearchPage";
import { SearchProvider } from "../context/SearchContext";
import EditPage from "../page/EditPage";
import { EditProvider } from "../context/EditContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function CustomRouter(props) {
  const { children, ...rest } = props;
  return (
    <Router>
      <ul>
        <li>
          <Link to="/edit/create">create</Link>
        </li>
        <li>
          <Link to="/">home</Link>
        </li>
      </ul>
      <Switch>
        <Route
          exact
          path="/"
          {...rest}
          children={
            <SearchProvider>
              <SearchPage />
            </SearchProvider>
          }
        />
        <Route
          path={["/edit/:mode/:id", "/edit/:mode/"]}
          children={
            <EditProvider>
              <EditPage />
            </EditProvider>
          }
        />
        <Route>
          <div>404 not Found</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default CustomRouter;
