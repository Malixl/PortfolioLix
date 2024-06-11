import React, { useState } from "react";
import Card from "../component/Card";
import projectsData from "../data/projectsData";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedBadge, setSelectedBadge] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const allBadges = projectsData.reduce((badges, project) => {
    project.badges.forEach((badge) => {
      if (!badges.includes(badge)) {
        badges.push(badge);
      }
    });
    return badges;
  }, []);

  const handleBadgeSelect = (badge) => {
    setSelectedBadge(badge);
    setDropdownOpen(false);
  };

  const filteredProjects = selectedBadge
    ? projectsData.filter((project) => project.badges.includes(selectedBadge))
    : projectsData;

  return (
    <section className="bg-gray-800 min-h-screen flex justify-center items-center flex-col">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative mb-8"
        >
          <h1 className="text-4xl font-bold text-white text-center mb-8 uppercase">
            Projects
          </h1>
          <div className="flex justify-center">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-white text-gray-800 rounded-md py-1 px-2 focus:outline-none flex items-center"
            >
              <span className="mr-2">Select Project:</span>
              <span className="font-medium">{selectedBadge || "All"}</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ rotate: dropdownOpen ? 180 : 0 }}
              >
                <motion.path d="M6 9l6 6 6-6" />
              </motion.svg>
            </button>
            {dropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bg-white text-gray-800 rounded-md py-1 px-2 mt-10 z-10"
              >
                <li
                  onClick={() => handleBadgeSelect(null)}
                  className="cursor-pointer hover:bg-gray-200 py-1 px-2"
                >
                  All
                </li>
                {allBadges.map((badge) => (
                  <li
                    key={badge}
                    onClick={() => handleBadgeSelect(badge)}
                    className="cursor-pointer hover:bg-gray-200 py-1 px-2"
                  >
                    {badge}
                  </li>
                ))}
              </motion.ul>
            )}
          </div>
        </motion.div>
      </div>
      <div className="max-w-4xl mx-auto lg:mb-32 mb-28 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                exit={{ opacity: 0, y: -30 }}
              >
                <Card
                  projectImage={project.image}
                  projectName={project.name}
                  projectDetails={project.details}
                  figmaUrl={project.figmaUrl}
                  githubUrl={project.githubUrl}
                  projectUrl={project.projectUrl}
                  badges={project.badges}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
