import React from "react";
import Card from "../component/Card";
import projectsData from "../data/projectsData";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  return (
    <section className="bg-gray-800 min-h-screen flex justify-center items-center flex-col">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }} // Initial state for fade-in effect
          animate={{ opacity: 1 }} // Animate to full opacity
          transition={{ duration: 3 }} // Duration of the fade-in effect
        >
          <p className="text-white text-4xl font-bold text-center mt-10 mb-3 uppercase">
            Projects
          </p>
          <div className="flex flex-wrap justify-center mb-28 lg:mb-36 lg:mx-72">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }} // Initial state for fade-in and translate effect
                animate={{ opacity: 1, y: 0 }} // Animate to full opacity and move to original position
                transition={{ duration: 0.7, delay: index * 0.1 }} // Duration and staggered delay for each card
                whileHover={{ scale: 1.05 }} // Scale up slightly on hover
                className="m-4"
              >
                <Card
                  projectImage={project.image}
                  projectName={project.name}
                  projectDetails={project.details}
                  figmaUrl={project.figmaUrl}
                  githubUrl={project.githubUrl}
                  projectUrl={project.projectUrl}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Projects;
