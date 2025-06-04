import React from 'react';

const skills = [
  { category: 'Languages', items: 'C++, Python, SQL' },
  { category: 'Web Dev', items: 'HTML, CSS, JavaScript, React, Tailwind' },
  { category: 'Tools', items: 'Git, GitHub, Vite, VS Code, PyCharm' },
  { category: 'Libraries', items: 'Pandas, NumPy, Matplotlib, Chart.js' },
];

const Skills = () => (
  <section className="py-16">
    <h2 className="text-3xl font-bold text-center mb-10">Technical Skills</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {skills.map((skill, i) => (
        <div key={i} className="bg-white/30 backdrop-blur-lg p-5 rounded-lg shadow border border-gray-200">
          <h3 className="font-semibold text-lg text-gray-800">{skill.category}</h3>
          <p className="text-sm text-gray-600 mt-1">{skill.items}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
