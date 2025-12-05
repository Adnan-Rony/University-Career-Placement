import React, { createContext, useContext, useEffect, useState } from "react";
import { useUserResumes } from "../hooks/useResume";
import { useCurrentUser } from "../hooks/useAuth";

const ResumeContext = createContext();

// ২. Provider component
export const ResumeProvider = ({ children }) => {
  const {data:user,isPending:isUserLoading}=useCurrentUser()
const userId=user?.user?._id
const {data:currentResumedata}=useUserResumes(userId)
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

  //if resume data found from database set as 
    useEffect(() => {
    if (currentResumedata) {
      setResumeData({
        about: currentResumedata.about || {},
        education: currentResumedata.education || [],
        experience: currentResumedata.experience || [],
        skills: currentResumedata.skills || [],
        projects: currentResumedata.projects || [],
        additional: currentResumedata.additional || {}
      });
    }
  }, [currentResumedata]);

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
        selectedtemplate,currentResumedata
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResumeContext = () => {
  return useContext(ResumeContext);
};
