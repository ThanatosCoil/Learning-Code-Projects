import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter(counter + 1);
  };

  const clickHandlerDec = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      Counter: {counter}
      <button onClick={clickHandler}>Inc</button>
      <button onClick={clickHandlerDec}>Dec</button>
    </div>
  );
};
export default Counter;
