import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

import { FaLink } from "react-icons/fa6";

function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-neutral-900 pb-4 scroll-mt-20"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div className="flex flex-col items-center">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 gap-4 flex flex-wrap items-start justify-center lg:justify-start 
                     bg-slate-500/50 border-2 border-slate-100/50 p-5 
                       rounded-2xl w-fit md:w-[500px] lg:w-[400px]"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full  flex justify-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 rounded w-[500px]"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="bg-zinc-800 border-2 border-black p-1 rounded-lg mt-2 flex gap-2 items-center text-blue-500 w-fit
                                      hover:bg-neutral-200 transition-all duration-400 "
              >
                <FaLink /> View project's demo
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
