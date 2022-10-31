import "./App.css";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

// import redux
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore();

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
