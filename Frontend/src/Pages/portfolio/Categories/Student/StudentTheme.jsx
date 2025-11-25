import React, { useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Award,
  BookOpen,
  Code,
  Briefcase
} from "lucide-react";
import { UseMyPortfolio } from "../../../../hooks/usePortfolio";


export const StudentTheme = () => {
  const { data, isLoading, isError, error } = UseMyPortfolio();
  const [menuOpen, setMenuOpen] = useState(false);

  if (isLoading) return <div className="text-center p-10">Loading...</div>;
  if (isError)
    return (
      <div className="text-center p-10 text-red-500">
        Error: {error.message}
      </div>
    );

  const {
    basicInfo: {
      name,
      bio,
      about,
      picture,
      email,
      phone,
      location,
      resume,
      title
    } = {},
    education = [],
    skills = [],
    projects = [],
    experience = [],
    achievements = [],
    activities = [],
    socialLinks: socials = {}
  } = data || {};

  const navItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Work" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {name}
            </h1>

            <ul className="hidden md:flex gap-8 text-sm font-medium">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </li>
              ))}
            </ul>

            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <ul className="md:hidden flex flex-col gap-4 py-6 text-sm font-medium">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              👋 Available for Internships
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {name}
              </span>
            </h1>

            <p className="text-xl text-gray-600">{title}</p>

            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              {bio}
            </p>

            <div className="flex gap-4 pt-4">
              {resume && (
                <a
                  href={resume}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
                >
                  Download Resume
                </a>
              )}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-4 text-xl mt-2">
              {socials.github && (
                <a href={socials.github} className="hover:text-blue-600">
                  <Github />
                </a>
              )}
              {socials.linkedin && (
                <a href={socials.linkedin} className="hover:text-blue-600">
                  <Linkedin />
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`} className="hover:text-blue-600">
                  <Mail />
                </a>
              )}
            </div>
          </div>

          <img
            src={picture}
            alt={name}
            className="w-64 h-64 object-cover rounded-full shadow-xl border-4 border-blue-200"
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-600 leading-relaxed">{about}</p>
      </section>

      {/* EDUCATION */}
      <section id="education" className="px-6 py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, idx) => (
            <div key={idx} className="p-6 bg-gray-50 shadow rounded-xl">
              <h3 className="text-xl font-semibold">{edu.college}</h3>
              <p className="text-gray-700">{edu.degree}</p>
              <p className="text-gray-500 text-sm mt-2">
                {edu.startYear} – {edu.endYear}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg"
            >
              <img
                src={skill.skillImageUrl}
                alt={skill.name}
                className="w-16 h-16 mx-auto mb-3"
              />
              <p className="font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {(project.techStack || "")
                    .split(",")
                    .map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-sm bg-gray-200 rounded-full">
                        {tech}
                      </span>
                    ))}
                </div>

                <div className="flex justify-between mt-4 text-blue-600">
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="flex gap-2 items-center">
                      <ExternalLink size={16} /> Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="flex gap-2 items-center">
                      <Github size={16} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="work" className="px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-10">Work Experience</h2>

        <div className="max-w-4xl mx-auto space-y-10">
          {experience.map((exp, idx) => (
            <div key={idx} className="bg-white p-6 shadow rounded-xl">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-blue-600">{exp.company}</p>
              <p className="text-sm text-gray-500 mt-2">
                {exp.startDate} – {exp.endDate || "Present"}
              </p>
              <p className="text-gray-700 mt-3">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="px-6 py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-10">Achievements</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {achievements.map((item, idx) => (
            <div key={idx} className="p-6 bg-white shadow rounded-xl">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-blue-600">{item.organization}</p>
              <p className="text-sm text-gray-500 mt-1">{item.date}</p>
              <p className="text-gray-700 mt-3">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>

        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <p className="text-lg text-gray-600">
            Feel free to reach out. I'm always open to opportunities!
          </p>

          <p className="text-gray-700">
            <strong>Email:</strong> {email}
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> {phone}
          </p>
          <p className="text-gray-700">
            <strong>Location:</strong> {location}
          </p>
        </div>
      </section>
    </div>
  );
};
