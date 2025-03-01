import React, { useState, useEffect } from "react";
import logo from "../assets/wee2b_white_nobg.png";
import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
const HeaderNew = ({ currentTheme, setTheme, toggleTheme }) => {
  const [menu, setmenu] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Why us?", path: "/why-us" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" },
  ];
  useEffect(() => {
    // When overlay is shown, disable scrolling on the body
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Clean up in case the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);
  return (
    <header className="h-[10vh] z-50 flex items-center justify-between px-4 bg-[#1a3055] dark:bg-[#0f0c40] text-white font-sans sticky top-0">
      <div className="logo w-[180px]  p-1">
        <img src={logo} alt="Wee2b" className="w-full h-full" />
      </div>
      <div className="nav hidden lg:flex h-full  items-center m-auto">
        <ul className="flex items-center gap-2 px-5">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`mx-2 ${
                window.location.pathname === `${item.path}` ? "active" : ""
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-full flex items-center justify-end gap-3">
        <div className="rounded-lg  flex items-center justify-center bg-white text-[#1a3055]">
          <Sun
            width="40px"
            height="40px"
            className={`${currentTheme === "light" ? "bg-slate-200" : ""} 
            rounded-lg p-3`}
            onClick={toggleTheme}
          />
          <Moon
            width="40px"
            height="40px"
            className={`${currentTheme === "dark" ? "bg-slate-200" : ""} 
            rounded-lg p-3`}
            onClick={toggleTheme}
          />
        </div>
        <button
          className="btn hidden lg:flex bg-white font-semibold text-[#1a3055] px-4 py-2 rounded-md 
            hover:bg-slate-200 transition-all duration-200"
        >
          <span className="">Get Started</span>
        </button>
        <div className="flex h-full items-center justify-center lg:hidden">
          <Hamburger toggled={menu} toggle={setmenu} />
        </div>
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
              className="absolute flex flex-col items-start h-full z-50   w-[50%] bg-[#1a3055] dark:bg-[#0f0c40]"
            >
              <div className="w-full h-[10vh] flex items-center px-2">
                <Hamburger toggled={menu} toggle={setmenu} />
              </div>
              <div className="mob-nav w-full items-center justify-center pt-10">
                <ul className="flex flex-col w-full items-center gap-7 m-0">
                  {menuItems.map((item, index) => (
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
                      className={`mx-2 w-full p-5 hover:bg-white cursor-pointer hover:text-[#1a3055] ${
                        window.location.pathname === `${item.path}`
                          ? "bg-white text-[#1a3055]"
                          : ""
                      }`}
                    >
                      {item.name}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderNew;
