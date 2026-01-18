import React from "react";
import { Link as ScrollLink } from "react-scroll";



const Navbar = () => {
  return (
    <nav className="w-full bg-green-100 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-bold text-xl text-[#437061]">Abdul Basheeth</h1>

        <div className="hidden md:flex gap-10 text-gray-500">
          {["home", "about", "project", "contact"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-80} 
              className="relative cursor-pointer inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0 after:bg-[#437061] after:transition-all after:duration-300 hover:after:w-full capitalize"
            >
              {section}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

