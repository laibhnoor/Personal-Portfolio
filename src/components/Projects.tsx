import React from "react";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveDemo: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "Anonym Message",
    description: "A full-featured web app where the user can receive anonymous messages.",
    image: "/projects/anonym.png",
    tech: ["Next.js", "TypeScript", "MongoDB", "Gemini", "ShadCn", "Zod"],
    liveDemo: "#",
    github: "#"
  },
  {
    title: "Economics Dashboard",
    description: "Check macroeconomics indicators for various countries.",
    image: "/projects/economics.png",
    tech: ["React.js", "Recharts.js", "Tailwind CSS"],
    liveDemo: "#",
    github: "#"
  },
  {
    title: "TaleShop - Online Bookstore",
    description: "Online bookstore with user and admin dashboards.",
    image: "/projects/taleshop.png",
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
    liveDemo: "#",
    github: "#"
  },
   {
    title: "Another Project",
    description: "Description for another great project goes here.",
    image: "/projects/placeholder.png", // Assuming a placeholder image
    tech: ["Svelte", "GraphQL", "PostgreSQL"],
    liveDemo: "#",
    github: "#"
  },
];

const Projects: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      // Scroll by the width of one card plus the gap
      const scrollAmount = direction === "left" ? scrollLeft - 344 : scrollLeft + 344; // 320px card + 24px gap
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full py-16 bg-gray-50">
      {/* Centering container with max-width */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Featured <span className="text-purple-600">Projects</span>
        </h2>
        <div className="relative group">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-4"
          >
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="min-w-[320px] max-w-[320px] bg-white rounded-2xl shadow-lg p-5 flex-shrink-0 
                           transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1.5"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover rounded-lg mb-4"
                />
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-semibold bg-purple-100 text-purple-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-1.5">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 h-10">{project.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-purple-600 text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white rounded-full p-2
                       hover:bg-black/50 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
          >
            <FaChevronLeft size={28} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white rounded-full p-2
                       hover:bg-black/50 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
          >
            <FaChevronRight size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;