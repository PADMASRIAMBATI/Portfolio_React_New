import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css'; // Import your CSS file

const Experience = () => {
  const experienceData = [
    {
      title: "Data Science Intern at Cognifyz Technologies",
      duration: "October 2024 - Present",
      responsibilities: "Building data-driven solutions, data analysis, and visualization.",
    },
    {
      title: "Inten at RCTS of IIIT Hyderabad",
      duration: "July 2024 - Present",
      responsibilities: "Creating a Hackathon website both Frontend and Backend ",
    },
    // Add more experiences as needed
  ];

  return (
    <motion.section 
      id="experience" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }} 
      className="experience-section"
    >
      <h2>Work Experience</h2>
      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <motion.div 
            key={index} 
            className="experience-item" 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{exp.title}</h3>
            <p className="duration">{exp.duration}</p>
            <p>{exp.responsibilities}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
