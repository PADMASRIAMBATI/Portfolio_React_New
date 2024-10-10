import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg'; // Ensure the path to your image is correct
import './Home.css'; // Import your CSS file

const Home = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="home-section"
    >
      <div className="hero">
        <motion.div 
          className="profile-container"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <img src={profile} alt="Profile" className="profile-image" />
        </motion.div>
        <div className="text-container">
          <motion.h1
            className="name"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm Ambati Padmasri
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Aspiring Data Scientist passionate about AI and ML.
            <p>I am Padmasri, an introvert person and a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
          </motion.p>
          <motion.a
            href="https://drive.google.com/file/d/1zDlZKD712RztwgOx_xlkc617IcS50bEr/view?usp=sharing" // Replace with the link to your resume
            className="resume-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            See Resume
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
