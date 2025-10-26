import React, { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

// ২. Provider component
export const ResumeProvider = ({ children }) => {
  const [submitAction, setSubmit] = useState(false);
  const [triggerSubmit, setTriggerSubmit] = useState(null);
  const [selectedtemplate, setTemplate] = useState(null);
  const [resumeData, setResumeData] = useState({
    about: {},
    education: [],
    experience: [],
    skills: [],
    projects: [],
     additional: {}
  });

  // update functions
  const updateAbout = (data) => {
    setResumeData((prev) => ({ ...prev, about: data }));
  };

   const addEducation = (edu) => {
    setResumeData((prev) => ({ ...prev, education: edu }));
  };
  const addExperience = (exp) => {
    setResumeData((prev) => ({ ...prev, experience: exp }));
  };

   const updateSkills = (newSkill) => {
    setResumeData((prev) => ({ ...prev, skills: newSkill }));
  };

 const addProject = (project) => {
    setResumeData((prev) => ({ ...prev, projects: project }));
  };
  // Additional
const updateAdditional = (data) => {
  setResumeData((prev) => ({ ...prev, additional: data }));
};

  //Reset all data
  const resetResume = () => {
    setResumeData({
      about: {},
      education: [],
      experience: [],
      skills: [],
      projects: [],
    });
  };

  console.log("show resumeinfos", resumeData);

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        updateAbout,
        addEducation,
        addExperience,
        updateSkills,
        updateAdditional,
        addProject,
        resetResume,
        submitAction,
        setSubmit,
        triggerSubmit,
        setTriggerSubmit,
        setTemplate,
        selectedtemplate,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResumeContext = () => {
  return useContext(ResumeContext);
};
