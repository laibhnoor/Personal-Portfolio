import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="font-sans scroll-smooth bg-gray-50">
      <Navbar />
      

      <section
        id="home"
        className="h-screen flex items-center justify-center bg-white text-gray-900 text-5xl font-bold"
      >
        <Home/>
      </section>

      <About />

      <section
        id="skills"
        className="h-screen flex items-center justify-center bg-gray-100 text-gray-900 text-5xl font-bold"
      >
        <Skills/>
      </section>

      <section
        id="projects"
        className="h-screen flex items-center justify-center bg-white text-gray-900 text-5xl font-bold"
      >
        Projects
      </section>

      <section id="experience" className="h-screen bg-gray-100 flex items-center justify-center">
         <Experience />
      </section>

    
    </div>
  );
}

export default App;
