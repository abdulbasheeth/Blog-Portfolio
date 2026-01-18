import React from "react";
import { FaAward } from "react-icons/fa";
import { Code2, Palette, Smartphone, Lightbulb, Briefcase, Calendar, GraduationCap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Expert in building end-to-end web applications using React, Node.js, JavaScript(ES6), and modern frameworks.",
    proficiency: 95,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive, accessible interfaces with a keen eye for typography, color, and user experience.",
    proficiency: 88,
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Building mobile-first, cross-browser compatible applications that work seamlessly on all devices.",
    proficiency: 92,
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Strong analytical skills with a passion for tackling complex challenges through creative solutions.",
    proficiency: 94,
  },
];

const education = [
  {
    title: "Education",
    year: "2025 - Present",
    degree: "Full Stack Web Development",
    institution: "Error Makes Clever Institute",
    description: "Specialized training in full stack web development, building strong foundations in modern web technologies, frameworks, and best practices.",
  },
  {
    year: "2018 - 2021",
    degree: "Bachelor Of Commerce (B.com)",
    institution: "Bharathidasan University",
    description: "Developed strong analytical, business, and communication skills that complement technical expertise.",
  },
];

const experience = [
  {
    year: "September 2025 - Present",
    company: "Error Makes Clever Institute",
    description: "Currently undergoing comprehensive training in full stack web development, working on real-world projects using React, Node.js, databases, and modern development tools.",
  },
];

const About = () => {
  return (
    <div className="bg-[#F8F6F2] mt-15 px-5 md:px-20 lg:px-40">
      {/* Header */}
      <h1 className="text-center pt-10 text-4xl md:text-5xl text-[#437061] font-bold">About Me</h1>
      <h2 className="mt-6 text-center text-2xl md:text-3xl lg:text-4xl font-serif">Crafting Digital Experiences</h2>

      {/* Intro */}

        <div className=" gap-3 border-[#437061] border p-15 md:px-35 rounded-2xl mt-20">
          <div className=" mt-5 gap-5 flex ">
          <FaAward className=" md:inline-block w-9 h-9 text-[#437061] bg-[#E6E8E3] gap-5 rounded p-2 text-3xl" />
          <h1 className="text-center justify-center items-center text-3xl font-serif">Who I Am</h1>
         </div>
          <div className=" md:text-left text-gray-700 md:w-full justify-center items-center">
            <p className="mt-8 ">
              Hello! I'm an aspiring Full Stack Web Development professional with a Bachelor of Commerce degree. My journey into technology stems from a genuine passion for building digital solutions that can make a real difference in people's lives.</p>

            <p className="mt-5">Currently, I am pursuing specialized training in Full Stack Web Development at Error Makes Clever Institute, where I'm building a strong foundation in modern web technologies, frameworks, and development best practices. Although I am a fresher in the field, I bring enthusiasm, dedication, and a strong willingness to learn and grow. </p>

            <p className="mt-5">I am passionate about creating user-friendly applications, solving complex problems through code, and continuously expanding my technical knowledge. I believe that combining my commerce background with technical skills gives me a unique perspective on building solutions that are both functional and business-oriented. </p>
          </div>
        </div>
     

      {/* Skills */}
      <div className="mt-20">
        <p className="font-serif text-2xl md:text-3xl text-center mb-10">Skills & Expertise</p>
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.title} className="bg-[#E6E8E3] rounded-2xl p-5 flex flex-col gap-5">
              <div className="flex gap-5 items-center">
                <skill.icon className="text-[#437061] bg-white rounded p-2 w-10 h-10" />
                <div>
                  <h4 className="font-serif text-xl md:text-2xl">{skill.title}</h4>
                  <p className="text-gray-700 mt-1">{skill.description}</p>
                </div>
              </div>
              {/* Proficiency */}
              <div>
                <div className="flex justify-between text-sm mb-1 font-mono">
                  <span className="text-gray-500">Proficiency</span>
                  <span className="text-green-600">{skill.proficiency}%</span>
                </div>
                <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-600 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-20">
        <div className="flex items-center gap-5 mb-5">
          <div className="text-[#437061] bg-[#E6E8E3] w-12 h-12 rounded flex justify-center items-center">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold">Education</h1>
        </div>
        <div className="flex flex-col gap-10">
          {education.map((edu, index) => (
            <div key={index} className="pl-0 md:pl-10">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <Calendar className="w-5 h-5" />
                <p className="text-sm md:text-lg font-mono">{edu.year}</p>
              </div>
              <h2 className="font-serif text-xl md:text-2xl">{edu.degree}</h2>
              <p className="text-[#437061] mt-1">{edu.institution}</p>
              <p className="text-gray-700 mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mt-20">
        <div className="flex items-center gap-5 mb-5">
          <div className="bg-[#E6E8E3] w-12 h-12 rounded flex justify-center items-center">
            <Briefcase className="w-6 h-6 text-[#437061]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold">Experience</h1>
        </div>
        <div className="flex flex-col gap-10">
          {experience.map((exp, index) => (
            <div key={index} className="pl-0 md:pl-10">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <Calendar className="w-5 h-5" />
                <p className="text-sm md:text-lg font-mono">{exp.year}</p>
              </div>
              <p className="text-[#437061] text-xl md:text-2xl">{exp.company}</p>
              <p className="text-gray-700 mt-2 mb-10">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
