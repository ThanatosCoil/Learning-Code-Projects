import { MouseEvent } from "react";

const EventHandling = () => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget);
    const element = document.getElementById("my-element");
    if (element) {
      element.style.color = "red";
    }
  };

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e.currentTarget);
    const element = document.getElementById("my-element");
    if (element) {
      element.style.color = "blue";
    }
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e.currentTarget);
    const element = document.getElementById("my-element");
    if (element) {
      element.style.color = "green";
    }
  };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h2 id="my-element">Event Handling</h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export default EventHandling;
