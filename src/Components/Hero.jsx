import React from "react";
import banner from "../assets/banner.jpg";

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-r from-purple-700 via-pink-600 to-pink-400 text-white min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-12 px-4 sm:px-8 lg:px-16 py-12">

      <div className="max-w-xl space-y-6 text-center lg:text-left">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          Hi, I'm Lamia <br />
          React Frontend Developer
        </h1>

        <p className="sm:text-lg text-base opacity-90">
          Building Modern Web Applications
        </p>

        <p className="text-sm sm:text-base leading-relaxed">
          Specializing in React, JavaScript, and modern frontend technologies.
          Creating responsive, performant and user-friendly web applications that deliver exceptional experiences
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">

          <button className="px-6 py-3 bg-green-500 text-white rounded-md font-semibold hover:bg-green-600 transition">
            View My Work
          </button>

          <button className="px-6 py-3 border border-white rounded-full font-bold hover:bg-white hover:text-black transition">
            Get In Touch
          </button>

        </div>

      </div>

      <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-2xl shadow-xl border-4 border-white">

        <img
          src={banner}
          alt="Hero Banner"
          className="object-cover w-full h-full hover:scale-110 transition duration-500"
        />

      </div>

    </section>
  );
};

export default Hero;