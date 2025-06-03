import { motion } from "motion/react";

const BouncingLoader = () => {
  return (
    <div className="flex justify-center items-center space-x-2 my-5">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="w-4 h-4 bg-teal-500 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: index * 0.2,
          }}
        />
      ))}
    </div>
  );
};
export default BouncingLoader;
