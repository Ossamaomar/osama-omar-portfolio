import { useState, useEffect } from "react";
import logo from "../assets/my-logo3.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        // Ensure "contact" gets activated when reaching the bottom
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id") || "";
        } else if (
          index === sections.length - 1 &&
          window.innerHeight + window.scrollY >= document.body.scrollHeight - 10
        ) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center py-4 px-8 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/10 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img className="w-[150px]" src={logo} alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-white">
        {["home", "about", "technologies", "projects", "contact"].map(
          (section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`hover:text-purple-600 transition px-3 py-1 rounded-xl ${
                  activeSection === section ? "bg-slate-200 text-slate-900" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          )
        )}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu with Glassmorphism Effect */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute top-[78px] left-0 w-full bg-slate-950 rounded-b-2xl shadow-md p-4 md:hidden"
          >
            <ul className="flex flex-col items-center gap-4 text-white">
              {["home", "about", "technologies", "projects", "contact"].map(
                (section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className={`hover:text-purple-400 transition ${
                        activeSection === section ? "text-purple-400" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
