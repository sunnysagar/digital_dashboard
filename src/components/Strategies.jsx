import React from 'react';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faChartLine, faHandshake, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import './Strategies.css';

const strategies = [
    {
        icon: faBullseye,
        title: 'Targeted Marketing',
        tagline: 'Reach the right audience effectively',
    },
    {
        icon: faLightbulb,
        title: 'Innovative Solutions',
        tagline: 'Creative ideas tailored for success',
    },
    {
        icon: faChartLine,
        title: 'Data-Driven Decisions',
        tagline: 'Use analytics to boost performance',
    },
    {
        icon: faHandshake,
        title: 'Customer Approach',
        tagline: 'Build strong client relationships',
    },
   
];

const StrategySection = () => {
    return (
        <div className='strategy-container'>
            <div className='srategy-img'>
            <motion.img 
            src="/assest/marketStat.png" 
            alt="Marketing Illustration" 
            className="hero-image market" 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1.2 }}
        />
            </div>

            <div className="strategy-content">
            <h1 className="market-title">Innovoa Place</h1>
            <div className="header-div">
          
            <p className="market-subtitle">Your Vision, Our Expertise</p>
            <p className="market-tagline">See how we turn ideas into impactful actions</p>
        </div>

            <div className="strategy-section">
            {strategies.map((strategy, index) => (
                <div className="strategy-card" key={index}>
                    <div className='part1'>
                    <FontAwesomeIcon icon={strategy.icon} size="3x" className="strategy-icon" />
                    <h3 className="strategy-title">{strategy.title}</h3>
                    </div>
                   
                    <p className="strategy-tagline">{strategy.tagline}</p>
                </div>
            ))}
        </div>
            </div>

        </div>
       
    );
};

export default StrategySection;
