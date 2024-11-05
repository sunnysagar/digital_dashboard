import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faDesktop, faShoppingCart, faBusinessTime, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import './Service.css'; // Import the CSS file
const services = [
    {
        icon: faUsers,
        title: 'Social Media Marketing',
        tagline: 'Grow your online presence',
    },
    {
        icon: faDesktop,
        title: 'Portfolio Website',
        tagline: 'Showcase your work professionally',
    },
    {
        icon: faShoppingCart,
        title: 'eCommerce Website',
        tagline: 'Boost your sales online',
    },
    {
        icon: faBusinessTime,
        title: 'Google My Business',
        tagline: 'Get found locally',
    },
    {
        icon: faArrowAltCircleDown,
        title: '360-Degree Marketing',
        tagline: 'Reach your audience everywhere',
    },
];

const ServiceSection = () => {
    return (
        <div className="service-section">
           <motion.h2 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}>
                   Pricing Plan
                </motion.h2>
          <div className="plan-list">
          {services.map((service, index) => (
                <div className="service-card" key={index}>
                    <FontAwesomeIcon icon={service.icon} size="3x" className="service-icon" />
                    <h3>{service.title}</h3>
                    <p>{service.tagline}</p>
                </div>
            ))}
          </div>
           
        </div>
    );
};

export default ServiceSection;
