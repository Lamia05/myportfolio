import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-gray-500">Rawjatul Jannat Lamia</h1>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <button onClick={() => scrollToSection("home")} className="hover:text-blue-600">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("about")} className="hover:text-blue-600">
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("tech")} className="hover:text-blue-600">
              Tech Stack
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("services")} className="hover:text-blue-600">
              Services
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")} className="hover:text-blue-600">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
