import React from 'react';

const Details = ({ title, description, onButtonClick }) => {
    return (
        <div className="details">
            <h1>{title}</h1>
            <p>{description}</p>
            <button onClick={onButtonClick}>Show Modal</button>
        </div>
    );
};

export default Details;
