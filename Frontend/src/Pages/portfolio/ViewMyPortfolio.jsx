import React, { useState } from "react";
import { Menu, X, Github, ExternalLink, Linkedin, MessageCircle } from "lucide-react";
import { UseMyPortfolio } from "../../hooks/usePortfolio";


const ViewMyPortfolio = () => {
  const { data, isLoading, isError, error } = UseMyPortfolio();
  console.log(data);
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
      name,
      bio,
      about,
      picture,
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
 <div className="bg-black w-full min-h-screen">
      <div className="bg-black text-white px-6 py-8 mx-auto max-w-7xl">
        {/* Navbar - Fixed spacing */}
        <nav className="mb-16">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-purple-500 font-bold text-xl tracking-wide">
              {name}
            </h1>
            <ul className="hidden md:flex gap-8 text-base">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="cursor-pointer hover:text-purple-400 transition-colors duration-200"
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
            <ul className="md:hidden flex flex-col items-center gap-4 py-6 text-base">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="cursor-pointer hover:text-purple-400 transition-colors duration-200"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          )}
        </nav>

        {/* Hero - Consistent spacing */}
        <section className="flex flex-col md:flex-row justify-between items-center gap-12 mb-24">
          <div className="space-y-6 flex-1">
            <h2 className="text-5xl font-bold leading-tight">
              Hello, I am{" "}
              <span className="text-purple-500">{name}</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              {bio}
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href={socials.portfolio}
                className="px-6 py-3 border border-purple-500 rounded-lg hover:bg-purple-500 transition-colors duration-200 text-base font-medium"
              >
                Portfolio
              </a>
              <a
                href={`mailto:${email}`}
                className="px-6 py-3 bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors duration-200 text-base font-medium"
              >
                Contact Me
              </a>
            </div>
            <div className="flex gap-4 text-2xl pt-2">
              {socials.github && (
                <a href={socials.github} className="hover:text-purple-400 transition-colors duration-200">
                  <Github size={28} />
                </a>
              )}
              {socials.linkedin && (
                <a href={socials.linkedin} className="hover:text-purple-400 transition-colors duration-200">
                  <Linkedin size={28} />
                </a>
              )}
              {socials.whatsapp && (
                <a href={socials.whatsapp} className="hover:text-purple-400 transition-colors duration-200">
                  <MessageCircle size={28} />
                </a>
              )}
            </div>
          </div>
          <img
            src={picture}
            alt="Profile"
            className="w-72 h-72 object-cover rounded-full border-4 border-purple-500 shadow-2xl"
          />
        </section>

        {/* About - Consistent typography */}
        <section id="about" className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
          <p className="max-w-4xl mx-auto text-center text-gray-300 leading-relaxed text-lg">
            {about || "No about information provided yet."}
          </p>
        </section>

        {/* Skills - Fixed spacing */}
        <section id="skills" className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-base text-gray-400 mb-12 max-w-2xl mx-auto">
            Technologies & tools I use to build modern and scalable applications.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              >
                <img
                  src={skill.skillImageUrl || "https://res.cloudinary.com/dto6ulc5n/image/upload/v1764084403/cvj45we6gxalb6pya8rt.png"}
                  alt={skill.name}
                  className="w-16 h-16 mb-4 object-contain"
                />
                <p className="text-white font-medium text-base">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects - Consistent card layout */}
        <section id="projects" className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
          <p className="text-center text-base text-gray-400 mb-12 max-w-2xl mx-auto">
            Check out my creations—turning ideas into seamless digital experiences!
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-200">
                <img
                  src={project.image || "https://res.cloudinary.com/dto6ulc5n/image/upload/f_auto,q_auto/v1764084117/vm6kpiktueqpd3awmodm.png"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-base text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack?.split(",").map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between text-base pt-2">
                    <a
                      href={project.liveUrl}
                      className="text-purple-400 flex items-center gap-2 hover:text-purple-300 transition-colors duration-200"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-purple-400 flex items-center gap-2 hover:text-purple-300 transition-colors duration-200"
                    >
                      <Github size={18} /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education - Better spacing */}
        <section id="education" className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-12">Education</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {education.length === 0 && (
              <p className="text-gray-400 text-base">No education details added yet.</p>
            )}
            {education.map((edu, idx) => (
              <div key={idx} className="bg-gray-800 rounded-lg p-6 text-left hover:bg-gray-700 transition-colors duration-200">
                <h3 className="text-xl font-semibold mb-2">{edu.college}</h3>
                <p className="text-base text-gray-300">
                  {edu.degree}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  {edu.startYear} - {edu.endYear}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience - Timeline with consistent spacing */}
        <section id="experience" className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="flex justify-center">
            {experience.length > 0 ? (
              <ol className="relative border-l-2 border-purple-500 ml-4 space-y-12">
                {experience.map((item, idx) => (
                  <li key={idx} className="ml-8 pb-8">
                    <span className="absolute -left-3.5 w-7 h-7 bg-purple-500 rounded-full ring-8 ring-black"></span>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.role}
                    </h3>
                    <p className="text-purple-400 font-medium text-base mb-2">{item.company}</p>
                    <p className="text-sm text-gray-400 mb-4">
                      {item.startDate} - {item.endDate || "Present"}
                    </p>
                    <p className="text-gray-300 leading-relaxed text-base">{item.description}</p>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="text-gray-400 text-base">No experience added yet.</p>
            )}
          </div>
        </section>

        {/* Contact - Consistent form styling */}
        <section id="contact" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'd love to hear from you. Whether you have a question or just
                want to connect, feel free to reach out.
              </p>
              <ul className="space-y-4 text-base">
                <li className="text-gray-300">
                  <strong className="text-white">Email:</strong> {email || "your.email@example.com"}
                </li>
                <li className="text-gray-300">
                  <strong className="text-white">Phone:</strong> {phone || "+1 (555) 123-4567"}
                </li>
                <li className="text-gray-300">
                  <strong className="text-white">Location:</strong> {location || "Your Location"}
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:outline-none text-base"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:outline-none text-base"
                required
              />
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:outline-none text-base resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-4 rounded-lg text-white font-medium text-base transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ViewMyPortfolio;
