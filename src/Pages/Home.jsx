import React from "react";
import About from "./About";
import Project from "./project";
import Contact from "./Contact";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiVercel, SiRender } from "react-icons/si";
import logo from "../assets/profileimg.jpeg";

const Home = () => {
    
  return (
    <div className="pt-15"> {/* padding top to offset fixed navbar */}
      {/* Hero / Intro Section */}
      <section
        id="home"
        className="bg-[#F8F6F2] min-h-screen flex items-center justify-center relative"
      >
        <div className="max-w-7xl mx-auto  flex items-center justify-between px-6 ">
          {/* Left Tech Stack */}
          <div className="hidden lg:flex flex-col gap-12">
            <FaHtml5 className="text-orange-600 text-5xl" />
            <FaCss3Alt className="text-blue-600 text-5xl" />
            <FaJs className="text-yellow-400 text-5xl" />
            <FaReact className="text-cyan-400 text-5xl" />
            <SiVercel className="text-black text-5xl" />
          </div>

          
          <div className="flex-1 text-center px-15">
            <div className="w-40 h-40 md:w-60 md:h-60 border-blue-300 rounded-full overflow-hidden border-4 shadow-lg mx-auto object-cover mt-3">
              <img src={logo} alt="Profile picture of Abdul Basheeth" />
            </div>

            <h2 className="text-[#437061] mt-4 text-sm tracking-widest ">
              WELCOME TO MY PORTFOLIO
            </h2>
            
            <h1 className="font-serif mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I'm{" "}
              <span className="text-[#437061] italic">Abdul Basheeth</span>
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-gray-500 text-base sm:text-lg md:text-xl">
              A creative developer passionate about crafting beautiful,
              functional web experiences. I blend design sensibility with
              technical expertise to build products that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center mt-5">
              <a
                href="#project"
                className="bg-[#437061] px-8 py-3 text-white font-semibold rounded cursor-pointer"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="bg-gray-600 px-8 py-3 text-white font-semibold rounded cursor-pointer"
              >
                Get In Touch
              </a>
            </div>
          </div>




          {/* Right Tech Stack */}
          <div className="hidden lg:flex flex-col gap-12">
            <FaNodeJs className="text-green-600 text-5xl" />
            <SiMongodb className="text-green-500 text-5xl" />
            <SiExpress className="text-gray-700 text-5xl" />
            <FaGithub className="text-black text-5xl" />
            <SiRender className="text-purple-600 text-5xl" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Project Section */}
      <section id="project">
        <Project />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
