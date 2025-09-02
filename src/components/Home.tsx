import React, {FC} from "react";


const Home: FC = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-white px-4"
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
        Hi, I'm <span className="text-purple-600">Laibh Noor</span>
      </h1>

      {/* Subtext */}
      <p className="text-base md:text-lg text-gray-600 max-w-lg mb-5 leading-relaxed">
        Passionate about web development, AI, and DevOps. Always learning, always building.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <a
          href="#projects"
          className="px-5 py-2.5 rounded-full bg-purple-600 text-white text-sm md:text-base font-medium shadow-sm hover:bg-purple-700 transition"
        >
          Projects
        </a>
        <a
          href="/resume.pdf"
          download
          className="px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 text-sm md:text-base font-medium hover:bg-gray-100 transition"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
