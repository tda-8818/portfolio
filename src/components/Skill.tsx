import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faLayerGroup, faWifi } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Skill.scss';

const labelsFirst = [
    "Python",
    "SQL",
    "PostgreSQL",
    "MongoDB"
];

const labelsSecond = [
    "Java",
    "C#",
    "C/C++",
    ".NET",
    "Springboot"
];

const labelsThird = [
    "React",
    "TypeScript",
    "JavaScript",
    "Angular",
    "HTML5",
    "CSS3",
];

function Skill() {
    return (
    <div className="container" id="skill">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faLayerGroup} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>I have built several desktop applications from scratch using .NET. I am proficient in frontend + backend development and have an understanding of the SDLC process.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGamepad} size="3x"/>
                    <h3>Game Development</h3>
                    <p>I have built a diverse array of game applications. I have a strong proficiency in the MVC architecture, Abstract Factory pattern, SOLID principles, and core OOP concepts such as abstraction, encapsulation, inheritance and polymorphism.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faWifi} size="3x"/>
                    <h3>Web Development</h3>
                    <p>Developed web applications using React and Angular. Proficient in Functional Reactive Programming. Also have experience UI/UX design.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Skill;