import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faCode, faPalette, faBrain } from '@fortawesome/free-solid-svg-icons'; // Changed icons
import Chip from '@mui/material/Chip';
import '../assets/styles/Skill.scss';

const backendLabels = [ // Renamed and regrouped
    "Python", "Java", "C#", "Node.js", ".NET", "Spring Boot"
];

const frontendLabels = [
    "JavaScript (ES6+)", "TypeScript", "React", "Angular", "HTML5", "CSS3", "Tailwind CSS"
];

const databaseToolsLabels = [ // New category
    "SQL", "PostgreSQL", "MySQL", "MongoDB", "Git", "Docker", "AWS EB", "Jira", "Figma"
];

function Skill() {
    return (
    <div className="container" id="skill">
        <div className="skills-container">
            <h1>Skills & Technologies</h1> {/* Updated title */}
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>Backend Development</h3>
                    <p>I develop robust server-side logic, RESTful APIs, and database architectures using object-oriented and modular programming principles. Experienced in building scalable applications with .NET, JavaScript and Spring Boot frameworks.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Technologies:</span>
                        {backendLabels.map((label, index) => (
                            <Chip key={index} className='chip' label={label} variant="outlined" />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Frontend & Web Development</h3>
                    <p>I create dynamic, responsive, and user-friendly interfaces. I am proficient in modern JavaScript frameworks and functional reactive programming, ensuring a seamless user experience.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Technologies:</span>
                        {frontendLabels.map((label, index) => (
                            <Chip key={index} className='chip' label={label} variant="outlined" />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPalette} size="3x"/> {/* Changed icon */}
                    <h3>Databases & Tools</h3> {/* Changed title */}
                    <p>I am proficient in both SQL and NoSQL databases for efficient data management. I use modern development tools and practices, including version control with Git, containerisation with Docker, and cloud services on AWS.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Technologies:</span>
                        {databaseToolsLabels.map((label, index) => (
                            <Chip key={index} className='chip' label={label} variant="outlined" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Skill;