import React, { useState } from 'react';

import { SocialProfiles } from '../ProfileForms/SocialProfiles';
import { EducationForm } from '../ProfileForms/EducationForm';
import { AboutForm } from '../ProfileForms/AboutForm';
import { WorkExperienceForm } from '../ProfileForms/WorkExperienceFrom';



export const ProfileTab = () => {


  return (
   <div>
     
    <AboutForm/>
    <SocialProfiles/>
    <EducationForm/>
    <WorkExperienceForm/>
   </div>
  );
};

