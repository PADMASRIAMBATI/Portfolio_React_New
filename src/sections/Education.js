import React from 'react';
import { motion } from 'framer-motion';
import './Education.css'; // Import your CSS file

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Kakinada Institute of Engineering and Technology",
      year: "2026",
      cgpa: "8.4", // CGPA format as per your requirements
      course: "Computer Science and Engineering", // Added course field
    },
    {
      degree: "Intermediate",
      institution: "Pragati Vidyalaya Junior College",
      year: "2022",
      cgpa: "8.6", // Not applicable for diploma
      course: "Mathematics, Physics and Chemistry",
    },
    {
      degree: "SSC 10th ",
      institution: "Pragati Little EM Public School Samalkot",
      year: "2020",
      cgpa: "10", // Not applicable for certification
      course: "SSC",
    },
    // Add more educational details as needed
  ];

  return (
    <motion.section 
      id="education" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }} 
      className="education-section"
    >
      <h2>Education</h2>
      <div className="education-path">
        {educationData.map((edu, index) => (
          <motion.div 
            key={index} 
            className="education-point" 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="circle"></div>
            <div className="education-details">
              <p className="degree">{edu.degree}</p>
              <p className="institution">{edu.institution} - {edu.year}</p>
              <p className="cgpa">CGPA: {edu.cgpa}</p>
              <p className="course">Course: {edu.course}</p> {/* Course details displayed below the institution */}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
