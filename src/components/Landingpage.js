// src/components/LandingPage.js
import React from "react";
import Partners from "./Partners.js";
import Highlights from "./Highlights.js";
import Projects from "./Projects.js";
import Footer, { Founders } from "./Footer.js";
import { Link } from "react-router-dom";
import FaqAccordion from "../Accordian.js";


const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="hero">
                <nav className="navbar">
                    <h1 className="logo">Yaa</h1>
                    <ul className="nav-links">
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
