import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = { count: 0, img: "" }; //multiplecards here

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": // Actions
      // logics
      console.log(state);
      return {
        count: state.count + action.amount,
        img: state.img,
      };

    case "DECREMENT":
      console.log(state);
      return {
        count: state.count - action.amount,
        img: state.img,
      };

    case "RESET":
      // added clear function to clear local storage on reset
      // localStorage.clear();
      console.log(action);
      return {
        count: action.value,
        img: state.img,
      };
    case "CARDS":
      console.log("ran pokemon api");
      console.log(state);
      console.log(action.url);
      return {
        count: state.count,
        img: action.url,
      };
    default:
      // return {
      //   count: state.count,
      //   // img: "",
      //   // count: parseInt(localStorage.getItem("count")),
      // };
      return state;
  }
};

const store = createStore(counterReducer, applyMiddleware(thunk));

export default store;
