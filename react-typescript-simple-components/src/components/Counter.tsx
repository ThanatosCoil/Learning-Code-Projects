import { useReducer } from "react";
import reducer from "../counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Increment</button>
    </div>
  );
};
export default Counter;
