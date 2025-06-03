import { useEffect, useRef, useState } from "react";

const FocusInputAndTimer = () => {
  const ref = useRef();
  const interval = useRef(0);

  const [count, setCount] = useState(0);

  useEffect(() => {
    interval.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div>
      FocusInput
      <input type="text" ref={ref} />
      <button onClick={() => ref.current.focus()}>focus</button>
      <div>
        <h1>Timer:{count} seconds</h1>
        <button
          onClick={() => {
            clearInterval(interval.current);
          }}
        >
          Stop timer
        </button>
        <button
          onClick={() => {
            clearInterval(interval.current); // Очищаем предыдущий интервал
            setCount(0);
            interval.current = setInterval(() => {
              setCount((prevCount) => prevCount + 1);
            }, 1000);
          }}
        >
          Reset timer
        </button>
      </div>
    </div>
  );
};
export default FocusInputAndTimer;
