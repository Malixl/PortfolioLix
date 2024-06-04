import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function LandingPage() {
  return (
    <section className="bg-gray-800 h-screen w-full flex flex-col lg:gap-32 gap-24 justify-center items-center">
      <AnimatePresence>
        <motion.div
          className="lg:text-right text-center gap-2 flex flex-col"
          animate={{ y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-white font-title lg:text-9xl text-6xl font-bold uppercase">
            Hi, I'm Lix
          </h1>
          <p className="text-white text-sm font-medium">
            Front-end Developer & UI/UX Designer
          </p>
        </motion.div>
      </AnimatePresence>
      <motion.div
        className="text-white text-center text-[10px]"
        animate={{ y: -30 }}
        transition={{ duration: 0.7 }}
      >
        this website built with:
        <div className="flex gap-3 mt-2 justify-center">
          <img src="/react.png" width="20" alt="" />
          <img src="/tw.png" width="20" alt="" />
          <img src="/vite.svg" width="20" alt="" />
          <img
            src="/framer.svg"
            className="bg-white p-1 rounded-full"
            width="20"
            alt=""
          />
        </div>
      </motion.div>
    </section>
  );
}

export default LandingPage;
