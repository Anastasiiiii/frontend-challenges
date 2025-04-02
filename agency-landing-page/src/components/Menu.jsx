import React, { useState } from "react";
import "../styles/Menu.css";
import "../styles/Formulas.css";

const Menu = ({ isMobile }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const burgerIcon = (
        <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg" fill="#FFF">
            <path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fillRule="evenodd" />
        </svg>
    );

    return (
        <div className="menu-container">
            <p id="header-title">sunnyside</p>
            {isMobile ? (
                <div>
                    <span className="burger-icon" onClick={toggleMenu}>
                        {burgerIcon}
                    </span>
                    {menuOpen && (
                        <div className="menu-mobile">
                            <ul>
                                <li>About</li>
                                <li>Services</li>
                                <li>Projects</li>
                                <li id="contact-button">CONTACT</li>
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <ul className="menu-line">
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li id="contact-button">CONTACT</li>
                </ul>
            )}
        </div>
    );
};

export default Menu;
