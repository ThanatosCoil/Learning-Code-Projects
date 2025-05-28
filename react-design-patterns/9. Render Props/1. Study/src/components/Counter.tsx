import { useState } from "react";

const Counter = ({ render }: any) => {
  const [count, setCount] = useState(10);

  return (
    <div>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Decrement
      </button>
      {render(count)}
    </div>
  );
};
export default Counter;
