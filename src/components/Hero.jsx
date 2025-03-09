import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/mePNG.png";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="border-b border-neutral-900 pb-4 lg:mb-36 pt-16"
    >
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Osama Omar
            </motion.h1>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="bg-gradient-to-r from-pink-500 via-slate-400 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              FRONT END DEVELOPER
            </motion.span>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                {HERO_CONTENT}
              </p>

              <a
                href="/cv.pdf" // Path to your CV file
                download="Osama_CV.pdf" // Suggested filename
                className="bg-white w-fit text-black p-3 rounded-2xl flex gap-1 items-center hover:bg-black hover:text-white transition-all duration-400"
              >
                Download My CV
                <FaDownload />
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="w-[600px]"
              src={profilePic}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
