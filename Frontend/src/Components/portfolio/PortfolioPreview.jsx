import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaLink,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export const PortfolioPreview = ({ data }) => {
  const {
    fullName,
    title,
    bio,
    about,
    profileImage,
    experience: [],
    skills = [],
    projects = [],
    education = [],
    socials = {},
  } = data;

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="bg-black text-white p-6 space-y-12">
      {/* Navbar */}
      <nav className="">
        <div className=" mx-auto flex justify-between gap-10 items-center p-4">
          <p className="text-purple-500">{fullName}</p>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer hover:text-purple-400 transition-colors"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>

          {/* Mobile Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden bg-black flex flex-col items-center gap-4 py-4">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer hover:text-purple-400"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </nav>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Hello, I am <span className="text-purple-500">{fullName}</span>
          </h1>
          <p className="text-gray-300">{bio}</p>
          <div className="flex gap-4 mt-4">
            <a href={socials.resume} className="btn border px-4 py-2 rounded">
              Download Resume
            </a>
            <a
              href={`mailto:${socials.email}`}
              className="btn border px-4 py-2 rounded"
            >
              Contact Me
            </a>
          </div>
          <div className="flex gap-3 mt-4 text-xl">
            {socials.github && (
              <a href={socials.github}>
                <FaGithub />
              </a>
            )}
            {socials.linkedin && (
              <a href={socials.linkedin}>
                <FaLinkedin />
              </a>
            )}
            {socials.whatsapp && (
              <a href={socials.whatsapp}>
                <FaWhatsapp />
              </a>
            )}
          </div>
        </div>
        <img
          src={profileImage}
          alt="Profile"
          className="w-60 h-60 object-cover rounded-full border-4 border-purple-500"
        />
      </section>

      <section id="about" className="">
        <h2 className="text-3xl font-bold text-center  mb-8">About Me</h2>
        <div className="max-w-4xl mx-auto text-center text-gray-300  leading-7">
          {about ? <p>{about}</p> : <p>No about information provided yet.</p>}
        </div>
      </section>

      {/* Skills */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-1">My Skills</h2>
        <p className="text-sm text-gray-400 mb-6">
          Technologies & tools I use to build modern and scalable applications.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
          {skills?.map((skill, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              {/* <p className="text-lg font-semibold text-white">{skill.name}</p> */}
              <img
                src={skill.skillImageUrl}
                alt="https://cdn-icons-png.flaticon.com/512/10262/10262344.png"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
        <p className="text-center text-sm text-gray-400 mb-8">
          Check out my creations—turning ideas into seamless digital
          experiences!
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-lg p-4 space-y-3 shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-3 text-sm">
                <a
                  href={project.liveLink}
                  className="text-purple-400 flex items-center gap-1"
                >
                  <FaLink /> Live
                </a>
                <a
                  href={project.githubLink}
                  className="text-purple-400 flex items-center gap-1"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {education.length === 0 && (
            <p className="text-gray-400">No education details added yet.</p>
          )}
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg p-4 text-left shadow-md"
            >
              <h3 className="text-xl font-semibold">{edu.institution}</h3>
              <p className="text-gray-300">
                {edu.degree} • {edu.year}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-8 ">
        <h2 className="text-3xl font-bold text-center">Experience</h2>

        <div className="flex justify-center">
          {data?.experience && data.experience.length > 0 ? (
            <ol className="relative border-l border-purple-500 ml-4">
              {data.experience.map((item, idx) => (
                <li key={idx} className="mb-10 ml-6">
                  <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-purple-500 rounded-full ring-8 ring-black">
                    {idx + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="text-purple-400 font-medium">{item.company}</p>
                  <p className="text-sm text-gray-400">
                    {item.startDate} - {item.endDate || "Present"}
                  </p>
                  <p className="text-gray-300 mt-2">{item.description}</p>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-gray-400 text-center">
              No experience added yet.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};
