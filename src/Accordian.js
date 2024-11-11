import React, { useState } from 'react';
import './FaqAccordion.css';

const FaqAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Close the current section if it's already open
        } else {
            setActiveIndex(index); // Open the clicked section
        }
    };

    return (
        <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="accordion">
                {/* Accordion Item 1 */}
                <div className={`accordion-item ${activeIndex === 0 ? 'open' : ''}`}>
                    <button
                        className="accordion-header"
                        onClick={() => toggleAccordion(0)}
                    >
                        What services do you offer?
                    </button>
                    <div className={`accordion-content ${activeIndex === 0 ? 'show' : ''}`}>
                        <p>We offer web development, software solutions, and website optimization services for businesses of all sizes.</p>
                    </div>
                </div>

                {/* Accordion Item 2 */}
                <div className={`accordion-item ${activeIndex === 1 ? 'open' : ''}`}>
                    <button
                        className="accordion-header"
                        onClick={() => toggleAccordion(1)}
                    >
                        How do I get started with a project?
                    </button>
                    <div className={`accordion-content ${activeIndex === 1 ? 'show' : ''}`}>
                        <p>Simply reach out to us through our contact form, and we'll schedule a consultation to discuss your requirements.</p>
                    </div>
                </div>

                {/* Accordion Item 3 */}
                <div className={`accordion-item ${activeIndex === 2 ? 'open' : ''}`}>
                    <button
                        className="accordion-header"
                        onClick={() => toggleAccordion(2)}
                    >
                        What are your pricing plans?
                    </button>
                    <div className={`accordion-content ${activeIndex === 2 ? 'show' : ''}`}>
                        <p>We offer flexible pricing plans based on the project's scope. Contact us for a custom quote.</p>
                    </div>
                </div>

                {/* Accordion Item 4 */}
                <div className={`accordion-item ${activeIndex === 3 ? 'open' : ''}`}>
                    <button
                        className="accordion-header"
                        onClick={() => toggleAccordion(3)}
                    >
                        Do you offer support after the project?
                    </button>
                    <div className={`accordion-content ${activeIndex === 3 ? 'show' : ''}`}>
                        <p>Yes, we provide ongoing support and maintenance packages after project completion.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqAccordion;
