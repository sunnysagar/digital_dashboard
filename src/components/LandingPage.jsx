import React from 'react';
import { motion } from 'framer-motion';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="landing-page">
            {/* Header */}

            {/* Hero Section */}
            <section className="hero-section">

            <motion.div className="hero-text" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
                    <h2>Your Growth, Our Mission</h2>
                    <p>Get top-notch services in SEO, PPC, and Social Media Management</p>
                    <button className="cta-button">Get Started</button>
                </motion.div>
                    <motion.video 
                        src="/assests/main_video.mp4" // Path relative to the public folder
                        className="hero-video"
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1.2 }}
                        autoPlay
                        loop
                        muted
                    />
               
            </section>

            {/* Services Section */}
            <section className="services-section">
                <motion.h2 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}>
                    Our Services
                </motion.h2>
                <div className="services">
                    <motion.div className="service" whileHover={{ scale: 1.1 }}>
                        <img src="https://via.placeholder.com/100" alt="Service 1" />
                        <h3>SEO Optimization</h3>
                        <p>Improve your search engine rankings and visibility.</p>
                    </motion.div>
                    <motion.div className="service" whileHover={{ scale: 1.1 }}>
                        <img src="https://via.placeholder.com/100" alt="Service 2" />
                        <h3>Social Media Marketing</h3>
                        <p>Engage your audience on popular social media platforms.</p>
                    </motion.div>
                    <motion.div className="service" whileHover={{ scale: 1.1 }}>
                        <img src="https://via.placeholder.com/100" alt="Service 3" />
                        <h3>Pay-Per-Click Advertising</h3>
                        <p>Drive targeted traffic to your website quickly.</p>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <h2>What Our Clients Say</h2>
                <div className="testimonials">
                    <motion.div className="testimonial" whileHover={{ y: -10 }}>
                        <p>“Our web traffic increased by 200% within months!”</p>
                        <h4>- John D.</h4>
                    </motion.div>
                    <motion.div className="testimonial" whileHover={{ y: -10 }}>
                        <p>“Exceptional service with a fantastic team!”</p>
                        <h4>- Sarah M.</h4>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
          
        </div>
    );
}

export default LandingPage;