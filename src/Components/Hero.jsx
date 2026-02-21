import React from 'react'
import banner from "../assets/banner.jpg"

const Hero= () => {

    return (
        <section className="bg-gradient-to-r from-purple-700 via-pink-600 to-pink-400 text-white min-h-screen flex items-center justify-between px-8 md:px-16">
        <div className="max-w-xl space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight">Hi, I'm Lamia<br></br>React Frontend Developer</h1>
            <p className="text-lg opacity-90">Building Modern Web Applications</p>
            <p className="gap-6">Specializing in React, JavaScript, and modern frontend<br></br> technologies. Creating responsive, performent and user-<br></br>friendly web applications that deliver exceptional experiences</p>

            <div className="flex gap-4 pt-4">

            <button className="px-6 py-2 bg-green-500 text-white rounded-md font-semibold hover:bg-green-600 transition">View My Work</button>
            <button className="px-6 py-3 border border-white rounded-full font-bold hover:bg-white hover:text-black transition">Get In Touch</button>
            </div>

        </div>
        <div className="w-95 h-95 overflow-hidden rounded-2xl shadow-xl border-4 border-white">
             <img src={banner} alt="Hero Banner" className="object-cover w-full h-full hover:scale-110 transition duration-500"></img>
        </div>
        </section>
    );
};

export default Hero;

