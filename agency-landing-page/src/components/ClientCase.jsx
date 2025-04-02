import React from "react";
import "../styles/ClientCase.css";
import ClientCard from "./ClientCard";
import text from "../clientInfo.json"; 
import emilyImg from "../images/image-emily.jpg";
import jennieImg from "../images/image-jennie.jpg";
import thomasImg from "../images/image-thomas.jpg";

const ClientCase = () => {

    const clientCardData = [
        {
            clientImage: emilyImg, 
            passage: text.text[0].text, 
            clientName: "Emily R.",
            clientJob: "Marketing Director"
        },
        {
            clientImage: thomasImg, 
            passage: text.text[1].text,
            clientName: "Thomas S.",
            clientJob: "Chief Operating Officer"
        },
        {
            clientImage: jennieImg, 
            passage: text.text[2].text,
            clientName: "Jennie F.",
            clientJob: "Business Owner"
        }
    ];

    return (
        <div className="main-clients-container">
            <p id="client-container-title">Client Testimonials</p>
            <div className="all-client-cards">
                {clientCardData.map((data, index) => (
                    <div key={index}>
                        <ClientCard
                            clientImage={data.clientImage}
                            passage={data.passage}
                            clientName={data.clientName}
                            clientJob={data.clientJob}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientCase;
