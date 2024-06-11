// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LandigPage from "./pages/LandigPage";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import NavigationBar from "./component/NavigationBar";

// function App() {
//   return (
//     <BrowserRouter>
//       <NavigationBar />
//       <Routes>
//         <Route path="/" element={<LandigPage />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandigPage from "./pages/LandigPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NavigationBar from "./component/NavigationBar";
import Preloader from "./component/Preloader";
import { motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <BrowserRouter>
            <NavigationBar />
            <Routes>
              <Route path="/" element={<LandigPage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
        </motion.div>
      )}
    </div>
  );
}

export default App;
