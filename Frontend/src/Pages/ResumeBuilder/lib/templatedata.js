import resume2 from "../../../assets/resume/resume2.png"
import softwareEng from "../../../assets/resume/softwareEng.png"
import engineer01 from "../../../assets/resume/eng2.png"
import uidesigner from "../../../assets/resume/ux1.png"
import StudentTemp1 from "../Templates/Students/StudentTemp1";


export const templatesData=[
  {
    id:"temp01",
    title:"Student Template 1",
    image:resume2,
    component:StudentTemp1,
    profession: "student",
    steps: ["About", "Education", "Skills", "Projects","Preview"]
  },  {
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
    image: engineer01,
    component: StudentTemp1,
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

]
