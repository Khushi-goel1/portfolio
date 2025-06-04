import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-indigo-600">Khushi Goel</div>
        <ul className="flex space-x-6 text-sm text-gray-700 font-medium">
          <li>
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">Home</Link>
          </li>
          <li>
            <Link to="educations" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">Education</Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">Experience</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">Projects</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
