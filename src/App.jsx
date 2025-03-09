import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-400 selection:text-slate-700">
      {/* Background */}
      <div className="fixed inset-0 bg-slate-950 overflow-hidden -z-10">
        <div
          className="absolute bottom-0 right-0 top-[-10%] h-[500px] w-[500px] rounded-full"
          style={{
            left: "-20%",
            background:
              "radial-gradient(circle farthest-side, rgba(255,0,182,0.15), rgba(255,255,255,0))",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle farthest-side, rgba(255,0,182,0.15), rgba(255,255,255,0))",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <Navbar />
        <div className="px-8">
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
