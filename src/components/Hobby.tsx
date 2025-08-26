import React from "react";
import { Link } from 'react-router-dom'; // Import Link
import mountain from '../assets/images/mountain.png';
import fish from '../assets/images/fish.png';
import '../assets/styles/Hobby.scss';

function Hobby() {
    return(
    <div className="hobbies-container" id="hobbies">
        <h1>Hobbies</h1>
        <div className="hobbies-grid">
            {/* Use Link to navigate to /photography */}
            <Link to="/photography" className="hobby-link">
                <div className="hobby">
                    <img src={mountain} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Photography</h2>
                    <p>Love capturing the beauty of the world around me. Click to see my gallery.</p> {/* Updated text */}
                </div>
            </Link>
            {/* Use Link to navigate to /cooking */}
            <Link to="/cooking" className="hobby-link">
                <div className="hobby">
                    <img src={fish} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Cooking</h2>
                    <p>Love expressing my appreciation of different cultures through cooking. Click to see my gallery.</p> {/* Updated text */}
                </div>
            </Link>
        </div>
    </div>
    );
}

export default Hobby;