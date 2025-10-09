import React, { useState } from "react";
import { useParams } from "react-router";
import { templatesData } from "../lib/templatedata";

import { stepArray } from "../lib/stepData";
import { Stepper } from "./Stepper";
import ResumeAboutForm from "../Forms/ResumeAboutForm";
import ResumeEducationForm from "../Forms/ResumeEducationForm";
import ResumeExperienceForm from "../Forms/ResumeExperienceForm";
import ResumeSkillForm from "../Forms/ResumeSkillForm";
import ResumeProjectForm from "../Forms/ResumeProjectForm";

export default function BuildYourResume() {

const [currentIdx, setcurrentIdx] = useState(1);

  const { id } = useParams();
  console.log(id);

  const mytemplate = templatesData.find((template) => template.id === id);

const renderStepComponent=()=>{
      switch (currentIdx) {
      case 1:
        return <ResumeAboutForm/>;
      case 2:
        return <ResumeEducationForm/>;
      case 3:
        return <ResumeExperienceForm/>;
      case 4:
        return <ResumeSkillForm/>;
      case 5:
        return <ResumeProjectForm/>;
      default:
        return <p className="mt-6 text-center"> All steps completed!</p>;
    
}}


  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 my-16">
      <div>
        <Stepper currentIdx={currentIdx} setcurrentIdx={setcurrentIdx} />
      </div>


      <div className="container mx-auto px-4 md:px-8 mt-8">
        {renderStepComponent()}
      </div>
    </div>
  );
}

