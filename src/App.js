import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Project from "./components/project/Project";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Resume />
        <Project />
        <Blog />
        <Contact />
      </main>
    </>
  );
};

export default App;
