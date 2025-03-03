import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import "./Hero.css";
import { SiWhatsapp } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import myImage from "../assets/myImage1.png";
const Hero = ({ currentTheme }) => {
  const [tapEffect, setTapEffect] = useState(false);
  const checkDot = (i) => {
    if (i < 49) {
      return "block";
    } else if (i > 48 && i < 64) {
      return "hidden md:block";
    } else if (i > 63 && i < 100) {
      return "hidden lg:block";
    } else {
      return "hidden xl:block";
    }
  };
  return (
    <section
      id="Home"
      className="relative flex justify-center items-center w-full 
    bg-[#ecebf4] dark:bg-[#0b0a13] text-[#13121c] dark:text-[#e4e3ed] z-0 overflow-hidden"
    >
      <motion.div
        className="absolute top-0 left-0 z-0  grid grid-cols-7 md:grid-cols-8
      lg:grid-cols-10 xl:grid-cols-12 gap-10 p-3 opacity-80 pointer-events-none xs:hidden"
        initial={{ left: -100, opacity: 0 }}
        whileInView={{ left: 0, opacity: 1 }}
        transition={{ duration: 0.6, damping: 0.3, ease: "easeIn" }}
        viewport={{ once: true }}
      >
        {Array.from({ length: 144 }, (_, i) => (
          <div
            className={`w-[3px] h-[3px] dark:bg-[#ecebf4] bg-[#0b0a13] 
            ${checkDot(i)}`}
            key={i}
          ></div>
        ))}
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-0 z-0  grid 
      grid-cols-7 md:grid-cols-8
      lg:grid-cols-10 xl:grid-cols-12 gap-10 p-3 opacity-80 pointer-events-none xs:hidden"
        initial={{ right: -100, opacity: 0 }}
        whileInView={{ right: 0, opacity: 1 }}
        transition={{ duration: 0.6, damping: 0.3, ease: "easeIn" }}
        viewport={{ once: true }}
      >
        {Array.from({ length: 144 }, (_, i) => (
          <div
            className={`w-[3px] h-[3px] dark:bg-[#ecebf4] bg-[#0b0a13] ${checkDot(
              i
            )}`}
            key={i}
          ></div>
        ))}
      </motion.div>
      <div className="w-full h-full grid xsxxl:grid-cols-1 md:grid-cols-3">
        <div className="section-1 p-5 md:p-7 lg:p-10 md:col-span-2 flex flex-col gap-3 ">
          <motion.p
            className="catchy font-anton text-[3rem] md:text-[4rem] lg:text-[5rem] font-semibold flex gap-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, damping: 0.3, ease: "easeIn" }}
            viewport={{ once: true }}
          >
            I'm
            <span
              className="bg-gradient-to-r from-[#d1cfe8] via-[#8a81c9] to-[#3a308f] 
  dark:from-[#e4e3ed] dark:via-[#9f97d8] dark:to-[#513ee0] 
             bg-clip-text text-transparent"
            >
              M T
            </span>
          </motion.p>
          <p className="catchy font-atkinson text-3xl md:text-5xl lg:text-6xl font-semibold flex flex-col ">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, damping: 0.3, ease: "easeIn" }}
              viewport={{ once: true }}
            >
              A Passionate but Professional <br />
              <ReactTyped
                strings={["Web Developer", "Web Designer", "UI/UX Designer"]}
                typeSpeed={80}
                backSpeed={50}
                loop
                className="text-pretty text-[#513ee0] "
              />
            </motion.span>
          </p>
          <motion.p
            className="font-atkinson text-md md:text-lg lg:text-xl font-semibold flex flex-col 
          text-pretty"
            style={{ wordSpacing: "3px" }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, damping: 0.3, ease: "easeIn" }}
            viewport={{ once: true }}
          >
            Crafting seamless digital experiences with precision and passion. As
            a dedicated web developer, I transform ideas into reality with
            clean, efficient, and innovative solutions. Let's build something
            remarkable together.
          </motion.p>
          <div className="p-2 z-[20]">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, damping: 0.3, ease: "easeIn" }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                rotate: "5deg",
                transition: { duration: 0.2, ease: "easeInOut" },
              }}
              onTap={() => {
                setTapEffect((prev) => !prev);
              }}
              animate={
                tapEffect
                  ? {
                      scale: 1.1,
                      rotate: "5deg",
                      transition: { duration: 0.2 },
                    }
                  : { scale: 1, rotate: "0deg", transition: { duration: 0.2 } }
              }
              className="py-4 w-[200px]"
            >
              <Link
                className="bg-[#513ee0] text-[#e4e3ed] font-anton p-3 text-lg md:text-xl  rounded-xl
            hover:-translate-y-2 transition-transform duration-200 ease-in hover:cursor-pointer"
                to="About"
                smooth={true}
                duration={500}
                offset={-100}
              >
                Want to know more?
              </Link>
            </motion.div>
          </div>
          <div className="flex justify-start items-center gap-5 px-5 z-[20]">
            <SiWhatsapp
              className="text-md hover:scale-125 transition-transform duration-200 ease-in hover:cursor-pointer"
              onClick={() =>
                (window.location.href = "https://wa.me/9514426346")
              }
            />
            <FaInstagram
              className="text-md hover:scale-125 transition-transform duration-200 ease-in hover:cursor-pointer"
              onClick={() =>
                (window.location.href =
                  "https://www.instagram.com/.mxnithxrxn.?igsh=Y2N2MXo1eWg0MHg0")
              }
            />
            <FaLinkedin
              className="text-md hover:scale-125 transition-transform duration-200 ease-in hover:cursor-pointer"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/mani-tharun05?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")
              }
            />
            <FaGithub
              className="text-md hover:scale-125 transition-transform duration-200 ease-in hover:cursor-pointer"
              onClick={() =>
                (window.location.href = "https://github.com/legendtharun/")
              }
            />
            <BiLogoGmail
              className="text-md hover:scale-125 transition-transform duration-200 ease-in hover:cursor-pointer"
              onClick={() =>
                (window.location.href = "mailto:manikandan211205@gmail.com")
              }
            />
          </div>
        </div>
        <div
          className="relative  md:col-span-1 h-auto 
        "
        >
          <div
            className="flex w-full h-full items-center justify-center inset-0 p-3 pt-20
          "
          >
            <img
              src={myImage}
              className="w-full min-w-[400px] scale-110  max-w-[500px]"
              style={{
                background: "transparent",
                filter:
                  currentTheme === "dark"
                    ? "drop-shadow(2px 0 0 #e4e3ed) drop-shadow(0 2px 0 #e4e3ed) drop-shadow(-2px 0 0 #e4e3ed) drop-shadow(0 -2px 0 #e4e3ed)"
                    : "drop-shadow(2px 0 0 #13121c) drop-shadow(0 2px 0 #13121c) drop-shadow(-2px 0 0 #13121c) drop-shadow(0 -2px 0 #13121c)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
