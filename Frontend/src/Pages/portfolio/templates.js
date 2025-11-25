import { StudentTheme } from "./Categories/Student/StudentTheme";
import ViewMyPortfolio from "./ViewMyPortfolio";
import React from "react";
const portfolioTemplates = [
  {
    id: "temp001",
    component: ViewMyPortfolio,
    preview:"https://res.cloudinary.com/dto6ulc5n/image/upload/v1763892424/xtkrj7kskh9n64gst4z2.png",
  },
  {
    id: "temp002",
    name: "Classic Light Mode",
    component: StudentTheme,
    preview:"https://res.cloudinary.com/dto6ulc5n/image/upload/v1764088020/yxvnrwr99uxzoalrxopx.png"
  },
  {
    id: "temp003",
    name: "Minimal",
    component: ViewMyPortfolio,
    preview:"https://res.cloudinary.com/dto6ulc5n/image/upload/v1763892424/xtkrj7kskh9n64gst4z2.png"
  },
];
export default portfolioTemplates