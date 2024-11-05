// Header.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Header.css"; // CSS styling for the header

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <h1 className="company-name">Innovoa Place</h1>
                <p className="subtitle">Innovating Your Digital Future</p>
            </div>
            <nav className="nav-links">
                {["Home", "Services", "Career", "Contact Us", "About Us", "Client Case Study"].map((item, index) => (
                    <motion.a
                        key={index}
                        href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                        className="nav-link"
                        whileHover={{
                            scale: 1.1,
                            color: "#fff",
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {item}
                    </motion.a>
                ))}
            </nav>
        </header>
    );
};

export default Header;
