import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Contact=() => {


  return (
    <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

            <div>
                <h2 className="text-4xl font-bold mb-4">Let's Create <br></br>Together</h2>
                <p className="text-gray-600 mb-8">Have a project in mind?Drop me a line and let's discuss <br></br>how we can bring your vision to life.</p>

                <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow">
                        <HiOutlineMail className="text-2xl text-emerald-500"/>
                
                    <div>
                        <h4 className="font-semibold">E-mail</h4>
                        <p className="text-gray-600">lamia@portolio.com</p>
                    </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow">
                        <FaPhone className="text-2xl text-emerald-500"/>
                    <div>
                        <h4 className="font-semibold">Phone</h4>
                        <p className="text-gray-600">01401088049</p>
                    </div>
                    </div>

                    <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow">
                        <MdLocationPin className="text-2xl text-emerald-500"/>
                    <div>
                        <h4 className="font-semibold">location</h4>
                        <p className="text-gray-600">Dhaka,Bangladesh</p>
                    </div>
                    
                    </div>
                <div className="flex gap-4 pt-4">
                    <a className="p-3 bg-white rounded-full shadow hover:bg-emerald-500 hover:text-white transition">
                        <FaLinkedin />
                    </a>

                     <a className="p-3 bg-white rounded-full shadow hover:bg-emerald-500 hover:text-white transition">
                        <FaGithub />

                    </a>

                     <a className="p-3 bg-white rounded-full shadow hover:bg-emerald-500 hover:text-white transition">
                        <FaDribbble />


                    </a>
                     <a className="p-3 bg-white rounded-full shadow hover:bg-emerald-500 hover:text-white transition">
                        <FaXTwitter />
                    </a>
                    </div>
            </div>
            </div>

            <form className="bg-white p-8 rounded-xl shawdow space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg"></input>

                <input type="text" placeholder="Your Email" className="w-full p-3 border rounded-lg"></input>

                <input type="text" placeholder="Subject" className="w-full p-3 border rounded-lg"></input>
                <textarea rows="4" placeholder="Your Message" className="w-full p-3 border rounded-lg"></textarea>

                <button className="w-full bg-emerald-500 text-white py-3 rounded-full font-semibold">Send Message</button>
            </form>
        </div> 

    </section>
  );
};
export default Contact;

