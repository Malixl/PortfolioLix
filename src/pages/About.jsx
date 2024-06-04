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
          className="flex flex-col rounded-lg bg-white max-w-md mx-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl md:flex-row"
          animate={{ scale: 1.1, opacity: 99 }}
          initial={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            className="lg:h-96 h-44 sm:h-64 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="/malik.jpg"
            alt="Profile"
          />
          <div className="flex flex-col p-6 sm:p-8 justify-center">
            <h5 className="mb-2 text-base font-bold text-gray-800 uppercase">
              About Me
            </h5>
            <p className="mb-4 text-sm text-gray-800">
              Hi Fellas! My Name is Abdul Malik Matoha. I'm a Computer Science
              student at Gorontalo State University, specializing in Information
              Systems. Passionate about graphic design and UI/UX, I believe in
              the power of strong design for creating memorable experiences. I
              enjoy front-end development, using frameworks like Tailwind to
              build interactive websites. Let's connect and collaborate to
              elevate our creative projects!
            </p>
            <div className="flex">
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
            </div>
            <p className="text-base font-bold text-gray-800 uppercase mt-6">
              Tools & Technologies I Use:
              <div className="flex gap-3 mt-2">
                <img
                  className="hover:mix-blend-normal mix-blend-luminosity"
                  src="/html.png"
                  width="20"
                  alt=""
                />
                <img
                  className="hover:mix-blend-normal mix-blend-luminosity"
                  src="/css.png"
                  width="20"
                  alt=""
                />
                <img
                  className="hover:mix-blend-normal mix-blend-luminosity"
                  src="/js.png"
                  width="20"
                  alt=""
                />
                <img
                  className="hover:mix-blend-normal mix-blend-luminosity"
                  src="/react.png"
                  width="20"
                  alt=""
                />
                <img
                  className="hover:mix-blend-normal mix-blend-luminosity"
                  src="/tw.png"
                  width="20"
                  alt=""
                />
                <img
                  className="hover:mix-blend-normal mix-blend-luminosity"
                  src="/ai.png"
                  width="20"
                  alt=""
                />
                <img
                  className="hover:mix-blend-normal mix-blend-luminosity"
                  src="/ps.png"
                  width="20"
                  alt=""
                />
                <img
                  className="hover:mix-blend-normal mix-blend-luminosity"
                  src="/fg.png"
                  width="20"
                  alt=""
                />
                <img
                  className="hover:mix-blend-normal mix-blend-luminosity"
                  src="/framer.svg"
                  width="20"
                  alt=""
                />
              </div>
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default About;
