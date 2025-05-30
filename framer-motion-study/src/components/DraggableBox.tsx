import { motion, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";

const DraggableBox = () => {
  const [xAxis, setXAxis] = useState(0);
  const [yAxis, setYAxis] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const backgroundColor = useTransform(x, [-100, 100], ["#ff0000", "#00ff00"]);

  return (
    <>
      <motion.div
        drag
        dragConstraints={{
          left: -200,
          right: 200,
          top: -200,
          bottom: 200,
        }}
        onDrag={() => {
          setXAxis(+x.get().toFixed(2));
          setYAxis(+y.get().toFixed(2));
        }}
        onDragTransitionEnd={() => {
          setXAxis(+x.get().toFixed(2));
          setYAxis(+y.get().toFixed(2));
        }}
        style={{ x, y, backgroundColor }}
        className="w-32 h-32 flex items-center justify-center rounded-lg cursor-pointer "
      >
        <span className="text-white">Drag me</span>
      </motion.div>
      <span>{`Current x=${xAxis} y=${yAxis}`}</span>
    </>
  );
};
export default DraggableBox;
