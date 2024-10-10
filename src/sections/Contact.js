import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css'; // Import your CSS file

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <motion.section id="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="contact-section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <motion.input 
          type="text" 
          placeholder="Name" 
          value={formData.name} 
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
          whileFocus={{ scale: 1.05 }}
          required
        />
        <motion.input 
          type="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
          whileFocus={{ scale: 1.05 }}
          required
        />
        <motion.textarea 
          placeholder="Message" 
          value={formData.message} 
          onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
          required
        />
        <motion.button 
          type="submit" 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Contact;
