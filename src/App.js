import "./App.css";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

//import components
import SignUpForm from "./Components/SignUpForm";

//import Route
import { Route, Switch } from "react-router-dom";

// import redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./Components/reducers/counterReducers";
import Navigation from "./Components/Navigation";

const store = createStore(counterReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <SignUpForm />
          </Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
