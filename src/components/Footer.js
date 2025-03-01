import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
const Footer = () => {
  const [whatsappHover, setwhatsappHover] = useState(false);
  const [IgHover, setIgHover] = useState(false);
  const [LinHover, setLinHover] = useState(false);
  const [GhHover, setGhHover] = useState(false);
  return (
    <footer
      id="Contact"
      className="flex justify-center items-center p-5 md:p-7 lg:p-10
    bg-[#ecebf4] dark:bg-[#0b0a13] text-[#13121c] dark:text-[#e4e3ed]
     w-full  "
    >
      <div className="logo-wrapper mr-auto">
        <button className="font-anton text-3xl font-bold tracking-wider">
          M T
        </button>
      </div>
      <div className="contact flex xsxl:flex-col items-center gap-5  justify-center mr-auto px-3">
        <motion.button
          onHoverStart={() => setwhatsappHover(true)}
          onHoverEnd={() => setwhatsappHover(false)}
          className="flex justify-center items-center gap-1 font-atkinson p-3 bg-[#25D366] text-[#e4e3ed]
           rounded-2xl
          dark:bg-opacity-80 overflow-hidden"
          onClick={() => (window.location.href = "https://wa.me/9514426346")}
        >
          <SiWhatsapp />
          <motion.span
            className="inline-block whitespace-nowrap overflow-hidden"
            animate={
              whatsappHover
                ? { width: "80px", opacity: 1 }
                : { width: 0, opacity: 0 }
            }
            transition={{ duration: 0.5, damping: 0.4, ease: "easeInOut" }}
          >
            Whatsapp
          </motion.span>
        </motion.button>
        <motion.button
          onHoverStart={() => setIgHover(true)}
          onHoverEnd={() => setIgHover(false)}
          className="flex justify-center items-center gap-1 font-atkinson p-3 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] via-[#8134AF] to-[#515BD4]
        text-[#e4e3ed] rounded-2xl bg-opacity-80"
          onClick={() =>
            (window.location.href =
              "https://www.instagram.com/.mxnithxrxn.?igsh=Y2N2MXo1eWg0MHg0")
          }
        >
          <FaInstagram />
          <motion.span
            className="inline-block whitespace-nowrap overflow-hidden"
            animate={
              IgHover ? { width: "80px", opacity: 1 } : { width: 0, opacity: 0 }
            }
            transition={{ duration: 0.5, damping: 0.4, ease: "easeInOut" }}
          >
            Instagram
          </motion.span>
        </motion.button>
        <motion.button
          onHoverStart={() => setLinHover(true)}
          onHoverEnd={() => setLinHover(false)}
          className="flex justify-center items-center gap-1 font-atkinson p-3 bg-[#0077B5]
        text-[#e4e3ed] rounded-2xl dark:bg-opacity-80"
          onClick={() =>
            (window.location.href =
              "https://www.linkedin.com/in/mani-tharun05?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")
          }
        >
          <FaLinkedin />
          <motion.span
            className="inline-block whitespace-nowrap overflow-hidden"
            animate={
              LinHover
                ? { width: "80px", opacity: 1 }
                : { width: 0, opacity: 0 }
            }
            transition={{ duration: 0.5, damping: 0.4, ease: "easeInOut" }}
          >
            LinkedIn
          </motion.span>
        </motion.button>
        <motion.button
          onHoverStart={() => setGhHover(true)}
          onHoverEnd={() => setGhHover(false)}
          className="flex justify-center items-center gap-1 font-atkinson p-3 bg-[#13121c]
        text-[#e4e3ed] rounded-2xl dark:bg-opacity-80"
          onClick={() =>
            (window.location.href = "https://github.com/legendtharun/")
          }
        >
          <FaGithub />
          <motion.span
            className="inline-block whitespace-nowrap overflow-hidden"
            animate={
              GhHover ? { width: "80px", opacity: 1 } : { width: 0, opacity: 0 }
            }
            transition={{ duration: 0.5, damping: 0.4, ease: "easeInOut" }}
          >
            Github
          </motion.span>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
