import React from "react";
import { Link } from 'react-router-dom'; // Import Link for a back button
import '../assets/styles/Gallery.scss'; // You might want to create a shared style

// Import your gallery images
import dish1 from '../assets/images/cooking/dish1.png';
//import photo2 from '../assets/images/cooking/photo2.jpg';
// ... import more photos

function Cooking() {
    // An array of your image sources
    const photoGallery = [dish1, /* ... */];

    return (
        <div className="gallery-container">
            {/* A simple back button */}
            <Link to="/" className="back-button">← Back to Main Site</Link>

            <h1>Cooking Gallery</h1>
            <div className="gallery-grid">
                {photoGallery.map((photoSrc, index) => (
                    <img
                        key={index}
                        src={photoSrc}
                        alt={`My cooking ${index + 1}`}
                        className="gallery-item"
                    />
                ))}
            </div>
        </div>
    );
}

export default Cooking;