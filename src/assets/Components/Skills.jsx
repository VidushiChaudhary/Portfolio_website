import React from "react";
import Image1 from "../images/html.png";
import Image2 from "../images/CSS_icon.png";
import Image3 from "../images/js.png";
import Image4 from "../images/react_logo.png";
import Image5 from "../images/Tailwind_logo.png";
import Image6 from "../images/Bootstrap_logo.svg.png";
import Image7 from "../images/Material_UI.png";
import Image8 from "../images/vscode.svg";
import Image9 from "../images/download.png";
import Image10 from "../images/github-11-xxl.png";

const skills = [
  { image: Image1, name: "HTML5" },
  { image: Image2, name: "CSS3" },
  { image: Image3, name: "JavaScript" },
  { image: Image4, name: "React.js" },
  { image: Image5, name: "Tailwind CSS" },
  { image: Image6, name: "Bootstrap" },
  { image: Image7, name: "Material-UI" },
  { image: Image8, name: "VS Code" },
  { image: Image9, name: "Git" },
  { image: Image10, name: "GitHub" },
];

function Skills() {
  return (
    <section className="py-16 px-4  relative z-10">
      <h2 className="text-5xl md:text-6xl font-semibold italic text-white text-center mb-12">
        Skills --
      </h2>
      <div className="max-w-6xl mx-auto bg-white/5 rounded-2xl p-8 md:p-12 shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-black shadow-md shadow-cyan-700  rounded-md p-4 text-white hover:scale-105 transition-transform duration-300"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="h-10 w-10 object-contain"
              />
              <span className="text-base md:text-lg font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

