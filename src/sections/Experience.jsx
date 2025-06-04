import React from 'react';

const Experience = () => (
  <section id="experience" className="py-16 bg-gradient-to-r from-gray-50 via-white to-gray-100">
    <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
    <div className="max-w-4xl mx-auto bg-white/30 backdrop-blur-lg p-8 rounded-xl shadow-md border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800">Web Developer | Better Beta</h3>
      <p className="text-sm text-gray-600">Jan 2025 – Present</p>
      <ul className="list-disc mt-4 ml-6 text-gray-700 text-sm space-y-1">
        <li>Created finance dashboards using ReactJS, Chart.js</li>
        <li>Optimized dynamic metric display for better decision-making</li>
        <li>Collaborated with 15 teammates remotely using Git + FastAPI</li>
      </ul>
    </div>
  </section>
);

export default Experience;
