import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({
  projectImage,
  projectName,
  projectDetails,
  projectUrl,
  figmaUrl,
  githubUrl,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white rounded-lg p-3 md:p-4 w-full max-w-xs mx-2 my-2">
      {projectImage && (
        <LazyLoadImage
          src={projectImage}
          alt={projectName}
          className="w-full h-auto rounded-md mb-2"
          effect="blur"
        />
      )}
      {projectName && <h2 className="text-lg font-bold mt-2">{projectName}</h2>}
      {projectDetails && (
        <p className="text-[13px] text-gray-700 mb-2 md:mb-3">
          {projectDetails}
        </p>
      )}
      <div className="flex lg:gap-2 gap-5 md:flex-row">
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-700 text-white px-3 py-1 rounded-md hover:bg-zinc-900 mb-2 md:mb-0 md:mr-2 text-sm"
          >
            Visit
          </a>
        )}
        {(figmaUrl || githubUrl) && (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleDropdownToggle}
              className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 text-sm"
            >
              Details
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg text-sm z-10"
                >
                  {figmaUrl && (
                    <a
                      href={figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-1 text-gray-700 hover:bg-gray-100"
                    >
                      Figma
                    </a>
                  )}
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-1 text-gray-700 hover:bg-gray-100"
                    >
                      GitHub
                    </a>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
