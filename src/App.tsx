import React, {useState, useEffect} from "react";
// 1. Import BrowserRouter, Routes, and Route
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Main,
  Timeline,
  Skill,
  Project,
  Contact,
  Hobby,
  Navigation,
  Footer,
  Photography, // 2. Import your new gallery components
  Cooking
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    // 3. Wrap everything in the Router component
    <Router> 
      <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
          <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
          {/* 4. Use the Routes component to define your pages */}
          <Routes>
            {/* 5. Main Portfolio Route (path="/") */}
            <Route path="/" element={
              <FadeIn transitionDuration={700}>
                  <Main/>
                  <Skill/>
                  <Timeline/>
                  <Project/>
                  <Hobby/>
                  <Contact/>
              </FadeIn>
            } />
            {/* 6. Gallery Routes */}
            <Route path="/photography" element={<Photography />} />
            <Route path="/cooking" element={<Cooking />} />
          </Routes>
          <Footer />
      </div>
    </Router>
    );
}

export default App;