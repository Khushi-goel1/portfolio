import React from 'react';

const Contact = () => (
  <section id="contact" className="py-16">
    <h2 className="text-3xl font-bold text-center mb-10">Let's Connect</h2>
    <div className="max-w-xl mx-auto bg-white/40 backdrop-blur-lg p-6 rounded-lg shadow border border-gray-200 text-center space-y-3">
      <p className="text-gray-700"><strong>Email:</strong> goelkhushi984@gmail.com</p>
      <p className="text-gray-700"><strong>Phone:</strong> +91-8076500065</p>
      <p className="text-gray-700">
        <strong>LinkedIn:</strong>{' '}
        <a href="https://www.linkedin.com/in/khushigoeltech" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
          khushigoeltech
        </a>
      </p>
      <p className="text-gray-700">
        <strong>GitHub:</strong>{' '}
        <a href="https://github.com/Khushi-goel1" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
          Khushi-goel1
        </a>
      </p>
    </div>
  </section>
);

export default Contact;
