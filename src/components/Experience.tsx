import React from 'react';

interface ExperienceProps {
  isDark: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDark }) => {
  const experiences = [
    {
      title: "Cybersecurity Associate",
      company: "AlphaCloud Pty Ltd",
      location: "Melbourne, Australia",
      period: "Feb 2025 - Present",
      type: "work",
      highlights: [
        "Applied foundational knowledge of security principles, including risk management, access control, and cryptography",
        "Gained practical insight into security operations, including incident response and threat intelligence analysis",
        "Developed understanding of network security architecture, including TCP/IP protocols and VLAN segmentation"
      ]
    },
    {
      title: "IT Intern",
      company: "TK Elevator",
      location: "Sydney, Australia",
      period: "Nov 2023 - Feb 2024",
      type: "work",
      highlights: [
        "Collaborated across all IT support tiers, developing communication skills for various technical audiences",
        "Renovated team's project management tracker, streamlining operations for entire IT department",
        "Successfully completed a critical data migration project from SharePoint to Expedo"
      ]
    },
    {
      title: "Bachelor of Computer Science",
      company: "Monash University",
      location: "Clayton, Australia",
      period: "2023 - 2025",
      type: "education",
      highlights: [
        "Relevant Coursework: Advanced Algorithms & Data Structures, Software Engineering, Databases",
        "Parallel Computing, Computer Vision, Project Management"
      ]
    },
    {
      title: "Bachelor of Computer Science",
      company: "University of Utah",
      location: "Salt Lake City, USA",
      period: "2021 - 2022",
      type: "education",
      highlights: [
        "Relevant Coursework: Algorithms & Data Structures, C# Software Engineering, Java OOP, Networking",
      ]
    }
  ];

  return (
    <section id="experience" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Experience & Education
          </h2>
          <div className={`w-24 h-1 ${isDark ? 'bg-blue-500' : 'bg-blue-500'} mx-auto rounded-full`}></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${
            isDark ? 'bg-gray-700' : 'bg-gray-200'
          } hidden md:block`}></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:space-x-8`}>
                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${
                  exp.type === 'work' 
                    ? (isDark ? 'bg-blue-500' : 'bg-blue-500')
                    : (isDark ? 'bg-cyan-500' : 'bg-indigo-500')
                } rounded-full border-4 ${
                  isDark ? 'border-gray-900' : 'border-white'
                } hidden md:block z-10`}></div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 ${
                    isDark ? 'bg-gray-800' : 'bg-gray-50'
                  }`}>
                    <div className="mb-4">
                      <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {exp.title}
                      </h3>
                      <p className={`text-lg font-semibold ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {exp.company}
                      </p>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {exp.location} • {exp.period}
                      </p>
                    </div>
                    <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className={`inline-block w-2 h-2 ${
                            isDark ? 'bg-blue-500' : 'bg-blue-500'
                          } rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;