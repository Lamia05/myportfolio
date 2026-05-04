import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const services = [
  {
    title: "Brand Identity",
    desc: "Creating memorable brand identities that resonate with your audience. From logo design to complete visual systems, I craft cohesive brand experiences that stand out.",
    icon: "🎨",
  },
  {
    title: "Web Design",
    desc: "Designing beautiful, user-friendly websites that convert.I focus on creating intuitive interfaces that provide seamless experiences accross all devices.",
    icon: "🖥️",
  },
  {
    title: "Development",
    desc: "Building scalable web applications with clean, modern code. I bring designs to life with modern technologies and best practices for optimal performance.",
    icon: "💻",
  },
];

const Services= () => {

  return (
    <section id="services" className="bg-[#F8F6F3] py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
            <span className="text-sm uppercase tracking-wider rounded-full bg-white text-black px-5 py-2 inline-block">Services</span>

            <div className=" flex flex-col md:flex-row justify-between items-center md:items-center gap-8 mt-6 mb-12">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">What I Do<br></br> Best</h2>
            <p className="text-base sm:text-large text-gray-500 max-w-xl leading-relaxed">I offer a comprehensive range of creative services designed to<br></br> help businesses and individuals establish a digital<br></br> presence. With expertise spanning design and development, I <br></br>provide end-to-end solutions tailored to your unique needs.</p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service,i) => (
                   <div
              key={i}
              className="bg-white rounded-xl p-6 sm:p-8 shadow hover:shadow-lg transition"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-emerald-500 text-white rounded-full mb-6 text-xl">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.desc}
              </p>
              <button className="text-emerald-600 font-medium inline-flex items-center gap-2">Learn More
                 <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

                   
export default  Services;