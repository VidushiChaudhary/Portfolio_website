import React from "react";

function About() {
  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-16 ">
      <div className="max-w-4xl w-full bg-white/5  shadow-xl rounded-2xl p-8 sm:p-12">
        <h2 className="text-4xl font-bold text-cyan-700 mb-6 text-center italic">About Me</h2>
        <p className="  text-white text-lg leading-relaxed mb-6">
          Hello! I'm <span className="font-semibold text-cyan-600">Vidushi Chaudhary</span>, a passionate and motivated tech enthusiast. 
          I have completed my <span className="font-medium">B.Tech in Computer Science and Engineering</span>. 
          Currently, I'm diving deep into the world of web development, focused on building modern, responsive, and dynamic applications using the 
          <span className="font-medium text-cyan-600"> MERN (MongoDB, Express.js, React, Node.js) stack</span>.
        </p>

        <p className="text-white text-lg leading-relaxed mb-6">
          I enjoy creating intuitive user experiences and writing clean, scalable code. 
          I'm continuously learning and building projects to sharpen my frontend and backend skills, aiming to become a full-stack web developer.
        </p>

        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">Skills</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-white font-medium">
          <li className="bg-black-100 shadow-md shadow-cyan-600 px-4 py-2 rounded-lg text-center">HTML5</li>
          <li className="bg-black-100 shadow-md shadow-cyan-600 px-4 py-2 rounded-lg text-center">CSS3</li>
          <li className="bg-black-100 shadow-md shadow-cyan-600 px-4 py-2 rounded-lg text-center">JavaScript</li>
          <li className="bg-black-100 shadow-md shadow-cyan-600 px-4 py-2 rounded-lg text-center">React.js</li>
          <li className="bg-black-100 shadow-md shadow-cyan-600 px-4 py-2 rounded-lg text-center">Tailwind CSS</li>
          <li className="bg-black-100 shadow-md shadow-cyan-600 px-4 py-2 rounded-lg text-center">Bootstrap</li>
          <li className="bg-black-100 shadow-md shadow-cyan-600 px-4 py-2 rounded-lg text-center">Node.js</li>
          <li className="bg-black-100 shadow-md shadow-cyan-600 px-4 py-2 rounded-lg text-center">MongoDB</li>
          <li className="bg-black-100 shadow-md shadow-cyan-600 px-4 py-2 rounded-lg text-center">Git & GitHub</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
