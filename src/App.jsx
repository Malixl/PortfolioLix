import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandigPage from "./pages/LandigPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NavigationBar from "./component/NavigationBar";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandigPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import LandigPage from "./pages/LandigPage";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import NavigationBar from "./component/NavigationBar";
// import MoreProjects from "./pages/MoreProjetcs";

// // Higher-order component to conditionally render NavigationBar
// const withNavbar = (Component) => {
//   return (props) => {
//     const location = useLocation();
//     const showNavbar = !location.pathname.includes("/moreprojects");

//     return (
//       <>
//         {showNavbar && <NavigationBar />}
//         <Component {...props} />
//       </>
//     );
//   };
// };

// function App() {
//   const LandigPageWithNavbar = withNavbar(LandigPage);
//   const ProjectsWithNavbar = withNavbar(Projects);
//   const ContactWithNavbar = withNavbar(Contact);
//   const AboutWithNavbar = withNavbar(About);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LandigPageWithNavbar />} />
//         <Route path="/projects" element={<ProjectsWithNavbar />} />
//         <Route path="/moreprojects" element={<MoreProjects />} />
//         <Route path="/contact" element={<ContactWithNavbar />} />
//         <Route path="/about" element={<AboutWithNavbar />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
