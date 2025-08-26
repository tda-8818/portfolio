import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import '../assets/styles/Main.scss';
import profilePic from '../assets/images/profilepic.png';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePic} alt="Professional headshot of Elsa Tsi" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/tda-8818" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/elsa-tsia/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
            {/* Optional: Add a link to your resume PDF */}
            {/* <a href="/path/to/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume"><DescriptionIcon/></a> */}
          </div>
          <h1>Elsa Tsia</h1>
          <p>Computer Science Graduate & Full-Stack Developer</p> {/* Changed from "Student" */}
          <div className="brief-intro"> {/* Add a brief intro line */}
            I build full-stack applications and enjoy solving problems with code.
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/tda-8818" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/elsa-tsia/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;