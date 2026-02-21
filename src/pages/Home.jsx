import React from "react";
import About from "../Components/About";
import SkillCard from "../Components/SkilCard";
import Contact from "../Components/Contact";
import Hero from "../Components/Hero";
import Services from "../Components/Services";



const Home = () => {
  return (
    <div>
      {/* HOME SECTION */}
      <section id="home" className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-blue-100">
        <Hero></Hero>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-green-100">
        <About></About>
      </section>

      {/* TECH STACK SECTION */}
      <section id="tech" className="h-screen flex items-center justify-center bg-purple-100">
        <SkillCard></SkillCard>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="h-screen flex items-center justify-center bg-yellow-100">
        <Services></Services>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="h-screen flex items-center justify-center bg-pink-100">
        <Contact></Contact>
      </section>
    
  
    

    </div>
  );
};

export default Home;
