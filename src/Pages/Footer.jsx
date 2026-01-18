import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F8F6F2] py-10 mt-20 text-gray-600 font-mono">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between gap-4">

        {/* COPYRIGHT */}
        <p className="text-center md:text-left text-sm">
          © {currentYear} Alex Morgan. All rights reserved.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-5">
          <Github className="hover:text-gray-900 cursor-pointer" />
          <Linkedin className="hover:text-blue-600 cursor-pointer" />
        </div>

        {/* BACK TO TOP */}
        <a
          href="#top"
          className="text-sm hover:text-gray-900 underline text-center md:text-right"
        >
          Back to top ↑
        </a>

      </div>
    </footer>
  );
};

export default Footer;
