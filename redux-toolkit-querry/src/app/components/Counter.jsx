import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counter/counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(Number(input)))}>
        +{input}
      </button>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};
export default Counter;
