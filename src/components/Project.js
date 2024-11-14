// src/components/ProjectPage.js
import React from "react";
import './ProjectPage.css';

const ProjectPage = () => {
    return (
        <div className="project-page">
            <header className="project-hero">
                <img
                    src="https://example.com/vault-project-image.jpg"
                    alt="Vault Project"
                    className="project-image"
                />
                <h1 className="project-title">The Vault</h1>
                <p className="project-subtitle">
                    A secure, multi-level document management platform designed for high-sensitivity data storage.
                </p>
            </header>

            <section className="project-description">
                <h2>Project Overview</h2>
                <p>
                    The Vault is a robust, web-based application built to securely store and manage documents with a
                    structured user role system. The platform enables users to save, manage, and access documents
                    depending on their permissions across four distinct access levels, ensuring that data is both
                    protected and easily retrievable for authorized users.
                </p>
            </section>

            <section className="tech-stack">
                <h2>Tech Stack</h2>
                <ul>
                    <li>Frontend: React, HTML, CSS (with responsive design)</li>
                    <li>Backend: Node.js, Express.js</li>
                    <li>Database: MongoDB</li>
                    <li>Security: JWT Authentication, Role-Based Access Control</li>
                </ul>
            </section>
        </div>
    );
};

export default ProjectPage;
