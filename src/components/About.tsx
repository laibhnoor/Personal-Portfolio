const About: React.FC = () => {
    return (
      <section
        id="about"
        className="h-screen flex items-center justify-center bg-gray-100 px-8"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Bio */}
          <div>
            <h2 className="text-4xl font-extrabold text-purple-700 mb-6">
              About
            </h2>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Passionate Web Developer & AI Enthusiast
            </h3>
            <p className="text-gray-700 mb-4">
              With over 2 years of experience in web development, I specialize in
              creating responsive, accessible, and performant web applications
              using modern technologies.
            </p>
            <p className="text-gray-700 mb-6">
              I&apos;m passionate about creating elegant solutions to complex
              problems, and I&apos;m constantly learning new technologies and
              techniques regarding Artificial Intelligence and DevOps to stay at
              the forefront of the ever-evolving tech landscape.
            </p>
  
            {/* Buttons */}
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition"
              >
                Get In Touch
              </a>
              <a
                href="/Laibh-Noor-CV.pdf" // place your CV in `public` folder with this name
                download
                className="px-6 py-3 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition"
              >
                Download CV
              </a>
            </div>
          </div>
  
          {/* Right side - Feature Cards */}
          <div className="space-y-6">
            <div className="p-6 bg-white shadow rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Web and App Development
              </h4>
              <p className="text-gray-600">
                Creating responsive websites and web applications with modern
                frameworks.
              </p>
            </div>
  
            <div className="p-6 bg-white shadow rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                AI and Machine Learning
              </h4>
              <p className="text-gray-600">
                Exploring intelligent systems and data-driven models to solve
                real-world problems using AI and ML techniques.
              </p>
            </div>
  
            <div className="p-6 bg-white shadow rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                DevOps and Cloud
              </h4>
              <p className="text-gray-600">
                Learning to automate, deploy, and scale applications efficiently
                using modern DevOps practices and cloud platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  