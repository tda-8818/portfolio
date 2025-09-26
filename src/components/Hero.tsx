import React, { useState, useEffect } from 'react';
import profilePic from '../assets/images/profilepic.png';

// Props interface
interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['Full-Stack Developer', 'Tech Consultant', 'Problem Solver', 'Code Enthusiast'];
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (currentIndex < texts[0].length) {
      timeout = setTimeout(() => {
        setCurrentText(texts[0].substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
    }
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-800' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 ${
          isDark ? 'bg-blue-500' : 'bg-blue-400'
        } blur-3xl animate-pulse`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 ${
          isDark ? 'bg-cyan-500' : 'bg-indigo-400'
        } blur-3xl animate-pulse delay-1000`}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="relative inline-block">
            <div className={`w-32 h-32 rounded-full border-4 ${
              isDark ? 'border-blue-400' : 'border-blue-500'
            } overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300`}>
              <img 
                src={profilePic}
                alt="Elsa Tsia" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`absolute -inset-1 rounded-full ${
              isDark 
                ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
                : 'bg-gradient-to-r from-blue-500 to-indigo-500'
            } -z-10 blur opacity-70 animate-pulse`}></div>
          </div>
          
          {/* Main Text */}
          <div className="space-y-4">
            <h1 className={`text-4xl md:text-6xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            } animate-slide-up`}>
              Hi, I'm{' '}
              <span className={`bg-gradient-to-r ${
                isDark 
                  ? 'from-blue-400 to-cyan-400' 
                  : 'from-blue-600 to-indigo-600'
              } bg-clip-text text-transparent`}>
                Elsa Tsia
              </span>
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <p className={`text-xl md:text-2xl ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {currentText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            
            <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } animate-slide-up delay-300`}>
              I build full-stack MERN applications and enjoy innovating and making life easier. 
              Let's collaborate on something amazing together! (ﾐⓛᆽⓛﾐ)✧
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-500">
            <button 
              onClick={() => scrollToSection('projects')}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600' 
                  : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600'
              }`}
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 border-2 ${
                isDark 
                  ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white' 
                  : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
              }`}
            >
              Get In Touch
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-slide-up delay-700">
            <a href="https://github.com/tda-8818" className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
              isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-50 text-gray-700 shadow-lg'
            }`}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/elsa-tsia/" className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
              isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-50 text-gray-700 shadow-lg'
            }`}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;