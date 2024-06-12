import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => {
        if (currentIndex < text.length) {
          return prev + text[currentIndex];
        }
        clearInterval(intervalId);
        return prev;
      });
      currentIndex++;
    }, 40);

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <motion.p
      className="text-white text-sm font-medium"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {displayedText}
    </motion.p>
  );
};

const RotatingIcon = ({ src, alt }) => (
  <motion.img
    src={src}
    width="20"
    alt={alt}
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
  />
);

const LandingPage = () => {
  const text = "HI, I'M LIX";

  return (
    <section className="bg-gray-800 h-svh w-full flex flex-col lg:gap-32 gap-24 justify-center items-center">
      <AnimatePresence>
        <motion.div
          className="lg:text-right text-center gap-2 flex flex-col"
          animate={{ y: 30, opacity: 1 }}
          initial={{ y: -30, opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="text-animation font-rowdies text-center text-white font-title lg:text-9xl text-6xl font-bold leading-tight tracking-tighter">
            {text.split(" ").map((word, i) => (
              <React.Fragment key={i}>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 2,
                    delay: i / 10,
                  }}
                >
                  {word}
                </motion.span>
                {i < text.split(" ").length - 1 && <span>&nbsp;</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="flex flex-col items-end gap-2">
            <TypingText text="Front-end Developer, Graphic & UI Designer" />
            <button
              onClick={() => {
                // Replace URL with your resume URL
                window.location.href =
                  "https://drive.google.com/file/d/1zTUfAF4SVXL9ZrpF2kS1bjFRXjymvyws/view?usp=sharing";
              }}
              className="bg-white hover:bg-transparent hover:border hover:border-zinc-500 text-black hover:text-white font-bold py-1 px-4 rounded"
            >
              Resume
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
      <motion.div
        className="text-white text-center text-sm"
        animate={{ y: -30, opacity: 1 }}
        initial={{ y: 30, opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        This website built with:
        <div className="flex gap-4 mt-2 justify-center">
          <RotatingIcon src="/react.png" alt="React" />
          <motion.img
            src="/tw.png"
            width="20"
            alt=""
            whileHover={{ rotate: 360 }}
            transition={{ duration: 2, ease: "linear" }}
          />
          <motion.img
            src="/vite.svg"
            width="20"
            alt=""
            whileHover={{ rotate: 360 }}
            transition={{ duration: 2, ease: "linear" }}
          />
          <motion.img
            src="/framer.svg"
            className="bg-white p-1 rounded-full"
            width="20"
            alt=""
            whileHover={{ rotate: 360 }}
            transition={{ duration: 2, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default LandingPage;
