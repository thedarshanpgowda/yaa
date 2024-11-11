import React from 'react';
import './Highlights.css';

const Highlights = () => {
  return (
    <section className="highlights">
      <h2>Key Highlights</h2>
      <p>Discover what makes us unique in delivering top-notch solutions.</p>
      <div className="highlights-cards">
        <div className="highlight-card">
          <h3>High-quality Solutions</h3>
          <p>We deliver high-quality, tailor-made solutions that meet your business needs with precision.</p>
        </div>
        <div className="highlight-card">
          <h3>Custom Development</h3>
          <p>Our development is entirely custom to ensure that each project is unique and perfectly aligned with your vision.</p>
        </div>
        <div className="highlight-card">
          <h3>Focus on Client Satisfaction</h3>
          <p>Our top priority is to ensure our clients are satisfied with the end product and the entire experience.</p>
        </div>
        <div className="highlight-card">
          <h3>Innovative Solutions</h3>
          <p>We leverage the latest technologies to create innovative, cutting-edge solutions that drive business growth.</p>
        </div>
        <div className="highlight-card">
          <h3>On-Time Delivery</h3>
          <p>We believe in delivering quality solutions on time, every time, with the highest level of efficiency.</p>
        </div>
        <div className="highlight-card">
          <h3>Dedicated Support</h3>
          <p>We offer round-the-clock support to ensure that your business operates seamlessly after delivery.</p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
