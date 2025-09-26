import React from 'react';

interface SkillsProps {
  isDark: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const skillCategories = [
    {
      icon: "⚙️",
      title: "Backend Development",
      description: "Robust server-side logic, RESTful APIs, and scalable architectures",
      skills: ["Python", "Java", "C#", "Node.js", "Express.js", ".NET", "Spring Boot", "Swift"]
    },
    {
      icon: "🎨",
      title: "Frontend Development",
      description: "Dynamic, responsive interfaces with modern frameworks",
      skills: ["JavaScript", "TypeScript", "React", "Angular", "HTML5", "CSS3", "Tailwind", "HeadlessUI"]
    },
    {
      icon: "🛠️",
      title: "Tools & Technologies",
      description: "Development tools, databases, and cloud platforms",
      skills: ["Git", "Docker", "AWS EB", "PostgreSQL", "MongoDB", "Figma", "Jira"]
    }
  ];

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Skills & Technologies
          </h2>
          <div className={`w-24 h-1 ${isDark ? 'bg-blue-500' : 'bg-blue-500'} mx-auto rounded-full`}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`p-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              isDark ? 'bg-gray-900' : 'bg-white'
            } group`}>
              <div className="text-center mb-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {category.title}
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {category.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 hover:scale-105 ${
                    isDark 
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                      : 'bg-blue-500/20 text-blue-600 border border-blue-500/30'
                  }`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;