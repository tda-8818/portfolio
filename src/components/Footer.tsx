import React from 'react';

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  return (
    <footer className={`py-8 ${isDark ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Links */}
          <div className="flex space-x-6">
            {/* GitHub */}
            <a href="https://github.com/tda-8818" className={`p-3 rounded-full transition-all duration-200 hover:scale-110 group ${
              isDark ? 'bg-gray-800/70 hover:bg-gray-700/70 backdrop-blur-sm' : 'bg-white/70 hover:bg-white/90 shadow-lg backdrop-blur-sm'
            }`}>
              <svg className={`w-6 h-6 transition-colors duration-200 ${
                isDark ? 'text-white group-hover:text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
              }`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/elsa-tsia/" className={`p-3 rounded-full transition-all duration-200 hover:scale-110 group hover:bg-[#0077B5] ${
              isDark ? 'bg-gray-800/70 hover:bg-[#0077B5] backdrop-blur-sm' : 'bg-white/70 hover:bg-[#0077B5] shadow-lg backdrop-blur-sm'
            }`}>
              <svg className={`w-6 h-6 transition-colors duration-200 group-hover:text-white ${
                isDark ? 'text-white' : 'text-gray-700'
              }`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            {/* Fiverr */}
            <a href="https://www.fiverr.com/elspewpew" className={`p-3 rounded-full transition-all duration-200 hover:scale-110 group hover:bg-[#1DBF73] ${isDark ? 'bg-gray-800/70 hover:bg-[#1DBF73] backdrop-blur-sm' : 'bg-white/70 hover:bg-[#1DBF73] shadow-lg backdrop-blur-sm'
              }`}>
              <svg className={`w-6 h-6 transition-colors duration-200 group-hover:text-white ${isDark ? 'text-white' : 'text-gray-700'
                }`} fill="currentColor" viewBox="-2.5 -2 24 24" style={{ transform: 'translateX(1px)' }}>
                <path d='M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z' />
                <circle cx='14.375' cy='1.875' r='1.875' />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 Elsa Tsia. Designed & built with ❤️ using React & Tailwind CSS.
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;