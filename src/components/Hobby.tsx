import React from "react";
import mountain from '../assets/images/mountain.png';
import fish from '../assets/images/fish.png';
import '../assets/styles/Hobby.scss';

function Hobby() {
    return(
    <div className="hobbies-container" id="hobbies">
        <h1>Hobbies</h1>
        <div className="hobbies-grid">
            <div className="hobby">
                <img src={mountain} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Photography</h2>
                <p>Love capturing the beauty of the world around me.</p>
            </div>
            <div className="hobby">
                <img src={fish} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Cooking</h2>
                <p>Love expressing my appreciaction of different cultures through cooking.</p>
            </div>
        </div>
    </div>
    );
}

export default Hobby;