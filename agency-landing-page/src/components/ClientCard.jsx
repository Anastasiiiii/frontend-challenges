import React from "react";
import "../styles/ClientCard.css";

const ClientCard = ({ clientImage, passage, clientName, clientJob }) => {
    return (
        <div className="client-card-container">
            {/* Photo */}
            <img src={clientImage} alt="clientImaged" />
            {/* Passage about the case*/}
            <p id="client-passage">{passage}</p>
            {/* Client`s name */}
            <p id="client-name">{clientName}</p>
            {/* Client`s job position */}
            <p id="client-job">{clientJob}</p>
        </div>
    )
}

export default ClientCard;
