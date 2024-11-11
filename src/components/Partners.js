// src/components/Partners.js
import React from "react";
import "./Partners.css";

const Partners = () => {
    return (
        <section className="partners" id="partners">
            <div className="partners-content">
                <h2 className="partners-heading">Our Partners</h2>
                <p className="partners-description">
                    We collaborate with industry leaders to bring innovative solutions
                    to life. Our trusted partners include agricultural experts, tech pioneers,
                    and academic institutions.
                </p>
                <div className="partners-logos">
                    <div className="partner">
                        <div className="partner-logo-container">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1682092640390-986e05bcbb5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZmFybWVyc3xlbnwwfHwwfHx8MA%3D%3D"
                                alt="Agricultural Farmers"
                                className="partner-logo"
                            />
                        </div>
                        <h3>Agricultural Farmers</h3>
                        <p>Empowering the agricultural sector with technology-driven solutions.</p>
                    </div>
                    <div className="partner">
                        <div className="partner-logo-container">
                            <img
                                src="https://perceptron.solutions/PerceptronLogo3.png"
                                alt="Perceptron Solution"
                                className="partner-logo"
                            />
                        </div>
                        <h3>Perceptron Solution</h3>
                        <p>Enabling mental well-being with innovative trackers.</p>
                    </div>
                    <div className="partner">
                        <div className="partner-logo-container">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTncADOFi7HqGEpA93JDWdYzUsI4_DZB_mA&s"
                                alt="Malnad College of Engineering"
                                className="partner-logo"
                            />
                        </div>
                        <h3>Malnad College of Engineering</h3>
                        <p>Collaborating on cutting-edge educational platforms.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
