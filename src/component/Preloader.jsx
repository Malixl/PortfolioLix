import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <motion.div
      className="bg-white h-screen flex justify-center items-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <div className="p-4 rounded-md">
        <div className="flex justify-center">
          <motion.span
            className="w-4 h-4 my-12 mx-1 bg-black rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [1, 0],
              transition: { duration: 1, repeat: Infinity },
            }}
          />
          <motion.span
            className="w-4 h-4 my-12 mx-1 bg-black rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [1, 0],
              transition: { duration: 1, repeat: Infinity, delay: 0.2 },
            }}
          />
          <motion.span
            className="w-4 h-4 my-12 mx-1 bg-black rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [1, 0],
              transition: { duration: 1, repeat: Infinity, delay: 0.4 },
            }}
          />
        </div>
        <p className="text-center text-xl font-bold font-title text-black">
          Loading...
        </p>
      </div>
    </motion.div>
  );
};

export default Preloader;
