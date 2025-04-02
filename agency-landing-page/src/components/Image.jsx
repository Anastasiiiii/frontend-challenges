import React from "react";
import "../styles/Image.css";

const Image = ({ header, text, bgImage, className, textColor }) => {
    return (
        <div
            className={`text-container ${className || ''}`}
            style={{ backgroundImage: `url(${bgImage})`, color: textColor }}
        >
            <h1>{header}</h1>
            <p>{text}</p>    
        </div>
    );
};

export default Image;