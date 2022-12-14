import "./App.css";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

//import components
import SignUpForm from "./Components/SignUpForm";
import WatchList from "./Components/WatchList";

//import Route
import { Route, Switch } from "react-router-dom";

// import

import Navigation from "./Components/Navigation";
import SearchPage from "./Components/SearchPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <SignUpForm />
        </Route>
        <Route exact path="/watchlist">
          <WatchList />
        </Route>
        <Route exact path="/search">
          <SearchPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
