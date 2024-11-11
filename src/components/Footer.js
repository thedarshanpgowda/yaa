import React from "react";
import './Footer.css'; // Ensure to create a separate CSS file for styling
import sp from './assets/IMG_1268.jpg'
import cg from './assets/chandrababu.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Yaa Private Limited. All rights reserved.</p>
        <p>Follow us on:
          {/* <a href="https://twitter.com" className="footer-link">Twitter</a> |
          <a href="https://linkedin.com" className="footer-link">LinkedIn</a> | */}
          <a href="https://github.com/orgs/Ya-Portfolio" className="footer-link">Github</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

export const Founders = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="founders">
          <h3>Meet the Co-Founders</h3>
          <div className="founder-details">
            <div className="founder">
              <img src={sp} alt="Darshan S P" className="founder-image" />
              <div className="founder-info">
                <h4>Darshan S P</h4>
                <p>Co-Founder - A visionary tech enthusiast, focused on creating impactful software solutions for various industries.</p>
              </div>
            </div>
            <div className="founder">
              <img src={cg} alt="Chandrababu Gowda" className="founder-image" />
              <div className="founder-info">
                <h4>Chandrababu Gowda</h4>
                <p>Co-Founder - A creative problem-solver, dedicated to building innovative technology that powers growth and transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}