import React, { useState } from 'react';

import { SocialProfiles } from '../ProfileForms/SocialProfiles';
import { EducationForm } from '../ProfileForms/EducationForm';
import { AboutForm } from '../ProfileForms/AboutForm';
import { WorkExperienceForm } from '../ProfileForms/WorkExperienceFrom';
import { SkillForms } from '../ProfileForms/SkillForms';



export const ProfileTab = () => {


  return (
   <div>
     
    <AboutForm/>
    <SkillForms/>
    <SocialProfiles/>
    <EducationForm/>
    <WorkExperienceForm/>
   </div>
  );
};

