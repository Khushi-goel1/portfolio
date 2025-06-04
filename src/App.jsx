import React from 'react'
import Hero from './sections/Hero.jsx'
import Education from './sections/Educations.jsx'
import Experience from './sections/Experience.jsx'
import Contact from './sections/Contact.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import Volunteer from './sections/Volunteer.jsx'
import Footer from './sections/Footer.jsx'
import Navbar from './sections/Navbar.jsx'

function App() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Volunteer />
      <Contact />
      <Footer />
    </div>
  );
}


export default App
