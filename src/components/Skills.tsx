import React, { FC } from "react";
import { FaGraduationCap, FaGithub, FaLinkedin } from "react-icons/fa";

const Skills: FC = () => {
  return (
    <section className="py-16 flex justify-center bg-gray-50">
      {/* Main container with hover effect */}
      <div 
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl 
                   transition-all duration-300 ease-in-out 
                   hover:shadow-2xl hover:shadow-purple-400/30 hover:-translate-y-1"
      >
        
        {/* Education Block at Top */}
        <div className="flex flex-col items-center text-center mb-10">
          <FaGraduationCap className="text-purple-600 text-4xl mb-3" />
          <p className="font-semibold text-2xl">B.Sc. Computer Science</p>
          <p className="text-gray-500 text-sm mt-1">
            SEECS, NUST &middot; 2023 – 2027
          </p>

          {/* Social Links */}
          <div className="flex space-x-5 mt-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              <FaGithub className="text-gray-700 text-2xl hover:text-purple-600 transition" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-gray-700 text-2xl hover:text-purple-600 transition" />
            </a>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-8">
          {/* Frontend */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Typescript", "TailwindCSS", "JavaScript"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium transition-transform transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["Express", "Node.js", "MongoDB", "MySQL", "Flask", "PostgreSql"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium transition-transform transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* AI/ML */}
          <div>
            <h3 className="font-semibold text-lg mb-3">AI/ML</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "Pandas", "LLMs/RAG", "Numpy", "OpenAI API"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium transition-transform transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {["Git", "CI/CD", "Docker", "Vite", "Postman","Thunder Client"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium transition-transform transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;