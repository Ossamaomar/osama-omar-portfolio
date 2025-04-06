import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="border-b border-neutral-900 pb-4 scroll-mt-20 w-full"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        About
        <span className="text-purple-800"> Me</span>
      </motion.h2>
      <div className="flex gap-4 justify-center items-center flex-col md:flex-row md:items-start">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="md:w-[35%]"
        >
          <div className="">
            <img className="rounded-2xl w-full" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <div className="md:w-[65%]">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 0.5 }}
              className=""
            >
              {ABOUT_TEXT}
            </motion.p>
        </div>
      </div>
    </section>
  );
}

export default About;
