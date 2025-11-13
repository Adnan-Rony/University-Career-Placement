import React from 'react'
import { useAllSkillAssessments } from '../../hooks/useSkillAssesment'
import { SkillCard } from './Assessment.ui/SkillCard'

export const SkillSection = () => {
    const {data:skills,isPending}=useAllSkillAssessments() 
    let allSkills=skills?.data || []
    

    if(isPending){
        return <h1>Loading</h1>
    }
  return (
    <div className='container mx-auto'>
        <h2 className='text-4xl font-bold py-8 text-center
        '>SkillSection</h2>
        <div  
           className="
      grid 
      grid-cols-1         
      sm:grid-cols-2      
      lg:grid-cols-4 gap-12
      justify-items-center py-8 
    "
        >
            {
                allSkills.map((skill)=><SkillCard skill={skill} key={skill._id}/>)
            }
        </div>
    </div>
  )
}

