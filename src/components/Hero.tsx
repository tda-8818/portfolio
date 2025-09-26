import React, { useState, useEffect } from 'react';

// Import your profile image
import profileImage from '../assets/images/profilepic.png';

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

  // Generate realistic clouds using CSS shapes
  const generateRealisticClouds = () => {
    return Array.from({ length: 6 }, (_, i) => (
      <div
        key={i}
        className="absolute opacity-70"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 60 + 10}%`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${20 + Math.random() * 15}s`
        }}
      >
        <div
          className="bg-white rounded-full animate-cloud-float shadow-lg"
          style={{
            width: `${80 + Math.random() * 120}px`,
            height: `${40 + Math.random() * 60}px`,
            position: 'relative',
            filter: 'blur(1px)'
          }}
        >
          {/* Cloud bubbles for realistic effect */}
          <div
            className="absolute bg-white rounded-full"
            style={{
              width: `${30 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 30}px`,
              top: '-15px',
              left: `${20 + Math.random() * 30}px`,
              filter: 'blur(0.5px)'
            }}
          />
          <div
            className="absolute bg-white rounded-full"
            style={{
              width: `${25 + Math.random() * 35}px`,
              height: `${15 + Math.random() * 25}px`,
              top: '-10px',
              right: `${15 + Math.random() * 25}px`,
              filter: 'blur(0.5px)'
            }}
          />
        </div>
      </div>
    ));
  };

  return (
    <section id="about" className={`min-h-screen flex items-center justify-center relative overflow-hidden theme-transition ${
      isDark 
        ? 'bg-gradient-to-b from-gray-900 via-slate-900 to-black' 
        : 'bg-gradient-to-b from-sky-100 via-blue-50 to-indigo-100'
    }`}>
      
      {/* Dark Theme - Realistic Night Sky */}
      {isDark && (
        <>
          {/* Realistic star field background */}
          <div className="star-field animate-stars-rise"></div>
          
          {/* Shooting stars - subtle and realistic */}
          <div className="absolute top-20 left-1/4 w-1 h-1 bg-white rounded-full animate-shooting-star opacity-80" 
               style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
          <div className="absolute top-32 right-1/3 w-1 h-1 bg-blue-200 rounded-full animate-shooting-star opacity-60" 
               style={{ animationDelay: '5s', animationDuration: '3s' }}></div>
        </>
      )}
      
      {/* Light Theme - Realistic Surreal Clouds */}
      {!isDark && (
        <>
          {/* Realistic floating clouds */}
          <div className="absolute inset-0">
            {generateRealisticClouds()}
          </div>
          
          {/* Subtle light rays */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-yellow-200/30 via-transparent to-transparent transform rotate-12"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-yellow-100/20 via-transparent to-transparent transform -rotate-6"></div>
        </>
      )}
      
      {/* Subtle background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          isDark ? 'bg-blue-900/20' : 'bg-yellow-100/40'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${
          isDark ? 'bg-slate-800/30' : 'bg-blue-100/30'
        }`}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="relative inline-block">
            <div className={`w-32 h-32 rounded-full border-4 overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 ${
              isDark ? 'border-blue-400 shadow-blue-500/50' : 'border-indigo-400 shadow-indigo-500/50'
            }`}>
              <img 
                src={profileImage} 
                alt="Elsa Tsia" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`absolute -inset-1 rounded-full blur opacity-70 animate-pulse -z-10 ${
              isDark 
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                : 'bg-gradient-to-r from-indigo-400 to-blue-500'
            }`}></div>
          </div>
          
          {/* Main Text */}
          <div className="space-y-4">
            <h1 className={`text-4xl md:text-6xl font-bold animate-slide-up ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Hi, I'm{' '}
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDark 
                  ? 'from-blue-400 to-cyan-400' 
                  : 'from-indigo-600 to-blue-600'
              }`}>
                Elsa Tsia
              </span>
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <p className={`text-xl md:text-2xl ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {currentText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            
            <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-slide-up delay-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              I build full-stack applications and enjoy solving complex problems with elegant code. 
              Let's create something amazing together.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-500">
            <button 
              onClick={() => scrollToSection('projects')}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-blue-500/25' 
                  : 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:from-indigo-600 hover:to-blue-600 shadow-indigo-500/25'
              }`}
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 border-2 ${
                isDark 
                  ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white' 
                  : 'border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white'
              }`}
            >
              Get In Touch
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-slide-up delay-700">
            <a href="https://github.com/tda-8818" className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
              isDark ? 'bg-gray-800/70 hover:bg-gray-700/70 text-white backdrop-blur-sm' : 'bg-white/70 hover:bg-white/90 text-gray-700 shadow-lg backdrop-blur-sm'
            }`}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/elsa-tsia/" className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
              isDark ? 'bg-gray-800/70 hover:bg-gray-700/70 text-white backdrop-blur-sm' : 'bg-white/70 hover:bg-white/90 text-gray-700 shadow-lg backdrop-blur-sm'
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