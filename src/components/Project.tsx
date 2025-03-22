import React from "react";
import taskSystem from '../assets/images/tasksystem.png';
import staticFactory from '../assets/images/staticfactory.png';
import findingPlants from '../assets/images/findingplants.png';
import recyclingApp from '../assets/images/recyclingapp.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Past Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={taskSystem} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Task Management System</h2>
                <p>C</p>
            </div>
            <div className="project">
                <img src={recyclingApp} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Recycling App UI</h2>
                <p>Created a high-fidelity prototype of a recycling app using Figma. Gathered and analysed data to understand users, applied design principles including Nielsen's Principles, to create an intuitive and user-friendly interface. </p>
            </div>
            <div className="project">
                <img src={staticFactory} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Static Factory Game</h2>
                <p>Designed & developed a single-player ASCII rogue-like game in Java, given an existing base engine.</p>
            </div>
            <div className="project">
                <img src={findingPlants} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Finding Plants</h2>
                <p>Used MATLAB's image processing toolbox and processing techniques to processes images of Arabidopsis plants to separate plant material from the background, producing a binary image to provide accurate tools for measuring plant structure and growth in biological sciences.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;