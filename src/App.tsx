import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all components
import {
  Navigation,
  Hero,
  Experience,
  Skills,
  Projects,
  Contact,
  Footer
} from "./components";

function App() {
  // Theme state - THIS IS WHERE isDark COMES FROM
  const [isDark, setIsDark] = useState<boolean>(true);

  // Toggle function - THIS IS WHAT GETS PASSED TO COMPONENTS
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Save theme to localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Scroll to top on app load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <Router>
      <div className={`transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
        <Routes>
          {/* Main Portfolio Page */}
          <Route path="/" element={
            <>
              <Navigation isDark={isDark} toggleTheme={toggleTheme} />
              <Hero isDark={isDark} />
              <Experience isDark={isDark} />
              <Skills isDark={isDark} />
              <Projects isDark={isDark} />
              <Contact isDark={isDark} /> 
              <Footer isDark={isDark} />
            </>
          } />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;