import React, { useState } from "react";
import { useParams } from "react-router";
import { templatesData } from "../lib/templatedata";


import { Stepper } from "./Stepper";
import ResumeAboutForm from "../Forms/ResumeAboutForm";
import ResumeEducationForm from "../Forms/ResumeEducationForm";
import ResumeExperienceForm from "../Forms/ResumeExperienceForm";
import ResumeSkillForm from "../Forms/ResumeSkillForm";
import ResumeProjectForm from "../Forms/ResumeProjectForm";

export default function BuildYourResume() {
  const [currentIdx, setcurrentIdx] = useState(1);

  const { id } = useParams();

  const mytemplate = templatesData.find((template) => template.id === id);

  const renderStepComponent = () => {
    if (!mytemplate) return <p>Template not found!</p>;

    const step = mytemplate.steps[currentIdx - 1];

    switch (step) {
      case "About":
        return <ResumeAboutForm />;
      case "Education":
        return <ResumeEducationForm />;
      case "Experience":
        return <ResumeExperienceForm />;
      case "Skills":
        return <ResumeSkillForm />;
      case "Projects":
        return <ResumeProjectForm />;
      default:
        return <p className="mt-6 text-center"> All steps completed!</p>;
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 my-16">
      <div>
        <Stepper
          currentIdx={currentIdx}
          setcurrentIdx={setcurrentIdx}
          steps={mytemplate.steps}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 mt-8">
        {renderStepComponent()}
      </div>
    </div>
  );
}
