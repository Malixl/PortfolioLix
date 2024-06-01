import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandigPage from './pages/LandigPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandigPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;