const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": // Actions
      // logics
      console.log(state);
      return {
        count: (state.count += 1),
      };

    case "DECREMENT":
      console.log(state);
      return {
        count: (state.count -= 1),
      };

    case "RESET":
      // added clear function to clear local storage on reset
      // localStorage.clear();
      console.log(action);
      return {
        count: action.value,
      };
    default:
      //   console.log(state);
      return {
        count: 0,
        // count: parseInt(localStorage.getItem("count")),
      };
  }
};

export default counterReducer;
