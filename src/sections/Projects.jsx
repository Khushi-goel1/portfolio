import React from 'react';

const projects = [
  {
    name: 'AlgoView',
    description: 'Visualizer for real-time sorting animations with speed/audio controls.',
    tech: 'HTML, CSS, JS',
    link: 'https://github.com/Khushi-goel1/AlgoView-Algorithm-Visualizer.git'
  },
  {
    name: 'ReadBerry',
    description: 'Book recommender using collaborative + popularity filters.',
    tech: 'Flask, Python, JavaScript',
    link: 'https://github.com/Khushi-goel1/Book-Recommender-ReadBerry.git'
  },
  {
    name: 'Medical Expense Estimation',
    description: 'Predictive model using linear regression for cost estimation.',
    tech: 'Scikit-Learn, Matplotlib, Seaborn',
    link: 'https://github.com/Khushi-goel1/Medical-Expense-Estimation.git'
  }
];

const Projects = () => (
  <section id="projects" className="py-16">
    <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((project, i) => (
        <div
          key={i}
          className="bg-white/30 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
          <p className="mt-2 text-sm text-gray-600">{project.description}</p>
          <p className="text-xs text-purple-700 mt-1 italic">{project.tech}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 text-sm text-indigo-600 hover:underline"
          >
            View on GitHub →
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
