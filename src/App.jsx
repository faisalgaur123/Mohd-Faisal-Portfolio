import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative w-full min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="relative z-10 bg-brand-bg-soft">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
