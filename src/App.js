import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './sections/Home';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="certificates">
          <Certificates />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
