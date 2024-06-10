import React, { useState } from "react";
import Card from "../component/Card";
import projectsData from "../data/projectsData";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedBadge, setSelectedBadge] = useState(null);

  const allBadges = projectsData.reduce((badges, project) => {
    project.badges.forEach((badge) => {
      if (!badges.includes(badge)) {
        badges.push(badge);
      }
    });
    return badges;
  }, []);

  const filteredProjects = selectedBadge
    ? projectsData.filter((project) => project.badges.includes(selectedBadge))
    : projectsData;

  return (
    <section className="bg-gray-800 min-h-screen flex justify-center items-center flex-col">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto px-4 py-8"
      >
        <div className="relative mb-8">
          <h1 className="text-4xl font-bold text-white text-center mb-8 uppercase">
            My Projects
          </h1>
          <div className="flex justify-center items-center flex-col gap-2">
            <label htmlFor="badgeFilter" className="text-white mr-2">
              Filter by Badge:
            </label>
            <motion.select
              id="badgeFilter"
              className="bg-white text-gray-800 rounded-md py-1 px-2 focus:outline-none"
              value={selectedBadge || ""}
              onChange={(e) => setSelectedBadge(e.target.value || null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <option value="">All</option>
              {allBadges.map((badge) => (
                <option key={badge} value={badge}>
                  {badge}
                </option>
              ))}
            </motion.select>
          </div>
        </div>
      </motion.div>
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
