import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import AOS from "aos";
import "aos/dist/aos.css"
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({duration: 1000})
  }, []);

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;
