import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";

import './tailwind.css';

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Home/>
      <About />
      
      <Skills />
      
    
      <Contact />
    </main>
  );
}