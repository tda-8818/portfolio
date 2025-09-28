import React from 'react';
import uniFlow from '../assets/images/projects/tasksystem.png';
import recyclingApp from '../assets/images/projects/recyclingapp.png';
import staticFactory from '../assets/images/projects/staticfactory.png';
import plantImageProcessing from '../assets/images/projects/findingplants.png';
import snakeGame from '../assets/images/projects/snakegame.png';

interface ProjectsProps {
  isDark: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const projects = [
    {
      title: "UniFlow",
      description: "Project management system for group assignments at university with JWT authentication and CI/CD pipelines.",
      tech: ["MERN", "Docker", "JWT", "GitHub Actions"],
      image: uniFlow,
      liveUrl: "https://uniflow-frontend.onrender.com/",
      githubUrl: "#"
    },
    {
      title: "Recycling App UI/UX",
      description: "High-fidelity Figma prototype applying Nielsen's Heuristics for enhanced user engagement.",
      tech: ["Figma", "UI/UX", "Prototyping"],
      image: recyclingApp,
      
    },
    {
      title: "ASCII Rogue-like Game",
      description: "Java terminal game using Spring Boot and Abstract Factory pattern with collaborative development.",
      tech: ["Java", "Spring Boot", "OOP", "GitLab"],
      image: staticFactory,
    },
    {
      title: "Plant Image Processing",
      description: "MATLAB application using image processing techniques to segment and analyse plant material from images.",
      tech: ["MATLAB", "Image Processing"],
      image: plantImageProcessing,
    },
    {
      title: "Snake Game",
      description: "A multiplayer Snake desktop app built with MAUI featuring real-time gameplay, chat functionality, and networked connectivity. Players can host servers via IP address and compete while communicating through an integrated chat system. Built using MVC architecture with TCP/IP networking and SQL database integration.",
      tech: ["C#", ".NET", "Networking"],
      image: snakeGame,
    }
  ];

  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <div className={`w-24 h-1 ${isDark ? 'bg-blue-500' : 'bg-blue-500'} mx-auto rounded-full`}></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              isDark ? 'bg-gray-800' : 'bg-white'
            } group`}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href={project.liveUrl || project.image} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a href={project.githubUrl} className="p-2 bg-white rounded-full hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className={`px-2 py-1 text-xs rounded-full ${
                      isDark 
                        ? 'bg-blue-500/20 text-blue-400' 
                        : 'bg-blue-500/20 text-blue-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;