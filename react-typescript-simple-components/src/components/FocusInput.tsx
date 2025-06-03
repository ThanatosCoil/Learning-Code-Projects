import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputRef.current?.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="focus" />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
};
export default FocusInput;
