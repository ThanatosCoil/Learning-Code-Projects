import { useState } from "react";

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h1>{isVisible && "Message is visible now"}</h1>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
    </div>
  );
};
export default ToggleMessage;
