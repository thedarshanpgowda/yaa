import React from 'react';
import './Testimonials.css'; // Import the refined CSS file
import raju from './assets/raju.jpg';
import pavan from './assets/pavan.jpg';
import sp from './assets/IMG_1268.jpg';
import Footer from './Footer';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'John Doe',
            role: 'CEO, Tech Innovations',
            feedback:
                'Yaa Pvt Ltd delivered exceptional service! Their team crafted a solution that transformed our business, and the support we received was top-notch. Highly recommend them!',
            image: raju // Replace with actual image URLs
        },
        {
            name: 'Jane Smith',
            role: 'CTO, Future Ventures',
            feedback:
                'The Yaa Pvt Ltd team is incredibly talented and professional. Their full-stack development and DevOps expertise allowed us to scale our platform seamlessly.',
            image: pavan // Replace with actual image URLs
        },
        {
            name: 'Samuel Lee',
            role: 'Founder, Creative Minds',
            feedback:
                'Working with Yaa Pvt Ltd has been an absolute pleasure. Their attention to detail and commitment to excellence sets them apart. We couldn’t be happier with the results.',
            image: sp // Replace with actual image URLs
        }
    ];

    return (
        <div className='testimonials'>
            <section className="testimonialsContainer">
                <h2 className="testimonialsTitle">What People Are Saying</h2>
                <div className="testimonialsList">
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonialsCard" key={index}>
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="testimonialsImage"
                            />
                            <p className="testimonialsFeedback">"{testimonial.feedback}"</p>
                            <div className="testimonialsAuthor">
                                <h3 className="testimonialsName">{testimonial.name}</h3>
                                <p className="testimonialsRole">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Testimonials;
