// src/components/Projects.js
import React from "react";
import './Projects.css';
import { useNavigate } from "react-router-dom";

const Projects = () => {
    const navigate = useNavigate()
    const clickHandler = (i) => {
        navigate(`/projects/${i}`);
    }

    return (
        <section className="projects" id="projects">
            <h2>Our Projects</h2>
            <p className="projects-intro">Explore the innovative projects we’ve developed to empower and support various industries.</p>
            <div className="projects-list">
                <div className="project" onClick={() => clickHandler(3)}>
                    <div className="project-card">
                        <img src="https://plus.unsplash.com/premium_photo-1727209458186-6b011c1771ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnRvcnNoaXB8ZW58MHwxfDR8fHww" alt="Mentors and Mentee" className="project-image" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h4>Mentors and Mentee</h4>
                                <p>Platform developed for MCE to connect mentors with mentees, enabling better guidance and collaboration in the academic journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="project-card" onClick={() => clickHandler(1)}>
                        <img src="https://images.unsplash.com/photo-1570286424717-86d8a0082d0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdW1lbnR8ZW58MHwxfDR8fHwy" alt="The Vault" className="project-image" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h4>The Vault</h4>
                                <p>A secure document repository for MCE, ensuring safe storage and easy retrieval of important academic and administrative documents.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="project-card" onClick={() => clickHandler(3)}>
                        <img src="https://images.unsplash.com/photo-1636358860867-f2be9157168a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGVtb3Rpb25zfGVufDB8MXw0fHx8Mg%3D%3D" alt="Emotional Tracker" className="project-image" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h4>Emotional Tracker</h4>
                                <p>Developed for Perceptron Solution, this tool helps track and improve mental well-being by monitoring emotional health over time.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="project-card" onClick={() => clickHandler(2)}>
                        <img src="https://images.unsplash.com/photo-1525279844598-52fd0d3fecc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhbnR8ZW58MHwxfDR8fHwy" alt="PlantX" className="project-image" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h4>PlantX</h4>
                                <p>An innovative tool for farmers to identify nutrient deficiencies in banana plants, ensuring healthy crops and better yields.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project" onClick={() => clickHandler(3)}>
                    <div className="project-card">
                        <img src="https://plus.unsplash.com/premium_photo-1727209458186-6b011c1771ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnRvcnNoaXB8ZW58MHwxfDR8fHww" alt="Mentors and Mentee" className="project-image" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h4>Mentors and Mentee</h4>
                                <p>Platform developed for MCE to connect mentors with mentees, enabling better guidance and collaboration in the academic journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="project-card" onClick={() => clickHandler(1)}>
                        <img src="https://images.unsplash.com/photo-1570286424717-86d8a0082d0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdW1lbnR8ZW58MHwxfDR8fHwy" alt="The Vault" className="project-image" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h4>The Vault</h4>
                                <p>A secure document repository for MCE, ensuring safe storage and easy retrieval of important academic and administrative documents.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="project-card" onClick={() => clickHandler(3)}>
                        <img src="https://images.unsplash.com/photo-1636358860867-f2be9157168a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGVtb3Rpb25zfGVufDB8MXw0fHx8Mg%3D%3D" alt="Emotional Tracker" className="project-image" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h4>Emotional Tracker</h4>
                                <p>Developed for Perceptron Solution, this tool helps track and improve mental well-being by monitoring emotional health over time.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="project-card" onClick={() => clickHandler(2)}>
                        <img src="https://images.unsplash.com/photo-1525279844598-52fd0d3fecc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhbnR8ZW58MHwxfDR8fHwy" alt="PlantX" className="project-image" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h4>PlantX</h4>
                                <p>An innovative tool for farmers to identify nutrient deficiencies in banana plants, ensuring healthy crops and better yields.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    );
};

export default Projects;
