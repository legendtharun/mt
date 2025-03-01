import React from "react";
import boat from "../assets/boat1.webp";
import "./About.css";
import { motion } from "framer-motion";
const About = () => {
  const text = "About Me";
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
      id="About"
      className="relative flex justify-center  w-full 
    bg-[#ecebf4] dark:bg-[#0b0a13] text-[#13121c] dark:text-[#e4e3ed] z-0 overflow-hidden p-5"
    >
      <div className="w-full text-left">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className=" flex flex-col gap-5  p-5 md:p-7 lg:p-10">
            <motion.h2
              className="font-anton font-semibold text-2xl md:text-4xl lg:text-6xl"
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
            <motion.p
              className="text-md md:text-xl lg:text-2xl font-atkinson py-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, damping: 0.3, ease: "easeIn" }}
              viewport={{ once: true }}
            >
              Myself Manikandan Tharun , Currently pursuing mechanical
              engineering in reputed organisation in my hometown. Im constantly
              dedicating my passion towards everything I do. I like to sail
              ships or atleast boats 😂 to explore and dredge in domains im not
              familiar with. Have a look at my current skills in the below
              section.
            </motion.p>
          </div>
          <div className="p-16 md:p-7 lg:p-10 flex justify-center items-center">
            <div className="circle-wrapper relative max-w-[400px]">
              <div className="absolute inset-0 bg-[#0b0a13] dark:bg-[#ecebf4] rounded-[80%]"></div>
              <img src={boat} className="w-full  boat" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
