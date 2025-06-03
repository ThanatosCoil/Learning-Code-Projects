import { motion } from "motion/react";

const PulsingButton = () => {
  return (
    <motion.button
      className="px-4 py-2 text-white bg-blue-500 rounded outline-none"
      animate={{
        scale: [
          1, 1.1, 1,
        ] /* Определяем точки состояния, начало и конец это соответвенно start и end */,
        backgroundColor: ["#3b82f6", "#60a5fa", "#3b82f6"],
      }}
      transition={{ duration: 0.8, ease: "easeInOut", repeat: Infinity }}
    >
      Click me
    </motion.button>
  );
};
export default PulsingButton;
