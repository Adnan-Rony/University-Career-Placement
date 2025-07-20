// data/portfolioDemo.js
const demoPortfolio = {
  basicInfo: {
    fullName: "Adnan Rony",
    title: "MERN Stack Developer",
    bio: "Enthusiastic developer passionate about building web solutions.",
    profileImage: "https://i.ibb.co/profile-demo.jpg",
    location: "Dhaka, Bangladesh",
    email: "adnan@example.com",
    phone: "+8801234567890"
  },
  skills: [
    { name: "React.js", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" }
  ],
  projects: [
    {
      title: "Career Placement Portal",
      description: "A job and internship portal for university students.",
      techStack: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://placement.demo",
      githubUrl: "https://github.com/adnan/placement",
      images: ["https://i.ibb.co/demo-project.png"]
    }
  ],
  education: [
    {
      institute: "PH University",
      degree: "BSc in CSE",
      startYear: "2021",
      endYear: "2025"
    }
  ],
  experience: [
    {
      company: "TechHub BD",
      role: "Frontend Intern",
      startDate: "2024-01-01",
      endDate: "2024-06-01",
      description: "Developed UI components using React and Tailwind."
    }
  ],
  certifications: [
    {
      title: "JavaScript Mastery",
      issuer: "Udemy",
      issueDate: "2023-12-01",
      certificateUrl: "https://udemy.com/cert/js-master"
    }
  ],
  blogs: [
    {
      title: "Building a Job Portal in MERN",
      link: "https://dev.to/adnan/job-portal-mern",
      description: "Step-by-step development of a university portal using MERN."
    }
  ],
  socialLinks: {
    github: "https://github.com/adnanrony",
    linkedin: "https://linkedin.com/in/adnanrony",
    leetcode: "https://leetcode.com/adnanrony"
  },
  settings: {
    theme: "dark",
    isPublic: true
  }
};

export default demoPortfolio;
