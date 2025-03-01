import React from "react";
import SkillCard from "./SkillCard";
import react from "../assets/react.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import figma from "../assets/figma.png";
import git from "../assets/git.png";
import java from "../assets/java.png";
import js from "../assets/js.png";
import sql from "../assets/postgresql.png";
import python from "../assets/python.png";
import sw from "../assets/sw.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/expressjs.png";
import mongodb from "../assets/mongodb.png";
import { motion } from "framer-motion";
const Skills = () => {
  const skills = [
    {
      name: "HTML",
      logo: html,
      gradient:
        "bg-gradient-to-b from-[#e34c26] to-[#ecebf4] dark:to-[#1e2127]",
    },
    {
      name: "CSS",
      logo: css,
      gradient:
        "bg-gradient-to-b from-[#264de4] to-[#ecebf4] dark:to-[#1e2127]",
    },
    {
      name: "JavaScript",
      logo: js,
      gradient:
        "bg-gradient-to-b from-[#f0db4f] to-[#ecebf4] dark:to-[#1e2127]",
    },
    {
      name: "ReactJs",
      logo: react,
      gradient:
        "bg-gradient-to-b from-[#49a4bc] to-[#ecebf4] dark:to-[#1e2127]",
    },
    {
      name: "Tailwind CSS",
      logo: tailwind,
      gradient:
        "bg-gradient-to-b from-[#38b2ac] to-[#ecebf4] dark:to-[#1e2127]",
    },
    {
      name: "Node.js",
      logo: node,
      gradient:
        "bg-gradient-to-b from-[#68a063] to-[#ecebf4] dark:to-[#1e2127]",
    },
    {
      name: "Express.js",
      logo: express,
      gradient:
        "bg-gradient-to-b from-[#000000] to-[#ecebf4] dark:to-[#1e2127]",
    },
    {
      name: "MongoDB",
      logo: mongodb,
      gradient:
        "bg-gradient-to-b from-[#4db33d] to-[#ecebf4] dark:to-[#1e2127]",
    },
    {
      name: "PostgreSQL",
      logo: sql,
      gradient:
        "bg-gradient-to-b from-[#336791] to-[#ecebf4] dark:to-[#1e2127]",
    },
    {
      name: "Git",
      logo: git,
      gradient:
        "bg-gradient-to-b from-[#f34f29] to-[#ecebf4] dark:to-[#1e2127]",
    },
    {
      name: "Figma",
      logo: figma,
      gradient:
        "bg-gradient-to-b from-[#f24e1e] to-[#ecebf4] dark:to-[#1e2127]",
    },
    {
      name: "Java",
      logo: java,
      gradient:
        "bg-gradient-to-b from-[#007396] to-[#ecebf4] dark:to-[#1e2127]",
    },
    {
      name: "Python",
      logo: python,
      gradient:
        "bg-gradient-to-b from-[#306998] to-[#ecebf4] dark:to-[#1e2127]",
    },
    {
      name: "SolidWorks",
      logo: sw,
      gradient:
        "bg-gradient-to-b from-[#e74c3c] to-[#ecebf4] dark:to-[#1e2127]",
    },
  ];
  const text = "Skills";
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
      id="Skills"
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
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-10 md:gap-16 xl:gap-20">
        {skills.map((item, index) => (
          <SkillCard
            logo={item.logo}
            gradient={item.gradient}
            name={item.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
