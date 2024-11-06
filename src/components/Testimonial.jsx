import React from 'react';
import { motion } from 'framer-motion';

import './Testimonial.css';

const testimonials = [
  { name: "John Doe", review: "This team elevated our brand with creative, strategic approaches. The results were fantastic!" },
  { name: "Jane Smith", review: "Professional and innovative! Our online presence has never been stronger." },
  { name: "Mark Wilson", review: "A game-changer for our business. Highly recommended for anyone looking to grow!" },
  { name: "Emily Johnson", review: "They really understand digital strategy. The engagement has been phenomenal!" },
  { name: "Michael Lee", review: "Their expertise has significantly boosted our visibility and client retention." },
  { name: "Sophia Brown", review: "Incredible results. The team’s dedication and creativity were beyond expectations." },
];

const TestimonialCarousel = () => {
  return (
    <div className="testimonial-carousel">
      {testimonials.map((testimonial, index) => (
        <motion.div 
          key={index} 
          className="testimonial"
          initial={{ opacity: 1, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 25, delay: index * 0.2 }}
        >
          <p className="review">"{testimonial.review}"</p>
          <h4 className="client-name">- {testimonial.name}</h4>
        </motion.div>
      ))}
    </div>
  );
};

export default TestimonialCarousel;
