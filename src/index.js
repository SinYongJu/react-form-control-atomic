import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import LandingPage from "./components/page/LandingPage";
import SamplePage from "./components/page/SamplePage";
import SearchPage from "./components/page/SearchPage";
import { SearchProvider } from "./components/context/SearchContext";
import EditPage from "./components/page/EditPage";
import { EditProvider } from "./components/context/EditContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


function CustumRouter (props) {
  const {children, ...rest} = props

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
      <Switch >
        <Route path={["/edit/:mode/:id", "/edit/:mode/"]} 
          children={  
            <EditProvider>
              <EditPage />
            </EditProvider>}/>
        <Route path="/" {...rest} children={
          <SearchProvider>
            <SearchPage/>
          </SearchProvider>}/>
        <Route>
          <div>404 not Found</div>
        </Route>
      </Switch>
    </Router>
  )
}

const App = () => {
  return (
    <>
      <header>
        <h1>Form control</h1>
      </header>
      <CustumRouter />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
