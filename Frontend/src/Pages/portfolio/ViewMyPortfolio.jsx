import React, { useState } from "react";
import {
  FaBars,
  FaGithub,
  FaLink,
  FaLinkedin,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import { UseMyPortfolio } from "../../hooks/usePortfolio";

const ViewMyPortfolio = () => {
  const { data, isLoading, isError, error } = UseMyPortfolio();
  const [menuOpen, setMenuOpen] = useState(false);

  if (isLoading)
    return <div className="text-center p-10 text-white">Loading...</div>;
  if (isError)
    return (
      <div className="text-center p-10 text-red-500">
        Error: {error.message}
      </div>
    );

  const {
    basicInfo: {
      fullName,
      bio,
      about,
      profileImage,
      location,
      phone,
      email,
    } = {},
    skills = [],
    projects = [],
    education = [],
    experience = [],
    socialLinks: socials = {},
  } = data || {};

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="bg-black w-full">
      <div className="bg-black text-white px-6 space-y-10 mx-auto max-w-7xl">
        {/* Navbar */}
        <nav className="">
          <div className="flex justify-between items-center p-1">
            <p className="text-purple-500 font-bold text-lg">{fullName}</p>
            <ul className="hidden md:flex gap-6">
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
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
          {menuOpen && (
            <ul className="md:hidden flex flex-col items-center gap-4 py-4">
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

        {/* Hero */}
        <section className="flex flex-col md:flex-row mx-auto py-10 justify-between items-center gap-10">
          <div className="space-y-4 max-w-7xl">
            <h1 className="text-4xl font-bold">
              Hello, I am <span className="text-purple-500">{fullName}</span>
            </h1>
            <p className="text-gray-300">{bio}</p>
            <div className="flex gap-4">
              <a
                href={socials.portfolio}
                className="btn border px-4 py-2 rounded"
              >
                Portfolio
              </a>
              <a
                href={`mailto:${socials.email}`}
                className="btn border px-4 py-2 rounded"
              >
                Contact Me
              </a>
            </div>
            <div className="flex gap-3 text-xl">
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

        {/* About */}
        <section id="about">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <p className="max-w-4xl mx-auto text-center text-gray-300 leading-7">
            {about || "No about information provided yet."}
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="text-center">
          <h2 className="text-3xl font-bold mb-1">My Skills</h2>
          <p className="text-sm text-gray-400 mb-6">
            Technologies & tools I use to build modern and scalable
            applications.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-lg p-4 flex flex-col items-center"
              >
                <img
                  src={skill.skillImageUrl}
                  alt={skill.name}
                  className="w-12 h-12 mb-2"
                />
                <p className="text-white font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
          <p className="text-center text-sm text-gray-400 mb-8">
            Check out my creations—turning ideas into seamless digital
            experiences!
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gray-900 rounded-lg p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack?.split(",").map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between text-sm mt-3">
                  <a
                    href={project.liveUrl}
                    className="text-purple-400 flex items-center gap-1"
                  >
                    <FaLink /> Live
                  </a>
                  <a
                    href={project.githubUrl}
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
        <section id="education" className="text-center">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="max-w-7xl mx-auto space-y-4">
            {education.length === 0 && (
              <p className="text-gray-400">No education details added yet.</p>
            )}
            {education.map((edu, idx) => (
              <div key={idx} className="bg-gray-800 rounded-lg p-4 text-left">
                <h3 className="text-xl font-semibold">{edu.institute}</h3>
                <p className="text-gray-300">
                  {edu.degree} • {edu.startYear} - {edu.endYear}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
          <div className="flex justify-center">
            {experience.length > 0 ? (
              <ol className="relative border-l border-purple-500 ml-4">
                {experience.map((item, idx) => (
                  <li key={idx} className="mb-10 ml-6">
                    <span className="absolute -left-3 w-6 h-6 bg-purple-500 rounded-full ring-8 ring-black"></span>
                    <h3 className="text-xl font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="text-purple-400">{item.company}</p>
                    <p className="text-sm text-gray-400">
                      {item.startDate} - {item.endDate || "Present"}
                    </p>
                    <p className="text-gray-300 mt-2">{item.description}</p>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="text-gray-400">No experience added yet.</p>
            )}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-white">
            {/* Contact Info */}
            <div className="space-y-4">
              <p className="text-lg text-gray-300">
                I’d love to hear from you. Whether you have a question or just
                want to connect, feel free to reach out.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <strong>Email:</strong> {email || "your.email@example.com"}
                </li>
                <li>
                  <strong>Phone:</strong> {phone || "+8801XXXXXXXXX"}
                </li>
                <li>
                  <strong>Location:</strong> {location}
                </li>
              </ul>
            </div>

            {/* Contact Form (non-functional placeholder) */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
                required
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded text-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ViewMyPortfolio;
