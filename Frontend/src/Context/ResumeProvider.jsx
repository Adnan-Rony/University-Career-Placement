import React, { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

// ২. Provider component
export const ResumeProvider = ({ children }) => {
  const [submitAction, setSubmit] = useState(false);
  const [resumeData, setResumeData] = useState({
    about: {},
    education: [],
    experience: [],
    skills: [],
    projects: [],
  });

  // update functions
  const updateAbout = (data) => {
    setResumeData((prev) => ({ ...prev, about: data }));
  };

  const addEducation = (edu) => {
    setResumeData((prev) => ({ ...prev, education: [...prev.education, edu] }));
  };

  const addExperience = (exp) => {
    setResumeData((prev) => ({
      ...prev,
      experience: [...prev.experience, exp],
    }));
  };

  const updateSkills = (skills) => {
    setResumeData((prev) => ({ ...prev, skills }));
  };

  const addProject = (project) => {
    setResumeData((prev) => ({
      ...prev,
      projects: [...prev.projects, project],
    }));
  };

  const resetResume = () => {
    setResumeData({
      about: {},
      education: [],
      experience: [],
      skills: [],
      projects: [],
    });
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        updateAbout,
        addEducation,
        addExperience,
        updateSkills,
        addProject,
        resetResume,
        submitAction,
        setSubmit,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResumeContext = () => {
  return useContext(ResumeContext);
};
