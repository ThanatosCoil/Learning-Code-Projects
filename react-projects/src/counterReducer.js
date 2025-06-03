const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + +action.value;
    case "decrement":
      return state - +action.value;

    default:
      return state;
  }
};

export default counterReducer;
