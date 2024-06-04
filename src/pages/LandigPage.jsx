import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function LandingPage() {
  return (
    <section className="bg-gray-800 h-screen w-full flex flex-col lg:gap-32 gap-24 justify-center items-center">
      <AnimatePresence>
        <motion.div
          className="lg:text-right text-center gap-2 flex flex-col"
          animate={{ y: 30, opacity: 1 }}
          initial={{ y: -30, opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-white font-title lg:text-9xl text-6xl font-bold uppercase">
            Hi, I'm Lix
          </h1>
          <div className="flex flex-col items-end gap-2">
            <p className="text-white text-sm font-medium">
              Front-end Developer & UI/UX Designer
            </p>
            <button
              onClick={() => {
                // Replace URL with your resume URL
                window.location.href =
                  "https://drive.google.com/drive/folders/1zwGtX1NV6VZkbFE7h7VHY-7hdq8ct2pd?usp=sharing";
              }}
              className="bg-white hover:bg-zinc-500 text-black hover:text-white font-bold py-1 px-8 rounded "
            >
              cv
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
      <motion.div
        className="text-white text-center text-[10px]"
        animate={{ y: -30, opacity: 1 }}
        initial={{ y: 30, opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        this website built with:
        <div className="flex gap-3 mt-2 justify-center">
          <motion.img
            src="/react.png"
            width="20"
            alt=""
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.img
            src="/tw.png"
            width="20"
            alt=""
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.img
            src="/vite.svg"
            width="20"
            alt=""
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.img
            src="/framer.svg"
            className="bg-white p-1 rounded-full"
            width="20"
            alt=""
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default LandingPage;
