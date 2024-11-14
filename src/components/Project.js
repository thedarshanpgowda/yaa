import React, { useEffect, useState } from 'react';
import './ProjectPage.css';
import { useParams } from 'react-router-dom';
const ALL_DATA = [
    {
        title: "The Vault",
        id: 1,
        subtitle: "A secure, multi-level document management platform for high-sensitivity data storage.",
        tags: ["Security", "Document Management", "Web App"],
        heroImage: "https://images.unsplash.com/photo-1489428425900-89474dc3062a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmF1bHR8ZW58MHx8MHx8fDA%3D",
        features: [
            { id: 1, image: "https://img.freepik.com/free-photo/bank-vault-door-dark-interior_1048-5720.jpg?semt=ais_hybrid", alt: "Secure Document Storage", description: "SHA-256 encryption and secure access protocols ensure safe storage of sensitive documents." },
            { id: 2, image: "https://images.unsplash.com/photo-1570912355338-cdb934b76b12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHZhdWx0fGVufDB8fDB8fHww", alt: "Role-based Access Control", description: "Restricts document access based on user permissions through a role-based system." },
            { id: 3, image: "https://images.unsplash.com/photo-1513746347121-4cfd77c7dc37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHZhdWx0fGVufDB8fDB8fHww", alt: "Data Protection System", description: "Real-time data loss prevention and audit trails ensure document integrity and security." }
        ],
        sections: {
            caseStudy: {
                title: "Case Study",
                content: "Developed for Malnad College of Engineering, The Vault offers secure document management with tiered access, optimizing data protection and improving management efficiency.",
                insights: [
                    "Problem: Existing document systems exposed sensitive data to security risks.",
                    "Solution: A secure platform with multi-level access and real-time encryption.",
                    "Outcome: 40% reduction in document mismanagement and enhanced security confidence."
                ]
            },
            overview: {
                title: "Project Overview",
                content: "The Vault is a web application designed for college where document security is paramount. It provides a streamlined, secure environment for managing sensitive data with user role-based access control."
            },
            techStack: {
                title: "Tech Stack",
                content: "React, Node.js, Express, MongoDB, AWS",
                breakdown: [
                    { name: "React", description: "For building dynamic front-end interfaces." },
                    { name: "Node.js", description: "Handles backend logic and APIs efficiently." },
                    { name: "Express", description: "Framework for creating RESTful APIs." },
                    { name: "MongoDB", description: "NoSQL database for flexible data storage." },
                    { name: "AWS", description: "Cloud infrastructure for scalable deployments." }
                ]
            },
            challenges: {
                title: "Challenges",
                content: "Implementing multi-level access control while maintaining high performance posed a significant challenge. Ensuring smooth user experience with encryption was key.",
                challengesList: [
                    "Balancing encryption performance with application speed.",
                    "Managing secure multi-level access.",
                    "Optimizing user experience with large data sets."
                ]
            },
            results: {
                title: "Results",
                content: "The Vault successfully met high data security standards, significantly reducing document mismanagement and boosting security compliance.",
                statistics: [
                    { label: "Reduction in Document Mismanagement", value: "40%" },
                    { label: "Increase in Security Compliance", value: "20%" },
                    { label: "Client Satisfaction Rate", value: "95%" }
                ]
            },
            testimonials: {
                title: "Client Testimonials",
                reviews: [
                    { client: "Principal, MCE", review: "The Vault revolutionized our document management. We feel secure with its features." },
                    { client: "Dr. Raju S P", review: "A must-have for any organization handling sensitive data. The access control is invaluable." }
                ]
            }
        }
    },
    {
        title: "Plant-X",
        id: 2,
        subtitle: "A cutting-edge app for diagnosing nutrient deficiencies in banana plants using image recognition.",
        tags: ["Agriculture", "Image Recognition", "Web App"],
        heroImage: "https://images.unsplash.com/photo-1599148401005-fe6d7497cb5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGxhbnRzfGVufDB8fDB8fHww",
        features: [
            { id: 1, image: "https://img.freepik.com/free-photo/close-up-plant-leaves_23-2148928478.jpg?semt=ais_hybrid", alt: "Image Upload for Diagnosis", description: "Farmers upload banana leaf images for nutrient deficiency diagnosis using AI-powered algorithms." },
            { id: 2, image: "https://img.freepik.com/free-photo/plant-growing-ground_1150-19317.jpg?semt=ais_hybrid", alt: "Nutrient Deficiency Recommendations", description: "The app provides targeted remedies for specific nutrient deficiencies based on AI analysis." },
            { id: 3, image: "https://img.freepik.com/free-photo/agave-palm-tree-plant-gray-background_53876-126208.jpg?semt=ais_hybrid", alt: "Real-Time Diagnosis", description: "Instant feedback and recommendations empower farmers to take immediate action for plant health." }
        ],
        sections: {
            caseStudy: {
                title: "Case Study",
                content: "Plant-X was developed as a solution for banana farmers to diagnose nutrient deficiencies, aiding them in maintaining plant health and optimizing crop yield.",
                insights: [
                    "Problem: Farmers lacked a reliable method to identify nutrient deficiencies in banana plants.",
                    "Solution: AI-powered image recognition for diagnosing deficiencies and recommending remedies.",
                    "Outcome: Increased crop health and yield through better informed, real-time decision-making."
                ]
            },
            overview: {
                title: "Project Overview",
                content: "Plant-X leverages AI to analyze banana leaf images and diagnose nutrient deficiencies, delivering actionable insights for farmers. The platform is designed to be intuitive, accessible, and impactful."
            },
            techStack: {
                title: "Tech Stack",
                content: "React, Redux, Node.js, Express, MongoDB, AWS S3",
                breakdown: [
                    { name: "React", description: "For building a dynamic and responsive frontend." },
                    { name: "Redux", description: "State management to ensure consistent data flow across the app." },
                    { name: "Node.js", description: "Backend logic and API development." },
                    { name: "Express", description: "RESTful API framework to handle client-server communication." },
                    { name: "MongoDB", description: "Flexible NoSQL database to store diagnostic data." },
                    { name: "AWS S3", description: "Cloud storage for image files uploaded by users." }
                ]
            },
            challenges: {
                title: "Challenges",
                content: "The most significant challenges included building a robust AI model for image analysis and ensuring the app's scalability to handle high volumes of image uploads.",
                challengesList: [
                    "Training an accurate AI model for banana leaf diagnosis.",
                    "Handling large-scale image uploads with efficient data storage.",
                    "Maintaining a seamless user experience for farmers with varying levels of tech literacy."
                ]
            },
            results: {
                title: "Results",
                content: "Plant-X enabled farmers to diagnose nutrient deficiencies more efficiently, leading to improved crop health and yield through timely interventions.",
                statistics: [
                    { label: "Increase in Crop Health", value: "25%" },
                    { label: "Farmer Adoption Rate", value: "70%" },
                    { label: "Reduction in Deficiency Diagnosis Time", value: "50%" }
                ]
            },
            testimonials: {
                title: "Client Testimonials",
                reviews: [
                    { client: "Farmer, Haveri District", review: "Plant-X made diagnosing nutrient deficiencies a breeze. It saved me time and improved my crop yields." },
                    { client: "Agriculture Expert, Malnad", review: "The app's AI is accurate, and the recommendations are spot-on. It’s a game-changer for farmers." }
                ]
            }
        }
    },
    {
        title: "Mentors and Mentees",
        id: 3,
        subtitle: "A platform for connecting mentors and mentees to foster learning and development within the MCE community.",
        tags: ["Education", "Mentorship", "Web App"],
        heroImage: "https://images.unsplash.com/photo-1656270873606-ee8905cdb995?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        features: [
            { id: 1, image: "https://img.freepik.com/free-photo/i-think-you-re-ready-join-our-group-session_637285-10071.jpg?semt=ais_hybrid", alt: "Mentor-Mentee Connection", description: "The platform helps students find and connect with suitable mentors in their academic or career fields." },
            { id: 2, image: "https://img.freepik.com/free-photo/team-working-together-project_23-2149325425.jpg?semt=ais_hybrid", alt: "Profile Management", description: "Mentors and mentees can create personalized profiles, offering insights into their expertise and goals." },
            { id: 3, image: "https://img.freepik.com/free-photo/diverse-colleague-men-shaking-hands-together_53876-41037.jpg?semt=ais_hybrid", alt: "Mentorship Sessions", description: "The app allows mentors and mentees to schedule and manage mentorship sessions easily." }
        ],
        sections: {
            caseStudy: {
                title: "Case Study",
                content: "The Mentors and Mentees platform was built to bridge the gap between experienced professionals and students at MCE, providing a seamless connection for knowledge exchange.",
                insights: [
                    "Problem: Students lacked access to experienced mentors in their field of interest.",
                    "Solution: A dedicated platform where students can connect with alumni and faculty for mentorship.",
                    "Outcome: Increased student participation in mentorship programs, improving academic and career outcomes."
                ]
            },
            overview: {
                title: "Project Overview",
                content: "The platform helps students find mentors based on their academic interests and career goals. It allows mentors to guide students through career planning, academics, and personal development."
            },
            techStack: {
                title: "Tech Stack",
                content: "React, Node.js, Express, MongoDB, AWS S3",
                breakdown: [
                    { name: "React", description: "Frontend framework for building a responsive and interactive user interface." },
                    { name: "Node.js", description: "Backend runtime environment for handling user requests and serving data." },
                    { name: "Express", description: "Web framework for Node.js to build RESTful APIs." },
                    { name: "MongoDB", description: "NoSQL database used to store user profiles, session data, and mentor-mentee matches." },
                    { name: "AWS S3", description: "Cloud storage for storing user profile images and session notes." }
                ]
            },
            challenges: {
                title: "Challenges",
                content: "Creating a dynamic and engaging platform that encourages interaction between students and mentors posed a significant challenge. We also needed to ensure privacy and security for all users.",
                challengesList: [
                    "Facilitating seamless communication between mentors and mentees within the platform.",
                    "Ensuring data privacy and security for student and mentor profiles.",
                    "Creating an intuitive user experience that appeals to both students and mentors."
                ]
            },
            results: {
                title: "Results",
                content: "The platform led to increased engagement between mentors and mentees, fostering better academic support and career guidance for students.",
                statistics: [
                    { label: "Mentor-Mentee Connections", value: "300+" },
                    { label: "Active Sessions per Month", value: "150+" },
                    { label: "Improvement in Career Guidance", value: "40%" }
                ]
            },
            testimonials: {
                title: "Client Testimonials",
                reviews: [
                    { client: "Student, MCE", review: "The platform made it easy for me to connect with mentors who guided me in shaping my career." },
                    { client: "Mentor, MCE Faculty", review: "Mentoring on this platform has been an enriching experience. It’s great to give back to the student community." }
                ]
            }
        }
    }

]
// Hero Section Component
const Hero = ({ title, subtitle, tags, heroImage }) => (
    <header className="project-hero">
        <img src={heroImage} alt={title} className="main-image" />
        <div className="hero-content">
            <h1 className="project-title">{title}</h1>
            <p className="project-subtitle">{subtitle}</p>
            <div className="project-tags">
                {tags.map((tag, index) => <span key={index}>{tag}</span>)}
            </div>
            {/* <button className="cta-button">Get in Touch</button> */}
        </div>
    </header>
);

// Content Section Component
const ContentSection = ({ title, content, className, children }) => (
    <section className={className}>
        <h2>{title}</h2>
        <p>{content}</p>
        {children}
    </section>
);

// Feature Gallery Component
const FeatureGallery = ({ features }) => (
    <section className="project-images">
        {features.map(({ id, image, alt, description }) => (
            <div key={id} className="feature-card">
                <img src={image} alt={alt} className="feature-image" />
                <p className="feature-text">{description}</p>
            </div>
        ))}
    </section>
);

// Challenge List Component
const ChallengeList = ({ challenges }) => (
    <ul>
        {challenges.map((challenge, index) => <li key={index}>{challenge}</li>)}
    </ul>
);

// Testimonial Component
const Testimonial = ({ reviews }) => (
    <div className="testimonials">
        {reviews.map(({ client, review }, index) => (
            <div key={index} className="testimonial-card">
                <p className="client-name">{client}</p>
                <p className="client-review">{review}</p>
            </div>
        ))}
    </div>
);

// Main Component
const ProjectPage = () => {
    useEffect(() => {
        // Intersection Observer setup for fade animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '50px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(element => observer.observe(element));

        // Cleanup observer on component unmount
        return () => {
            fadeElements.forEach(element => observer.unobserve(element));
        };
    }, []);

    const [PROJECT_DATA, setProjectData] = useState(ALL_DATA[0]);
    const params = useParams();

    useEffect(() => {
        const project = ALL_DATA.find(project => project.id === Number(params.id));
        setProjectData(project);
    }, [params])


    return PROJECT_DATA && (
        <div className="project-page">
            <Hero
                title={PROJECT_DATA.title}
                subtitle={PROJECT_DATA.subtitle}
                tags={PROJECT_DATA.tags}
                heroImage={PROJECT_DATA.heroImage}
            />

            <ContentSection
                className="project-case-study fade-in"
                title={PROJECT_DATA.sections.caseStudy.title}
                content={PROJECT_DATA.sections.caseStudy.content}
            >
                <ul className="insights">
                    {PROJECT_DATA.sections.caseStudy.insights.map((insight, index) => (
                        <li key={index}>{insight}</li>
                    ))}
                </ul>
            </ContentSection>

            <FeatureGallery features={PROJECT_DATA.features} />

            <ContentSection
                className="project-description fade-in"
                title={PROJECT_DATA.sections.overview.title}
                content={PROJECT_DATA.sections.overview.content}
            />

            <ContentSection
                className="project-tech-stack fade-in"
                title={PROJECT_DATA.sections.techStack.title}
                content={PROJECT_DATA.sections.techStack.content}
            >
                <ul className="tech-stack-breakdown">
                    {PROJECT_DATA.sections.techStack.breakdown.map((tech, index) => (
                        <li key={index}>
                            <strong>{tech.name}:</strong> {tech.description}
                        </li>
                    ))}
                </ul>
            </ContentSection>

            <ContentSection
                className="project-challenges fade-in"
                title={PROJECT_DATA.sections.challenges.title}
                content={PROJECT_DATA.sections.challenges.content}
            >
                <ChallengeList challenges={PROJECT_DATA.sections.challenges.challengesList} />
            </ContentSection>

            <ContentSection
                className="project-results fade-in"
                title={PROJECT_DATA.sections.results.title}
                content={PROJECT_DATA.sections.results.content}
            >
                <ul className="project-statistics">
                    {PROJECT_DATA.sections.results.statistics.map((stat, index) => (
                        <li key={index}>
                            <strong>{stat.label}:</strong> {stat.value}
                        </li>
                    ))}
                </ul>
            </ContentSection>

            <ContentSection
                className="project-testimonials fade-in"
                title={PROJECT_DATA.sections.testimonials.title}
            >
                <Testimonial reviews={PROJECT_DATA.sections.testimonials.reviews} />
            </ContentSection>
        </div>
    );
};

export default ProjectPage;
