import React from "react";
import "../styles/TextBox.css";

const TextBox = ({ title, passage }) => {
    return (
        <div className="text-side-container">
            <h1>{title}</h1>
            <p id="passage">{passage}</p>
            <p id="learn-more-button">Learn more</p>
            <label id="underline"></label>
        </div>
    )
}

export default TextBox;