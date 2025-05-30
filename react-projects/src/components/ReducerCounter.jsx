import { useReducer, useState } from "react";
import counterReducer from "../counterReducer";

const ReducerCounter = () => {
  const [state, dispatch] = useReducer(counterReducer, 0);
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>ReducerCounter: {state}</h1>

      <input
        type="number"
        placeholder="value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "increment", value })}>+</button>
      <button onClick={() => dispatch({ type: "decrement", value })}>-</button>
    </div>
  );
};
export default ReducerCounter;
