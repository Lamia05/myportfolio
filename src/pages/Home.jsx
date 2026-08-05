import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Services from "../Components/Services";
import SelectedWorks from "../Components/SelectedWorks";
import Contact from "../Components/Contact";
import SkillCard from "../Components/SkilCard";

const Home = () => {
  return (
    <div>

      {/* HERO */}
      <section id="home">
        <Hero />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* TECH STACK */}
      <section id="tech">
        <SkillCard></SkillCard>
      </section>

      {/* SERVICES */}
      <section id="services">
        <Services />
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <SelectedWorks />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

    </div>
  );
};

export default Home;