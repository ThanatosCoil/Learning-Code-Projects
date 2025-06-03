const reducer = (
  state: { count: number },
  action: { type: "INCREMENT" | "DECREMENT" }
) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default reducer;
