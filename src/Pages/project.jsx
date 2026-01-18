import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack shopping experience with real-time inventory, secure payments, and an intuitive admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack shopping experience with real-time inventory, secure payments, and an intuitive admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack shopping experience with real-time inventory, secure payments, and an intuitive admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
];

const Project = () => {
  return (
    <>
      {/* HEADER */}
      <div className="mt-20 text-center px-4">
        <h3 className="text-[#437061] text-sm uppercase tracking-widest">PORTFOLIO</h3>
        <h1 className="text-4xl mt-5 font-serif font-bold">Featured Projects</h1>
        <p className="font-serif mt-5 max-w-3xl mx-auto text-gray-500">
          A selection of recent work that showcases my approach to solving
          problems through design and code.
        </p>
      </div>

      {/* PROJECT CARDS */}
      <div className="mt-16 max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#F8F6F2] rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Title */}
            <h2 className="text-2xl font-serif font-semibold mb-4">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-4">{project.description}</p>

            {/* Links */}
            <div className="flex gap-4 items-center mb-4">
              <Github className="text-gray-700 hover:text-black cursor-pointer" />
              <ExternalLink className="text-gray-700 hover:text-black cursor-pointer" />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-amber-100 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
