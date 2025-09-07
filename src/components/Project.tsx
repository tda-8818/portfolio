import React from "react";
import taskSystem from '../assets/images/tasksystem.png';
import staticFactory from '../assets/images/staticfactory.png';
import findingPlants from '../assets/images/findingplants.png';
import recyclingApp from '../assets/images/recyclingapp.png';
import LaunchIcon from '@mui/icons-material/Launch';
import '../assets/styles/Project.scss';
import Chip from '@mui/material/Chip';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">

            <div className="project">
                <img src={taskSystem} className="zoom" alt="UniFlow Task Management System" width="100%"/>
                <div className="project-content"> {/* Wrap text for better styling */}
                    <h2>UniFlow - Task Management System</h2>
                    <p>A full-stack MERN application designed to streamline university group project coordination. I led development as project manager and full-stack developer. Engineered RESTful APIs with Node.js & Express and implemented JWT authentication. Designed the React frontend with state management for tasks, calendars, and Gantt charts. Configured CI/CD pipelines with GitHub Actions and deployed on AWS EBS and Netlify.</p>
                    <div className="project-tech">
                        <Chip size="small" label="MERN" variant="outlined" /> <Chip size="small" label="AWS" variant="outlined" /> <Chip size="small" label="Docker" variant="outlined" /> <Chip size="small" label="JWT" variant="outlined" />
                    </div>
                    <div className="project-links">
                        {/* Replace # with your actual links */}
                        <a href="https://uniflow-frontend.onrender.com/" className="project-link"><LaunchIcon fontSize="small" /> Live Demo</a>
                    </div>
                </div>
            </div>

            <div className="project">
                <img src={recyclingApp} className="zoom" alt="Recycling app Figma prototype" width="100%"/>
                <div className="project-content">
                    <h2>Recycling App UI/UX Design</h2>
                    <p>A high-fidelity prototype designed in Figma to encourage user recycling through an intuitive interface. Conducted user research and applied Nielsen’s Heuristics for usability. Created interactive prototypes and performed heuristic evaluations. Focused on user-centric design principles to enhance engagement.</p>
                    <div className="project-tech">
                        <Chip size="small" label="Figma" variant="outlined" /> <Chip size="small" label="UI/UX" variant="outlined" /> <Chip size="small" label="Prototyping" variant="outlined" />
                    </div>
                </div>
            </div>

            <div className="project">
                <img src={staticFactory} className="zoom" alt="Static Factory Game ASCII interface" width="100%"/>
                <div className="project-content">
                    <h2>ASCII Rogue-like Game</h2>
                    <p>A Java-based terminal game developed using Spring Boot and the Abstract Factory design pattern. Implemented game mechanics, enemy AI, and level generation. Used GitLab for version control and collaborative development. Applied core OOP principles and design patterns for a modular codebase.</p>
                    <div className="project-tech">
                        <Chip size="small" label="Java" variant="outlined" /> <Chip size="small" label="Spring Boot" variant="outlined" /> <Chip size="small" label="OOP" variant="outlined" />
                    </div>
                </div>
            </div>

            <div className="project">
                <img src={findingPlants} className="zoom" alt="MATLAB image processing output" width="100%"/>
                <div className="project-content">
                    <h2>Plant Image Processing (MATLAB)</h2>
                    <p>An application of computer vision techniques to segment and analyse plant material from images for biological sciences. Processed images using filtering, thresholding, and morphological operations. Output binary masks to accurately measure plant growth and structure.</p>
                    <div className="project-tech">
                        <Chip size="small" label="MATLAB" variant="outlined" /> <Chip size="small" label="Image Processing" variant="outlined" /> <Chip size="small" label="Computer Vision" variant="outlined" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;