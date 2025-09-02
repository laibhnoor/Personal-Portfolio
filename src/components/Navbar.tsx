import { useEffect, useState } from "react";

const sections = ["home", "about", "skills", "projects", "Experience"];

const Navbar: React.FC = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActive(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        {/* Left Side - Portfolio Name */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
          Laibh&apos;s Portfolio
        </h1>

        {/* Right Side - Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`capitalize transition-colors duration-300 ${
                  active === section
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
