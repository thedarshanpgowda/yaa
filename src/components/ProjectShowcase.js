import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, GitBranch } from 'lucide-react';
import './ProjectShowcase.css';

import asmithe from './assets/asmithe.png';
import cansat from './assets/cansat.jpg';
import bot from './assets/bot.jpeg'
import bus from './assets/bus.png';
import cms from './assets/cms.png';
import driftRate from './assets/driftRate.png';
import image from './assets/image.png';
import vault from './assets/vault.png';
import mentors from './assets/mentors.png';

const projects = [
    {
        id: 1,
        title: "AI PlantX",
        category: "Artificial Intelligence",
        description: "An AI-based solution for plant health diagnostics and nutrient deficiency remedies, leveraging machine learning for real-time recommendations.",
        image: "https://images.unsplash.com/photo-1695418660587-cb1831a38bfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJhbmFuYSUyMGxlYWZ8ZW58MHwwfDB8fHwy",
        technologies: ["Python", "TensorFlow", "Flask", "AWS S3"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: true
    },
    {
        id: 2,
        title: "Obstacle Avoidance Bot for IoT",
        category: "Internet of Things",
        description: "An autonomous robot designed to navigate its environment and avoid obstacles, using IoT sensors for real-time decision-making.",
        image: bot,
        technologies: ["Arduino", "NodeMCU", "Ultrasonic Sensors", "Servo motors", "IR Sensors"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com"
    },
    {
        id: 3,
        title: "Cansat for IoT",
        category: "Internet of Things",
        description: "A satellite-in-a-can project designed to collect data and transmit it using IoT communication protocols for ground analysis.",
        image: cansat,
        technologies: ["Arduino", "LoRa", "GPS", "Temperature Sensors", "Pressure Sensors", "Accelerometer", "Gyroscope"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: true
    },
    // {
    //     id: 4,
    //     title: "Alcohol and Smoke Detection System",
    //     category: "Internet of Things",
    //     description: "A smart detection system designed to identify alcohol and smoke levels, alerting in real-time for safety compliance.",
    //     image: "/api/placeholder/600/400",
    //     technologies: ["Arduino", "MQ Sensors", "GSM Module"],
    //     liveUrl: "https://example.com",
    //     githubUrl: "https://github.com"
    // },
    // {
    //     id: 5,
    //     title: "Smart Irrigation System",
    //     category: "Internet of Things",
    //     description: "An automated irrigation system that optimizes water usage based on soil moisture and weather conditions using IoT sensors.",
    //     image: "/api/placeholder/600/400",
    //     technologies: ["Arduino", "Soil Moisture Sensors", "ESP8266"],
    //     liveUrl: "https://example.com",
    //     githubUrl: "https://github.com"
    // },
    {
        id: 6,
        title: "The Vault",
        category: "Data Management",
        description: "A secure, multi-level document management platform for sensitive data storage, with encryption and access control.",
        image: vault,
        technologies: ["React", "Node.js", "MongoDB", "AWS", "Tanstak Query", "JWT", "Bcrypt", "SHA-256", "React PDF reader"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com"
    },
    {
        id: 7,
        title: "Real-time Drift Value Compensation in MCE",
        category: "Data Management",
        description: "An application that calculates and compensates for real-time drift values in MCE, ensuring precision in measurement data.",
        image: driftRate,
        technologies: ["NodeJS", "ReactJS", "File System", "Readline", "Bcrypt", "SHA-256"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com"
    },
    {
        id: 8,
        title: "Project Management App for ISRO",
        category: "Data Management",
        description: "A comprehensive project management app designed to handle complex workflows and data tracking for ISRO's projects.",
        image: "/api/placeholder/600/400",
        technologies: ["React", "Node.js", "MongoDB", "Express", "AWS S3"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com"
    },
    {
        id: 9,
        title: "Book My Bus",
        category: "eCommerce",
        description: "A user-friendly platform for booking bus tickets, managing seat availability, and providing real-time data on bus schedules.",
        image: bus,
        technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Bcrypt", "SHA-256"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com"
    },
    {
        id: 10,
        title: "Emotional Tracker",
        category: "Artificial Intelligence",
        description: "A personal AI assistant that tracks emotional health by analyzing user interactions and mood patterns to offer mental wellness recommendations.",
        image: image,
        technologies: ["HTML", "Vanilla JS", "JWT"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com"
    },
    {
        id: 11,
        title: "Asmitha eCommerce for Small-Scale Industries",
        category: "eCommerce",
        description: "A comprehensive eCommerce platform designed to empower small-scale industries with a digital marketplace and scalable infrastructure.",
        image: asmithe,
        technologies: ["React", "Node.js", "MongoDB"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com"
    },
    {
        id: 12,
        title: "eLearning Platform for Perceptron Solutions",
        category: "Education Technology",
        description: "A scalable eLearning platform providing interactive learning modules for students and professionals, designed for Perceptron Solutions.",
        image: "/api/placeholder/600/400",
        technologies: ["Kafka", "AWS", "TypeScript", "MongoDB"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com"
    },
    {
        id: 13,
        title: "eLearning Platform College",
        category: "Education Technology",
        description: "A scalable eLearning platform providing interactive learning modules for students and professionals, designed for Perceptron Solutions.",
        image: cms,
        technologies: ["React", "Node.js", "ReactChartJs", "AWS"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com"
    },
    {
        id: 14,
        title: "Mentors and Mentees for MCE",
        category: "Education Technology",
        description: "A platform that connects students with mentors at MCE, facilitating knowledge-sharing and career guidance through a structured program.",
        image: mentors,
        technologies: ["Html", "Vanilla js", "MongoDB", "Express"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com"
    }
];


const ProjectShowcase = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState(projects);

    const categories = ['All', ...new Set(projects.map(project => project.category))];

    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.category === selectedCategory));
        }
    }, [selectedCategory]);

    return (
        <div className="projectOfUsContainer">
            <div className="projectOfUsHeader">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="projectOfUsTitle"
                >
                    Our Featured Projects
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="projectOfUsSubtitle"
                >
                    Transforming ideas into powerful solutions
                </motion.p>
            </div>

            <motion.div
                className="projectOfUsCategories"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                {categories.map((category, index) => (
                    <button
                        key={category}
                        className={`projectOfUsCategory ${selectedCategory === category ? 'projectOfUsCategoryActive' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </motion.div>

            <motion.div
                className="projectOfUsGrid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className={`projectOfUsCard ${project.featured ? 'projectOfUsCardFeatured' : ''}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="projectOfUsImageContainer">
                            <img src={project.image} alt={project.title} className="projectOfUsImage" />
                            <div className="projectOfUsOverlay">
                                <a href={project.liveUrl} className="projectOfUsLink" target="_blank" rel="noopener noreferrer">
                                    <ExternalLink size={20} />
                                    View Live
                                </a>
                                <a href={project.githubUrl} className="projectOfUsLink" target="_blank" rel="noopener noreferrer">
                                    <GitBranch size={20} />
                                    Source Code
                                </a>
                            </div>
                        </div>
                        <div className="projectOfUsContent">
                            <h3 className="projectOfUsCardTitle">{project.title}</h3>
                            <p className="projectOfUsCardDescription">{project.description}</p>
                            <div className="projectOfUsTechnologies">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="projectOfUsTech">{tech}</span>
                                ))}
                            </div>
                            <a href={`/projects/${project.id}`} className="projectOfUsLearnMore">
                                Learn More <ChevronRight size={16} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ProjectShowcase;