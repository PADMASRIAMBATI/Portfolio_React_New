import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css'; // Import your CSS file

const Skills = () => {
  const skillsData = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 95 },
    { name: "React.js", level: 75 },
    { name: "Python", level: 75 },
    { name: "Machine Learning", level: 30 },
    { name: "MongoDB", level: 70 },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <motion.div 
            key={index} 
            className="skill" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="skill-name">{skill.name}</div>
            <div className="skill-level">
              <motion.div 
                className="skill-progress" 
                initial={{ width: 0 }} 
                animate={{ width: `${skill.level}%` }} 
                transition={{ duration: 1 }}
              />
            </div>
            <div className="skill-percentage">{skill.level}%</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
