import React, { useRef } from 'react';
import './Contact.css';

function Contact() {
    const name = useRef();
    const email = useRef();
    const message = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const userName = name.current.value;
        const userEmail = email.current.value;
        const userMessage = message.current.value;

        // Create a mailto link
        const subject = `Contact Form Submission: ${userName}`;
        const body = `Name: ${userName}\nEmail: ${userEmail}\nMessage: ${userMessage}`;

        // Redirect to mail client with pre-filled content
        window.location.href = `mailto:noreply.yaaprivatelimited@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <>
            <div className="bubble-background">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </div>

            <div className="contact-us">
                <div className="contact-header">
                    <h2>Contact Us</h2>
                    <p>We are always here to listen to your feedback and answer your questions. Reach out to us, and we will get back to you as soon as possible.</p>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input ref={name} type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input ref={email} type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea ref={message} id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </>
    );
}

export default Contact;
