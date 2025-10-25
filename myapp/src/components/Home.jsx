import '../index.css';
import Section from "./Section";
import Navbar from "./Navbar";
import Imgs from "./SkillsImgs";
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Contact from "./Contact";


function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll relative">
      <Navbar />

      {/* Home Section */}
      <Section
        id="home"
        className="h-screen" // <-- add this
        bg="bg-gradient-to-b from-gradientStart to-gradientEnd dark:from-gray-800 dark:to-gray-900"
      >
        <div className="flex flex-col justify-center items-center text-center min-h-screen px-4 sm:px-6 md:px-12">
        <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-12 h-full">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-white dark:text-gray-100 leading-tight">
            Gerald Freislich
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 dark:text-gray-300 max-w-xl mx-auto mt-4">
            A Junior software developer with skills ranging from designing and implementing
            machine learning pipelines to full stack websites.
          </p>
          <div className="mt-8">
            <Imgs />
          </div>
        </div>
        </div>
      </Section>

      {/* About Section */}
      <Section
          id="about"
          bg="bg-gradient-to-b from-primary to-secondary dark:from-gray-800 dark:to-gray-900"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-6 md:px-12 py-8">
            <div className="flex flex-col bg-gradient-to-b from-primary to-secondary dark:from-gray-800 dark:to-gray-900
                            rounded-2xl shadow-md p-6">
              <Experience />
            </div>

            <div className="flex flex-col bg-gradient-to-b from-accent to-primary dark:from-gray-800 dark:to-gray-900
                            rounded-2xl shadow-md p-6">
              <Education />
            </div>
          </div>
        </Section>

      {/* Projects Section */}
      <Section
        id="projects"
        bg="bg-gradient-to-b from-accent to-primary dark:from-gray-800 dark:to-gray-900"
      >
        <Projects />
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        bg="bg-gradient-to-b from-accent to-primary dark:from-gray-800 dark:to-gray-900"
      >
        <Contact />
      </Section>
    </div>
  );
}

export default Home;