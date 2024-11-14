import React, { useState } from "react";
import { Link } from "react-router-dom";
import Partners from "./Partners.js";
import Highlights from "./Highlights.js";
import Projects from "./Projects.js";
import Footer, { Founders } from "./Footer.js";
import FaqAccordion from "../Accordian.js";

const LandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="landing-page">
            <header className="hero">
                <nav className="navbar">
                    <h1 className="logo">Yaa</h1>
                    <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>
                        <h1 className="cancelBtn" onClick={closeMenu}>X</h1>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#partners">Partners</a></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                </nav>
                <div className="hero-content">
                    <h1 className="hero-title">Your Trusted Partner for Innovative Website Solutions</h1>
                    <p className="hero-subtitle">Empowering businesses with scalable, tailor-made digital solutions.</p>
                    <div className="hero-buttons">
                        <button className="btn-primary"><Link to={'/about'}>Learn More</Link></button>
                        <button className="btn-secondary"><Link to={'/contact'}>Contact Us</Link></button>
                    </div>
                </div>
            </header>
            <Highlights />
            <Projects />
            <Partners />
            <Founders />
            <FaqAccordion />
            <Footer />
        </div>
    );
};

export default LandingPage;
