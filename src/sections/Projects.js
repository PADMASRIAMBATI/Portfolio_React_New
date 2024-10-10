import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css'; // Import your CSS file

const Projects = () => {
  const projectData = [
    {
      title: "Note Taking Web Application",
      description: "A Note-Taking Web Application built using FastAPI for the backend, React for the frontend, and JWT tokens for user authentication offers a secure and efficient platform for managing personal or collaborative notes.",
      image: "https://cdn.prod.website-files.com/620e4101b2ce12a1a6bff0e8/63f3aed338f92709d7908c76_Header_10%20Best%20Note-Taking%20Apps%20Every%20Student%20Needs%20in%202023_JAN23.webp", // Replace with your project image URL
      link: "https://github.com/PADMASRIAMBATI/Note_Taking_web_application",
    },
    {
      title: "Phone Book",
      description: "A Phone Book Web Application built using React for the frontend, Flask for the backend, and MongoDB for the database provides an efficient way to store, manage, and search for contacts.",
      image: "https://media.istockphoto.com/id/891806246/photo/phone-book.jpg?s=612x612&w=0&k=20&c=gYsx5pKY4W5ibbbOykxrTxao7pEmLvSWGYdMj99SjSs=", // Replace with your project image URL
      link: "https://github.com/PADMASRIAMBATI/PhoneBook",
    },
    {
      title: "React Project",
      description: "A Login Page developed using React for the frontend, FastAPI for the backend, and MongoDB Atlas for the database provides a secure and efficient way for users to authenticate and manage their sessions.",
      image: "https://img.freepik.com/premium-vector/login-page-system-abstract-background-template_143055-704.jpg", // Replace with your project image URL
      link: "https://github.com/PADMASRIAMBATI/React_Project",
    },
    {
      title: "Steganography",
      description: "A Steganography Project focuses on the art and science of concealing information within other non-secret data to create a secure communication channel. This technique allows users to hide sensitive messages or data in plain sight, often within image, audio, or video files, without attracting attention.",
      image: "https://cdn.prod.website-files.com/64103a8c96dd6db33b73673b/645b73937c06230400a74a3a_Steganography-blog-visual.jpeg", // Replace with your project image URL
      link: "https://github.com/PADMASRIAMBATI/Steganography_project",
    },
    {
      title: "Portfolio",
      description: "A Portfolio Website built using HTML and CSS is a personal or professional webpage designed to showcase an individual’s skills, experience, and projects. It acts as an online resume, presenting relevant work, education, and contact information in a visually appealing and structured format.",
      image: "https://visualportfolio.co/wp-content/uploads/2022/05/Visual-Portfolio-The-Modern-WordPress-Gallery-Plugin-mp4-image.png.webp", // Replace with your project image URL
      link: "https://github.com/PADMASRIAMBATI/Portfolio",
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">GitHub</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
