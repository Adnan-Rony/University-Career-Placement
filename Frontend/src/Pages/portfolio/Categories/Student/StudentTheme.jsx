 import React, { useState } from "react";
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Award, BookOpen, Code, Briefcase } from "lucide-react";

// Static student data
const studentData = {
  name: "Alex Johnson",
  title: "Computer Science Student",
  bio: "Passionate CS student exploring web development, AI, and problem-solving through code",
  about: "I'm a third-year Computer Science student at State University with a keen interest in full-stack development and artificial intelligence. I love building projects that solve real-world problems and constantly learning new technologies. When I'm not coding, you can find me participating in hackathons or contributing to open-source projects.",
  picture: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
  email: "alex.johnson@student.edu",
  phone: "+1 (555) 987-6543",
  location: "Boston, MA",
  resume: "#",
  
  education: [
    {
      school: "State University",
      degree: "Bachelor of Science in Computer Science",
      period: "2021 - 2025",
      gpa: "3.8/4.0",
      coursework: "Data Structures, Algorithms, Web Development, Machine Learning, Database Systems"
    },
    {
      school: "Lincoln High School",
      degree: "High School Diploma",
      period: "2017 - 2021",
      gpa: "3.9/4.0",
      achievements: "Valedictorian, National Honor Society"
    }
  ],
  
  skills: [
    { name: "JavaScript", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Python", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Node.js", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Java", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Git", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
  ],
  
  projects: [
    {
      title: "Study Buddy App",
      description: "A collaborative study platform where students can create study groups, share notes, and schedule study sessions",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      tech: ["React", "Firebase", "Material-UI"],
      github: "https://github.com",
      demo: "https://example.com",
      type: "Web App"
    },
    {
      title: "Campus Navigator",
      description: "Interactive campus map with real-time navigation and building information for new students",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
      tech: ["React Native", "Google Maps API", "Express"],
      github: "https://github.com",
      demo: null,
      type: "Mobile App"
    },
    {
      title: "Grade Tracker",
      description: "Personal grade management system with GPA calculator and course analytics",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
      tech: ["Python", "Django", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://example.com",
      type: "Web App"
    },
    {
      title: "ML Image Classifier",
      description: "Machine learning model that classifies images of campus landmarks using TensorFlow",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
      tech: ["Python", "TensorFlow", "Flask"],
      github: "https://github.com",
      demo: null,
      type: "ML Project"
    }
  ],
  
  achievements: [
    {
      title: "Dean's List",
      organization: "State University",
      date: "Fall 2023",
      description: "Recognized for academic excellence with GPA above 3.5"
    },
    {
      title: "Hackathon Winner",
      organization: "TechHacks 2023",
      date: "March 2023",
      description: "1st place for developing an AI-powered study assistant"
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub",
      date: "2022 - Present",
      description: "Active contributor to various educational technology projects"
    }
  ],
  
  activities: [
    {
      role: "President",
      organization: "Computer Science Club",
      period: "2023 - Present",
      description: "Leading weekly coding workshops and organizing tech talks with industry professionals"
    },
    {
      role: "Teaching Assistant",
      organization: "CS Department",
      period: "2023 - Present",
      description: "Assisting students in Introduction to Programming course and hosting office hours"
    },
    {
      role: "Volunteer Tutor",
      organization: "Code for Youth",
      period: "2022 - Present",
      description: "Teaching coding basics to high school students from underrepresented communities"
    }
  ],
  
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "alex.johnson@student.edu"
  }
};

export const StudentTheme = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Work" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div className="border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {studentData.name}
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
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{studentData.name}</span>
            </h1>
            <p className="text-xl text-gray-600">{studentData.title}</p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              {studentData.bio}
            </p>
            
            <div className="flex gap-4 pt-4">
              <a
                href={studentData.resume}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
            
            <div className="flex gap-4 pt-2">
              <a href={studentData.social.github} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Github size={24} className="text-gray-700" />
              </a>
              <a href={studentData.social.linkedin} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Linkedin size={24} className="text-gray-700" />
              </a>
              <a href={`mailto:${studentData.social.email}`} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Mail size={24} className="text-gray-700" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-30"></div>
            <img
              src={studentData.picture}
              alt={studentData.name}
              className="relative w-80 h-80 object-cover rounded-full border-4 border-white shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            {studentData.about}
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Award className="text-purple-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Education</h2>
          </div>
          
          <div className="space-y-6">
            {studentData.education.map((edu, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.school}</h3>
                    <p className="text-lg text-gray-700 mb-2">{edu.degree}</p>
                    <p className="text-base text-gray-600">GPA: {edu.gpa}</p>
                  </div>
                  <span className="mt-2 md:mt-0 inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                    {edu.period}
                  </span>
                </div>
                {edu.coursework && (
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Relevant Coursework:</p>
                    <p className="text-sm text-gray-600">{edu.coursework}</p>
                  </div>
                )}
                {edu.achievements && (
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Achievements:</p>
                    <p className="text-sm text-gray-600">{edu.achievements}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Code className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Skills</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {studentData.skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 mx-auto mb-3 object-contain"
                />
                <p className="font-semibold text-gray-900 mb-1">{skill.name}</p>
                <p className="text-sm text-gray-600">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section (Projects & Activities) */}
      <section id="work" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-purple-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">My Work</h2>
          </div>
          
          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "projects"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab("activities")}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "activities"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Activities & Leadership
            </button>
          </div>

          {/* Projects Tab */}
          {activeTab === "projects" && (
            <div className="grid md:grid-cols-2 gap-8">
              {studentData.projects.map((project, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <Github size={18} />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                        >
                          <ExternalLink size={18} />
                          <span className="text-sm font-medium">Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Activities Tab */}
          {activeTab === "activities" && (
            <div className="space-y-6">
              {studentData.activities.map((activity, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{activity.role}</h3>
                      <p className="text-lg text-blue-600">{activity.organization}</p>
                    </div>
                    <span className="mt-2 md:mt-0 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium">
                      {activity.period}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Achievements & Awards</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {studentData.achievements.map((achievement, idx) => (
              <div key={idx} className="p-6 border-2 border-blue-100 rounded-xl hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-blue-600 font-medium mb-2">{achievement.organization}</p>
                <p className="text-sm text-gray-500 mb-3">{achievement.date}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Let's Connect!</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, projects, or just connecting with fellow students and professionals.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
              <a
                href={`mailto:${studentData.email}`}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Send Email
              </a>
              <a
                href={studentData.social.linkedin}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
            
            <div className="space-y-2 text-white/90">
              <p className="text-lg"> {studentData.email}</p>
              <p className="text-lg">📱 {studentData.phone}</p>
              <p className="text-lg">📍 {studentData.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 {studentData.name}. Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};