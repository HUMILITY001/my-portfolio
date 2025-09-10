import React from "react";
import Projects from "./ProjectList";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <section>
        <Header />
        <Project />
        <About />
        <Contact />
      </section>
    </>
  );
}
