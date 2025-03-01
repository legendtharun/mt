import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  const [currentTheme, setTheme] = useState(getInitialTheme());
  useEffect(() => {
    applyTheme();
  }, [currentTheme]);

  function getInitialTheme() {
    let userTheme = null;
    let systemTheme = true;
    if (typeof window !== "undefined" && window.localStorage) {
      userTheme = localStorage.getItem("theme");
      systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    return userTheme || (systemTheme ? "dark" : "light");
  }

  function applyTheme() {
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  function toggleTheme() {
    setTheme(currentTheme === "dark" ? "light" : "dark");
    applyTheme();
  }

  return (
    <>
      <Navbar
        currentTheme={currentTheme}
        setTheme={setTheme}
        toggleTheme={toggleTheme}
      />
      <Hero currentTheme={currentTheme} />
      <About />
      <Skills />
      <Projects currentTheme={currentTheme} />
      <Footer currentTheme={currentTheme} />
    </>
  );
}

export default App;
