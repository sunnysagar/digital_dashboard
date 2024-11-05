// Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-contain">

            <div className="footer-left">
                <h2 className="footer-company-name">Innovoa Place</h2>
                <p className="footer-subtitle">Innovating Your Digital Future</p>
                
                {/* Social Media Icons Section */}
                <ul className="social-media-icons">
                    <li>
                        <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                    </li>
                   
                    <li>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.telegram.org" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-telegram" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="footer-center">
                <h3>Important Links</h3>
                <ul className="footer-links">
                    {["Home", "Services", "Career", "Contact Us", "About Us", "Client Case Study"].map((link, index) => (
                        <motion.li
                            key={index}
                            className="footer-link-item"
                            whileHover={{ scale: 1.1, color: "#e0f7fa" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a href={`#${link.toLowerCase().replace(/ /g, "-")}`} className="footer-link">
                                {link}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </div>
            <div className="footer-right">
                <h3>Contact Us</h3>
                <p>123, Innovoa Street, Bangalore, Karnataka, India</p>
                <p>Phone: +91 12345 67890</p>
                <p>Email: contact@innovoaplace.com</p>
            </div>
            </div>
           

            <p>© 2023 Digital Marketing Excellence | All rights reserved.</p>
        </footer>
    );
};

export default Footer;