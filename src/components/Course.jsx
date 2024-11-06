import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import './Course.css';
import { FaAd, FaAddressBook, FaPlus } from 'react-icons/fa';

const CourseContent = () => {
  const [currentGroup, setCurrentGroup] = useState(0); // To manage group switching
  const [currentIndex, setCurrentIndex] = useState(0); // To manage individual course switching in the group

  const servicesGroup1 = [
    {
      img: "https://cdn.dribbble.com/users/1603428/screenshots/4158745/media/1c1640b18e1930e6692b373351cbfdfc.gif",
      title: "Web Development",
      description: "Master front-end and back-end development to create dynamic, responsive websites. Learn HTML, CSS, JavaScript, and modern frameworks like React and Node.js. This course will also teach you how to optimize for SEO and integrate web APIs, enabling you to build scalable web applications.",
    },
    {
      img: "https://cdn.dribbble.com/users/1603428/screenshots/4158705/mob-dev.gif",
      title: "Mobile App Development",
      description: "Develop high-quality mobile apps for Android and iOS platforms using modern tools like React Native, Swift, and Kotlin. This course covers app design principles, user experience (UX), debugging, and app deployment on Google Play and the App Store.",
    },
    {
      img: "https://www.galtechlearning.com/wp-content/uploads/2023/01/third.gif",
      title: "Full-Stack Development",
      description: "Gain expertise in both front-end and back-end development to become a full-stack developer. You'll learn HTML, CSS, JavaScript, front-end frameworks (React, Vue.js), back-end technologies (Node.js, Express), and database management with MongoDB or SQL.",
    },
  ];

  const servicesGroup2 = [
    {
      img: "/assest/graphics.png",
      title: "Graphics Designing",
      description: "Unlock the creative potential in designing visually stunning graphics for websites, social media, and marketing materials. Learn the fundamentals of graphic design, including color theory, typography, and layout using tools like Adobe Photoshop, Illustrator, and Figma.",
    },
    {
      img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ytph70LLBpDzWw_HelEPjQ.png",
      title: "Marketing Designing",
      description: "Understand the impact of design on marketing and learn to create compelling marketing materials. This course will teach you how to design advertisements, banners, infographics, and brand logos that communicate effectively with your target audience.",
    },
  ];

  useEffect(() => {
    // Switch between groups every 7 seconds
    const interval = setInterval(() => {
      setCurrentGroup((prevGroup) => (prevGroup === 0 ? 1 : 0));
    }, 7000); // 7 seconds for each group

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  useEffect(() => {
    // Switch between items within a group every 7 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (currentGroup === 0 ? servicesGroup1.length : servicesGroup2.length));
    }, 7000); // 7 seconds for each service

    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentGroup]);

  // Get the current group and course based on the state
  const services = currentGroup === 0 ? servicesGroup1 : servicesGroup2;

  return (
    <div className="course-content">
      <div className="service-group">
        {services.map((service, index) => (
          <motion.div className="service2" key={index} whileHover={{ scale: 1.1 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="service-btn"
            >
            <FaPlus/>
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
