// MainImage.jsx
import React from 'react';

const MainImage = ({ src }) => {
    return (
        <div className="main-image">
            <img src={src} alt="Main" />
        </div>
    );
};

export default MainImage;

