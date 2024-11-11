import React from "react";
import './About.css';
import sp from './assets/IMG_1268.jpg'
import cg from './assets/chandrababu.png'
import Footer from "./Footer";

const AboutUs = () => {
    return (
        <section className="about-us">
            <header className="about-us-header">
                <h1>About Us</h1>
                <p className="tagline">Our journey, values, and approach to creating exceptional digital experiences.</p>

                <h2>
                    Our Story
                </h2>

                <p>
                    Yaa Private Limited, founded by Darshan S P and Chandrababu Gowda, is a dynamic software solutions startup based in India. Both founders, passionate about technology and innovation, are currently pursuing their final year in Computer Science and Engineering at Malnad College of Engineering. Yaa Private Limited was born out of their vision to create impactful digital experiences for businesses, especially in the entrepreneurial ecosystem. With a focus on delivering custom-built websites and applications, the company has developed significant projects such as Mentors and Mentee for MCE, The Vault for MCE, and solutions like Emotional Tracker and E-Learning for Perceptron Solution. Yaa’s flagship project, PlantX, addresses agricultural challenges by identifying nutrient deficiencies in banana plants, empowering farmers with data-driven solutions. By combining expertise, creativity, and cutting-edge technology, Yaa Private Limited aims to revolutionize how businesses and industries approach software development and digital transformation.
                </p>
            </header>

            <section className="founders-section">
                <h2>Meet the Co-Founders</h2>
                <div className="founders-cards">
                    <div className="founder-card">
                        <img src={sp} alt="Darshan S P" className="founder-image" />
                        <div className="founder-detailss">
                            <h3>Darshan S P</h3>
                            <p className="founder-role">Co-Founder </p>
                            {/* <blockquote>"Innovation lies at the intersection of creativity and technology."</blockquote> */}
                            <p>Darshan is a visionary tech enthusiast with a passion for crafting software that delivers measurable impact. With a background in software development, he focuses on building solutions that drive growth for businesses.</p>
                        </div>
                    </div>

                    <div className="founder-card">
                        <img src={cg} alt="Chandrababu Gowda" className="founder-image" />
                        <div className="founder-detailss">
                            <h3>Chandrababu Gowda</h3>
                            <p className="founder-role">Co-Founder </p>
                            {/* <blockquote>"Great technology solves problems we didn't even know existed."</blockquote> */}
                            <p>Chandrababu is a problem-solver at heart, focusing on building innovative technologies that power the future. With his deep understanding of software architecture, he ensures that every solution is scalable and high-performing.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="approach-section">
                <h2>Our Approach</h2>
                <p>We believe in delivering customized, high-quality solutions that align perfectly with our clients' needs. Our approach centers on collaboration, understanding, and continual innovation.</p>
                <div className="approach-cards">
                    <div className="approach-card">
                        <h3>Understanding Client Needs</h3>
                        <p>We start by truly understanding your business goals, challenges, and vision to ensure our solutions are aligned with your objectives.</p>
                    </div>

                    <div className="approach-card">
                        <h3>Customized Solutions</h3>
                        <p>Our team creates tailored solutions that are scalable, intuitive, and designed to meet your specific needs, driving growth and innovation.</p>
                    </div>

                    <div className="approach-card">
                        <h3>Delivering Excellence</h3>
                        <p>We are committed to quality at every stage. From the first draft to deployment, we ensure that our solutions are of the highest standards, with attention to detail in every line of code.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </section>
    );
};

export default AboutUs;
