import React from 'react';
import { motion } from 'framer-motion';
import './LandingPage.css';
import ServiceSection from './Service';
import AnimatedButton from './AnimatedButton';
import StrategySection from './Strategies';
import CourseContent from './Course';



function LandingPage() {
    return (
        <div className="landing-page">
            {/* Header */}

            {/* Hero Section */}
            <section 

            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5rem',
                backgroundImage: 'url("/assest/back.jpg")',
                backgroundSize: 'cover', // or 'contain', depending on your needs
                backgroundPosition: 'center',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            }}

            className="hero-section">
            <div className="your-class" style={{ backgroundImage: `url(/assest/back.jpg)` }}></div>


            <motion.div className="hero-text" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
                    <h2>Your Growth, Our Mission</h2>
                    <p>Get top-notch services in SEO, PPC, and Social Media Management</p>
                    <button className="cta-button">Get Started</button>
                </motion.div>
                    <motion.img 
                        src="/assest/main_video.gif" // Path relative to the public folder
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

            <div className="services trust">
    <div className="trust-content">
        <h2 className="trust-heading">Our Unique Approach</h2>
        <h3 className="trust-subtitle">The Smart Way to Achieve Your Goals</h3>
        <h4 className="trust-description">
        we stand out by offering smart, customized digital marketing strategies that drive real results. We leverage data-driven insights and innovative solutions to tailor our approach to your unique business needs, ensuring measurable growth and sustainable success. With a focus on transparent communication and constant optimization, we help you achieve your goals efficiently and effectively. Let us guide you to success in the smartest way possible!
        </h4>
    </div>
    <div className='trust-img'>
        <motion.img 
            src="/assest/trust1.png" 
            alt="Marketing Illustration" 
            className="hero-image" 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1.2 }}
        />
    </div>
</div>



                <div className="services">
                   

                    <motion.div className="service social" >
                        <img src="https://cdn.dribbble.com/users/2918596/screenshots/9246326/media/d2a065d587a99f32128f223b2d8e7d69.gif" alt="Service 3" />
                        <h3>Social Media Marketing</h3>
                        <p>Social media marketing is the use of social media platforms to connect with the audience to build the brand, increase sales, and drive website traffic.</p>
                        <AnimatedButton text={'Learn More'} />
                    </motion.div>

                    <motion.div className="service seo" whileHover={{ scale: 1.01 }}>
                        <img src=" https://www.renderinfotech.com/assets/image/seo-search-enginge-optimization.gif" alt="Service 3" />
                        <h3>SEO Optimization</h3>
                        <p>Search engine optimization (SEO) is the art and science of getting pages to rank higher in search engines such as Google. Because search is one of the main ways in which people discover content online, ranking higher in search engines can lead to an increase in traffic to a website.</p>
                        <AnimatedButton text={'Learn More'} />
                    </motion.div>

                    
                    <motion.div className="service email" >
                        <img src="https://cdn.dribbble.com/users/2186444/screenshots/14905808/media/764d286e30761776a81216c7463beab8.gif" alt="Service 3" />
                        <h3>Email Marketing</h3>
                        <p>Email marketing is a way to promote products or services through email. Email marketing is a top digital media channel, and it is important for customers’ acquisition and retention.</p>
                        <AnimatedButton text={'Learn More'} />
                    </motion.div>   


                </div>
            </section>

            <section>
                <StrategySection />
            </section>

            <section className='course-section'>
            <motion.h2
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="section-heading"
            >
                Developement Course
            </motion.h2>
            <div className="course-content">
            <CourseContent />

            </div>
                 
            </section>

            <section className="price-tag-service">
                <ServiceSection />

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