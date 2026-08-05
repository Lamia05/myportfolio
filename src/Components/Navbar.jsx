import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-500">
          Rawjatul Jannat Lamia
        </h1>

        {/* Desktop Menu */}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HiMenu />
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">

          <ul className="flex flex-col gap-4 text-gray-700 font-medium">

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
      )}

    </nav>
  );
};

export default Navbar;