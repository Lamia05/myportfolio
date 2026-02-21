import React from "react";
import { FaLinkedinIn, FaGithub, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-emerald-600 text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
              RJ
            </div>
            <h3 className="text-xl font-semibold">Rawjatul Jannat Lamia</h3>
          </div>
          <p className="text-white/80 text-sm max-w-xs">
            Crafting digital experiences that blend innovation with aesthetics.
          </p>
        </div>

        
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Portfolio</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <ul className="space-y-3 text-white/80 text-sm">
            <li className="flex items-center gap-3 hover:text-white cursor-pointer">
              <FaLinkedinIn /> LinkedIn
            </li>
            <li className="flex items-center gap-3 hover:text-white cursor-pointer">
              <FaGithub /> GitHub
            </li>
            <li className="flex items-center gap-3 hover:text-white cursor-pointer">
              <FaDribbble /> Dribbble
            </li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-semibold mb-4">Stay Updated</h4>
          <p className="text-white/80 text-sm mb-4">
            Subscribe to get the latest news and updates.
          </p>
          <div className="flex items-center bg-white/20 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent px-4 py-2 text-sm text-white placeholder-white/70 focus:outline-none flex-1"
            />
            <button className="bg-white text-emerald-600 px-4 py-2 font-semibold">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-white/70">
          <p className="text-center">© 2026 Rawjatul Jannat Lamia. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
