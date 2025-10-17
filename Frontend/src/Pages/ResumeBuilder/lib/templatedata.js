import resume2 from "../../../assets/resume/resume2.png"
import softwareEng from "../../../assets/resume/softwareEng.png"
import engineer01 from "../../../assets/resume/eng2.png"
import uidesigner from "../../../assets/resume/ux1.png"
import student2 from "../../../assets/resume/student2.png"
import StudentTemp1 from "../Templates/Students/StudentTemp1";
import { PdfEngineerTemp1 } from "../PdfTemplates/PdfEngineerTemp1";
import { StudentTemp2 } from "../Templates/Students/StudentTemp2";
import { PdfStudentTemp2 } from "../PdfTemplates/PdfStudentTemp2"


export const templatesData=[
  {
    id:"temp01",
    title:"Student Template 1",
    image:resume2,
    component:StudentTemp1,
    profession: "student",
    steps: ["About", "Education", "Skills", "Projects","Preview"]
  },
  
  
  {
    id: "temp02",
    title: "Software Engineer Template",
    image: softwareEng,
    component: StudentTemp1,
    profession: "Engineer",
       steps: ["About", "Education", "Experience", "Skills", "Projects","Preview"]
  },
  {
    id: "temp03",
    title: "Engineer Template 1",
    image: engineer01, //Jackline Thomson
    component: StudentTemp1,
    pdfComponent:PdfEngineerTemp1,
    profession: "Engineer",
     steps: ["About", "Education", "Experience", "Skills", "Projects","Preview"]
  },
  {
    id: "temp04",
    title: "UI Designer Template",
    image: uidesigner,
    component: StudentTemp1,
    profession: "Designer",
    steps: ["About", "Education", "Skills", "Portfolio","Preview"] 
  }
,
  {
    id: "temp05",
    title: "Student Template",
    image: student2,
    component: StudentTemp2,
    pdfComponent:PdfStudentTemp2,
    profession: "student",
    steps: ["About", "Education", "Skills", "Experience","Preview"] 
  }

]
export const data = {
  name: "Tamjid Ahmed",
  email: "tamjid@example.com",
  phone: "+880 1711-234567",
  objective:
    "Motivated Computer Science student with a strong foundation in web development, seeking an opportunity to apply my MERN stack skills and contribute to real-world projects.",
  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Daffodil International University",
      year: "2021 - Present",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka College",
      year: "2018 - 2020",
    },
  ],
  skills: ["React.js", "Tailwind CSS", "JavaScript", "MySQL", "Node.js"],
  projects: [
    {
      title: "PetFinder-Teddy 🐾",
      description:
        "A pet adoption web app built with React, where users can browse, search, and adopt pets with dynamic filtering and sorting features.",
    },
    {
      title: "Programmer Expenses Assistant",
      description:
        "A budget tracking tool for developers to manage daily expenses with real-time balance updates and donation tracking.",
    },
  ],
  additionalInfo:
    "Fluent in English and Bengali. Passionate about UI/UX design, teamwork, and problem-solving.",
};