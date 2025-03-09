import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiNextui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FaSass } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { animate, motion } from "framer-motion";

import reactQuery from "../assets/react-query.png";
import styledComponents from "../assets/styled-components.png";
import framerMotion from "../assets/framer-motion.png";

const iconVariants = (initial, duration) => ({
  initial: { y: initial },
  animate: {
    y: [initial, -initial],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <section
      id="technologies"
      className="border-b border-neutral-800 pb-24 scroll-mt-20"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(-10, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaHtml5 className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(10, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaCss3 className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(-10, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoJavascript className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(10, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(-10, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl " />
        </motion.div>
        <motion.div
          variants={iconVariants(10, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img className="w-[73px]" src={reactQuery} alt="" />
        </motion.div>
        <motion.div
          variants={iconVariants(-10, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiRedux className="text-7xl text-purple-800" />
        </motion.div>
        <motion.div
          variants={iconVariants(10, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(-10, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(10, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaBootstrap className="text-7xl text-purple-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(-10, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMui className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(10, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiNextui className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(-10, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaSass className="text-7xl text-pink-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(10, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img className="w-[73px]" src={styledComponents} alt="" />
        </motion.div>
        <motion.div
          variants={iconVariants(-10, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img className="w-[70px]" src={framerMotion} alt="" />
        </motion.div>
        <motion.div
          variants={iconVariants(10, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGitAlt className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(-10, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGithub className="text-7xl text-neutral-300" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Technologies;
