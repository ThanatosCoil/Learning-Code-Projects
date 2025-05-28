import { useState } from "react";

const MouseTracker = ({ render }: any) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} className="h-screen">
      {render(position)}
    </div>
  );
};
export default MouseTracker;
