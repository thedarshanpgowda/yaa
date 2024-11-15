import React from "react";
import "./Services.css";
import Footer from "./Footer";

const services = [
    {
        title: "Website Development",
        description:
            "We create stunning, responsive websites tailored to your business needs, ensuring seamless user experiences.",
        image: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
        title: "E-commerce Solutions",
        description:
            "Build scalable and secure e-commerce platforms to help your business grow and reach more customers.",
        image: "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww",
    },
    {
        title: "Custom Software Development",
        description:
            "We provide custom software solutions to solve complex business problems and drive efficiency.",
        image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
];

const Services = () => {
    return (
        <div className="services-container">
            <header className="services-header">
                <h1>Our Services</h1>
                <p>
                    At Yaa Pvt Ltd, we specialize in delivering world-class software
                    solutions tailored to your needs.
                </p>
            </header>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <img src={service.image} alt={service.title} className="service-image" />
                        <div className="service-content">
                            <h2 className="service-title">{service.title}</h2>
                            <p className="service-description">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default Services;
