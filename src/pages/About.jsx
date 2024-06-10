import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  logoGithub,
  logoInstagram,
  logoLinkedin,
  logoBehance,
} from "ionicons/icons";

const About = () => {
  return (
    <section className="min-h-screen w-full bg-gray-800 flex justify-center items-center p-4 md:pb-32">
      <AnimatePresence>
        <motion.div
          className="flex flex-col rounded-lg bg-white max-w-md mx-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl md:flex-row mb-20 overflow-hidden"
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.img
            className="lg:h-96 h-44 sm:h-64 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="/malik.jpg"
            alt="Profile"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -200, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
          <div className="flex flex-col p-6 sm:p-8 justify-center">
            <h5 className="mb-2 text-base font-bold text-gray-800 uppercase">
              About Me
            </h5>
            <motion.p
              className="mb-4 lg:text-[14px] text-[10px] text-gray-800"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Hi Fellas! My Name is Abdul Malik Matoha. I'm a Computer Science
              student at Gorontalo State University, specializing in Information
              Systems. Passionate about Frontend Development and UI/UX, I
              believe in the power of strong design for creating memorable
              experiences. I enjoy front-end development, using frameworks like
              Tailwind to build interactive websites. Let's connect and
              collaborate to elevate our creative projects!
            </motion.p>
            <motion.div
              className="flex mb-6"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <a
                href="https://github.com/Malixl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon
                  icon={logoGithub}
                  class="text-gray-800 text-xl mr-4"
                ></ion-icon>
              </a>
              <a
                href="https://www.instagram.com/mlikmth/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon
                  icon={logoInstagram}
                  class="text-gray-800 text-xl mr-4"
                ></ion-icon>
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-malik-matoha-8aa454254/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon
                  icon={logoLinkedin}
                  class="text-gray-800 text-xl mr-4"
                ></ion-icon>
              </a>
              <a
                href="https://www.behance.net/malikmatoha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon
                  icon={logoBehance}
                  class="text-gray-800 text-xl"
                ></ion-icon>
              </a>
            </motion.div>
            <motion.p
              className="text-base font-bold text-gray-800 uppercase mt-6"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Tools & Technologies I Use:
              <div className="flex gap-2 mt-2">
                <motion.img
                  className="hover:opacity-50 transition-opacity duration-300"
                  src="/html.png"
                  width="20"
                  alt=""
                  whileHover={{ scale: 1.2 }}
                />
                <motion.img
                  className="hover:opacity-50 transition-opacity duration-300"
                  src="/css.png"
                  width="20"
                  alt=""
                  whileHover={{ scale: 1.2 }}
                />
                <motion.img
                  className="hover:opacity-50 transition-opacity duration-300"
                  src="/js.png"
                  width="20"
                  alt=""
                  whileHover={{ scale: 1.2 }}
                />
                <motion.img
                  className="hover:opacity-50 transition
                  opacity-50"
                  src="/react.png"
                  width="20"
                  alt=""
                  whileHover={{ scale: 1.2 }}
                />
                <motion.img
                  className="hover:transition-opacity duration-300"
                  src="/tw.png"
                  width="20"
                  alt=""
                  whileHover={{ scale: 1.2 }}
                />
                <motion.img
                  className="hover:transition-opacity duration-300"
                  src="/ai.png"
                  width="20"
                  alt=""
                  whileHover={{ scale: 1.2 }}
                />
                <motion.img
                  className="hover:transition-opacity duration-300"
                  src="/ps.png"
                  width="20"
                  alt=""
                  whileHover={{ scale: 1.2 }}
                />
                <motion.img
                  className="hover:transition-opacity duration-300"
                  src="/fg.png"
                  width="20"
                  alt=""
                  whileHover={{ scale: 1.2 }}
                />
                <motion.img
                  className="hover:transition-opacity duration-300"
                  src="/framer.svg"
                  width="20"
                  alt=""
                  whileHover={{ scale: 1.2 }}
                />
              </div>
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default About;
