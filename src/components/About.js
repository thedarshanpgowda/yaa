import React from "react";
import './About.css';
import sp from './assets/IMG_1268.jpg'
import cg from './assets/chandrababu.png'
import Footer from "./Footer";
import Cover from "./Cover";

const AboutUs = () => {
    return (
        <section className="about-us">
            <Cover />
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
                            <p className="founder-role">The co-founder of Yaa Pvt Ltd </p>
                            <p>Darshan S P, is a highly skilled software engineer with extensive experience in both full-stack development and DevOps. Currently the brand ambassador of AICTE Idea Lab, Darshan has played a key role in delivering custom software solutions that help businesses streamline and optimize their digital operations. <br />

                                In addition to his development expertise, Darshan has a strong background in DevOps. His international experience includes internships in Australia and Canada. He was also involved in a real-world project under ISRO, which is actively being tested at MCF, Hassan, where he contributed to innovative projects, further strengthening his technical foundation.
                                At Yaa Pvt Ltd, Darshan is committed to providing tailored software solutions, leveraging his expertise in both development and DevOps to help businesses thrive in today’s fast-paced digital world..</p>
                        </div>
                        <blockquote>"Coding for me is a form of expression—a way to turn ideas into reality. Each project is a testament to my dedication to making technology something people can truly connect with and rely on."</blockquote>
                    </div>

                    <div className="founder-card">
                        <img src={cg} alt="Chandrababu Gowda" className="founder-image" />
                        <div className="founder-detailss">
                            <h3>Chandrababu Gowda</h3>
                            <p className="founder-role">The co-founder of Yaa Pvt Ltd </p>
                            <p>Chandrababu Gowda,  is an accomplished full-stack developer and DevOps engineer. He also serves as the Google Developer Group (GDG) lead at Malnad College of Engineering (MCE). Chandrababu has been instrumental in delivering robust software solutions that help businesses elevate their digital presence.<br />

                                With international internship experience in Australia and a real-world project under ISRO, which is actively being tested at MCF, Hassan, Chandrababu has worked on cutting-edge projects that have sharpened his skills in full-stack development and DevOps. His deep understanding of both development and operational processes allows him to create efficient, scalable systems that meet the diverse needs of clients.
                                At Yaa Pvt Ltd, Chandrababu is focused on delivering innovative software solutions, utilizing his expertise in full-stack development and DevOps to ensure optimal performance and seamless user experiences.</p>
                        </div>
                        <blockquote>"For me, every project is more than just an accomplishment. It’s a chance to make something that matters—something that connects with people on a deeper level and makes a difference in their world."</blockquote>
                    </div>
                    {/* <div className="founder-card">
                        <img src={cg} alt="Dr. Raju S P" className="founder-image" />
                        <div className="founder-detailss">
                            <h3>Dr. Raju S P</h3>
                            <p className="founder-role">Faculty, Department of Physics</p>
                            <p>Dr. Raju S P is a highly respected faculty member in the Department of Physics, known for his expertise in the field and his dedication to guiding students and professionals alike. With years of academic experience, Dr. Raju has become an invaluable mentor, providing support and insights in every aspect of our work at Yaa Pvt Ltd.<br />
                                His profound knowledge of physics and his practical approach to problem-solving have made him an essential part of our team, helping us navigate complex challenges with a scientific and analytical mindset. Dr. Raju is instrumental in guiding our projects, ensuring we adhere to best practices while fostering innovation.<br />
                                At Yaa Pvt Ltd, Dr. Raju continues to inspire us with his passion for education and research, guiding us towards making impactful contributions in the world of technology and software development.</p>
                        </div>
                        <blockquote>"The pursuit of knowledge is never-ending. Every project is an opportunity to learn, grow, and apply that knowledge to create solutions that can shape the future."</blockquote>
                    </div> */}

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
