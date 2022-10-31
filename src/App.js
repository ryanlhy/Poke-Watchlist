import "./App.css";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

// import redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./Components/reducers/counterReducers";

const store = createStore(counterReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
