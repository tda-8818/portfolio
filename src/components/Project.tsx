import React from "react";
import taskSystem from '../assets/images/tasksystem.png';
import staticFactory from '../assets/images/staticfactory.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Past Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={taskSystem} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Task Management System</h2>
                <p>Capstone project, working in a team to create a task management desktop application using C#, .NET and SQLite.</p>
            </div>
            <div className="project">
                <img src={staticFactory} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Static Factory</h2>
                <p>Designed, developed a single-player ASCII rogue-like game in Java.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;