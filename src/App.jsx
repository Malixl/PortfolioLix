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
