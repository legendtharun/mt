import React from "react";
import ProjectCard from "./ProjectCard";
import marketplacehub from "../assets/marketplacehub.png";
import flames from "../assets/flames.png";
import tunip from "../assets/tunip.png";
import { motion } from "framer-motion";
const Projects = ({ currentTheme }) => {
  const projects = [
    {
      name: "Fun Flames Calculator",
      image: flames,
      github: "https://github.com/legendtharun/flames",
      deploy: "https://legendtharun.github.io/flames/",
    },
    {
      name: "MarketPlaceHub",
      image: marketplacehub,
      github: "https://github.com/legendtharun/marketplacehub/",
      deploy: "",
    },
    {
      name: "CRM software",
      image: tunip,
      github: "",
      deploy:
        "https://drive.google.com/file/d/12ShcSDlyQqmzLYa4fjwnrsdxe8RdGDgX/view?usp=sharing",
    },
  ];
  const text = "Projects";
  const letterVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: ({ i, letter }) => {
      if (letter === " ") {
        // Skip the animation for spaces
        return { opacity: 1, x: 0, transition: { duration: 0 } };
      }
      return {
        opacity: 1,
        x: 0,
        transition: { duration: 0.1, delay: i * 0.05, ease: "easeOut" },
      };
    },
  };

  return (
    <section
      id="Projects"
      className="relative flex flex-col gap-3 items-center justify-center  w-full 
  bg-[#ecebf4] dark:bg-[#0b0a13] text-[#13121c] dark:text-[#e4e3ed] z-0 overflow-hidden p-5 md:p-7 lg:p-10"
    >
      <motion.h2
        className="font-anton text-[2rem] md:text-[3rem] lg:text-[5rem] mr-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            custom={{ i: index, letter: char }}
            variants={letterVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.h2>
      <div className="grid ms:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-5">
        {projects.map((item, index) => (
          <ProjectCard
            image={item.image}
            name={item.name}
            github={item.github}
            deploy={item.deploy}
            key={index}
            currentTheme={currentTheme}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
