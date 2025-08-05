
import { createContext, useEffect, useState } from "react"
import { useCurrentUser } from "../hooks/useAuth"


 export const ProfileContext=createContext()

export const ProfileProvider = ({children}) => {
  const {data,isPending}=useCurrentUser()
  
   const profileInfo= data?.user || {};
   console.log(profileInfo);
    const [profileData,setProfileData]=useState({
        name:"",
        location:'',

        social:{
        website: '',
        linkedin: '',
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
