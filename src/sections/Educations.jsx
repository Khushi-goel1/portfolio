import React from 'react';

const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'IGDTUW, Delhi',
    duration: '2022 – 2026',
    details: 'GPA: 8.64',
  },
  {
    degree: 'Senior Secondary (XII), CBSE',
    institution: 'Maharaja Agrasen Model School',
    duration: '2020 – 2022',
    details: '97.25%',
  },
  {
    degree: 'Secondary (X), CBSE',
    institution: 'Maharaja Agrasen Model School',
    duration: '2018 – 2020',
    details: '98.20%',
  }
];

const Educations = () => (
  <section id="educations" className="py-16 bg-white">
    <h2 className="text-3xl font-bold text-center mb-10">Education</h2>
    <div className="space-y-6 max-w-3xl mx-auto">
      {education.map((edu, index) => (
        <div
          key={index}
          className="border-l-4 border-indigo-500 pl-4 py-4 bg-white/40 rounded-lg shadow-sm"
        >
          <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
          <p className="text-sm text-gray-600">{edu.institution}</p>
          <p className="text-sm italic text-gray-500">{edu.duration}</p>
          <p className="text-sm text-gray-700">{edu.details}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Educations;
