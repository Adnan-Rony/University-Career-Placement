import { createContext, useState } from "react"


 export const ProfileContext=createContext()

export const ProfileProvider = ({children}) => {
    const [profileData,setProfileData]=useState({
        name:"Tamjid Razin",
        location:'Uttara Dhaka',
        website: 'https://mehnazjahanportfolio.netlify.app/',
        linkedin: 'https://www.linkedin.com/in/mehnazjahan-profile59326b/',
        github: 'https://github.com/mehnazjahan',
        twitter: 'https://twitter.com/mehnazjahan',
    })
const value={
   profileData,setProfileData
}
  return (
    <ProfileContext.Provider value={value}>
        {children}
    </ProfileContext.Provider>
  )
}
