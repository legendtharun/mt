import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "hamburger-react";
import { Sun, Moon } from "lucide-react";
const Navbar = ({ currentTheme, setTheme, toggleTheme }) => {
  const [menu, setmenu] = useState(false);
  const menuItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Skills" },
    { name: "Projects" },
    { name: "Contact" },
  ];
  return (
    <nav
      className="bg-[#ecebf4] dark:bg-[#0b0a13] text-[#13121c] dark:text-[#e4e3ed]
     w-full  p-5 flex justify-center items-center z-50 sticky top-0"
    >
      <button className="font-anton text-3xl font-bold tracking-wider">
        M T
      </button>
      <div className="flex space-x-4 m-auto font-atkinson text-lg gap-5">
        {menuItems.map((item, index) => (
          <Link
            className="nav-link hover:scale-105 transition-transform duration-150 hover:cursor-pointer
        rounded-xl p-2 z-50 hidden md:flex hover:shadow-[0_4px_10px_#513ee0]"
            key={index}
            to={item.name}
            smooth={true}
            duration={500}
            offset={-100}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="rounded-lg  flex items-center justify-center  text-[#13121c] dark:text-[#e4e3ed] mx-2">
        {currentTheme === "dark" ? (
          <Sun
            width="40px"
            height="40px"
            className={`${currentTheme === "light" ? "bg-slate-200" : ""} 
                  rounded-lg p-2`}
            onClick={toggleTheme}
          />
        ) : (
          <Moon
            width="40px"
            height="40px"
            className={`${currentTheme === "dark" ? "bg-slate-200" : ""} 
                  rounded-lg p-3`}
            onClick={toggleTheme}
          />
        )}
      </div>
      <button
        className="hidden md:flex py-3 px-4 bg-[#513ee0] text-white rounded-2xl font-anton hover:scale-105 transition-transform
      duration-200 ease-in-out hover:shadow-[0_4px_10px_#513ee0] "
        onClick={() =>
          (window.location.href =
            "https://drive.google.com/file/d/1RdHCqbmrD4DXP2mdCYcZqKv5DDcWsIy7/view?usp=sharing")
        }
      >
        Get Resume
      </button>

      <div className="flex h-full items-center justify-center md:hidden">
        <Hamburger toggled={menu} toggle={setmenu} />
      </div>
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setmenu(!menu)}
            className="absolute h-screen flex items-end justify-end w-full top-0 right-0 bg-white bg-opacity-10 backdrop-blur
      dark:bg-black dark:bg-opacity-60 overflow-hidden z-50"
          >
            <motion.div
              initial={{ right: "-100%" }}
              animate={{ right: 0 }}
              exit={{ right: "-100%" }}
              onClick={(e) => e.stopPropagation()}
              transition={{ duration: 0.4, damping: 0.5, ease: "easeInOut" }}
              className="absolute flex flex-col items-start h-full z-50   w-[50%] bg-[#ecebf4] dark:bg-[#0b0a13] 
              text-[#13121c] dark:text-[#e4e3ed]"
            >
              <div className="w-full h-[10vh] flex items-center px-2">
                <Hamburger toggled={menu} toggle={setmenu} />
              </div>
              <div className="mob-nav w-full items-center justify-center pt-10">
                <ul className="flex flex-col w-full items-center gap-7 m-0">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.name}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      className="p-0 w-full"
                    >
                      <motion.li
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        onClick={() => {
                          setmenu(!menu);
                        }}
                        transition={{
                          duration: 0.2,
                          damping: 0.2,
                          delay: 0.2 * index,
                        }}
                        key={index}
                        className={`mx-2 w-full p-5 hover:bg-white cursor-pointer 
                          hover:text-[#1a3055] w-full ${
                            window.location.pathname === `${item.path}`
                              ? "bg-white text-[#1a3055]"
                              : ""
                          }`}
                      >
                        {item.name}
                      </motion.li>
                    </Link>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
