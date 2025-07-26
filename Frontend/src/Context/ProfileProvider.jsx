
import { createContext, useEffect, useState } from "react"


 export const ProfileContext=createContext()

export const ProfileProvider = ({children}) => {
    const [profileData,setProfileData]=useState({
        name:"Tamjid Razin",
        location:'Uttara Dhaka',

        social:{
        website: 'https://mehnazjahanportfolio.netlify.app/',
        linkedin: 'https://www.linkedin.com/in/mehnazjahan-profile59326b/',
        github: 'https://github.com/mehnazjahan',
        twitter: 'https://twitter.com/mehnazjahan',
        },
        education:
          [
            {
              college:"Daffodil Internatinal University",
              startYear:" ",
              endYear:" ",
              degreeType:""
             }
          ],
          workExperience:[
           { company: "",
            title: "",
            startDate: "",
            endDate: "",
            description: "",}
          ]
        
    })

const updateProfileSection=(section,data)=>{
    setProfileData(prev=>({
        ...prev,
        [section]:data
    }))
}

useEffect(() => {
  
}, [profileData]);

const value={
   profileData,updateProfileSection
}
  return (
    <ProfileContext.Provider value={value}>
        {children}
    </ProfileContext.Provider>
  )
}
