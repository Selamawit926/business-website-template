import React from 'react'
import About from "./About";
import Home from "./Home";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Services from './Services';
import Technology from './Technology';


const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  </Router>
);

export default App