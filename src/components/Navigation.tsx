import React, { useState, useEffect } from 'react';

// Define the props interface - THIS IS IMPORTANT
interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isDark, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? `backdrop-blur-md shadow-lg ${isDark ? 'bg-gray-900/80' : 'bg-white/80'}` 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              ✨ Elsa Tsia
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    isDark 
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700/50' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                  } rounded-lg`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <button
            onClick={toggleTheme}
            className={`relative p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
              isDark 
                ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30' 
                : 'bg-slate-200/50 text-slate-700 hover:bg-slate-300/50'
            }`}
            title={isDark ? 'Switch to Day Mode' : 'Switch to Night Mode'}
          >
            <div className={`transition-all duration-300 ${isDark ? 'rotate-0' : 'rotate-180'}`}>
              {isDark ? '☀️' : '🌙'}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;