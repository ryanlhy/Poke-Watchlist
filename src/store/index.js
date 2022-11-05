import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = { count: 0, img: "", watchList: [], search: "" }; //multiplecards here

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": // Actions
      // logics
      console.log(state);
      return {
        ...state,
        count: state.count + action.amount,
      };

    case "DECREMENT":
      console.log(state);
      return {
        ...state,
        count: state.count - action.amount,
      };

    case "RESET":
      // added clear function to clear local storage on reset
      // localStorage.clear();
      console.log(action);
      return {
        ...state,
        count: action.value,
      };

    case "CARDS":
      console.log("ran pokemon api");
      console.log(state);
      console.log(action.url);
      return {
        count: state.count,
        img: action.url,
        watchList: state.watchList,
      };
    case "WATCHLIST":
      console.log(action);
      return {
        ...state,
        watchList: [...state.watchList, action.value],
      };
    // delete item
    case "WATCHLIST/REMOVE":
      // used slice instead as splice mutates state object
      return {
        ...state,
        watchList: [
          ...state.watchList.slice(0, action.value),
          ...state.watchList.slice(action.value + 1),
        ],
      };
    case "SEARCH":
      console.log(action);
      return {
        ...state,
        search: action.value,
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
