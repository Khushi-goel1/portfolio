// import React from 'react';
// import pic from '../assets/formal.jpg';

// const Hero = () => {
//   return(
//     <section className='relative'>
//       <img src={pic} className='absolute scale-50' alt="img"/>
//       <p className='bg-clip-text font-heading font-bold text-gray text-8xl -z-10'>PROFESSIONAL PORTFOLIO</p>

//     </section>
//   )
// };

// export default Hero;

import React from 'react';
import pic from '../assets/formal.jpg';

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-20 bg-gradient-to-br from-white via-gray-100 to-white">
      <div className="text-center md:text-left w-full md:w-1/2 space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Hi, I'm <span className="text-indigo-600">Khushi Goel</span>
        </h1>
        <p className="text-lg text-gray-600">Web Developer | ML Enthusiast | Community Leader</p>
        <p className="text-sm text-gray-500">Crafting elegant solutions, building real-world impact.</p>
        <a
          href="#projects"
          className="inline-block mt-4 px-6 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-700 transition"
        >
          View My Work
        </a>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-white">
          <img src={pic} alt="Khushi Goel" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

