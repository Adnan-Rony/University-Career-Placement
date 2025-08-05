import React from 'react'
import { useCurrentUser } from '../../../../../../../hooks/useAuth'
import { Github, Linkedin, Workflow, WorkflowIcon } from 'lucide-react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const ProfileSummary = () => {
    const {data}=useCurrentUser()
    const infos=data?.user
    console.log(infos);
    const {name,email,picture,
socialLinks,primaryRole,bio,address,education,workExperience}=infos
    console.log(address.city);
  return (
    <div className='py-6 border m-4  border-gray-300 rounded-xl px-8'>
    
    <section className='flex justify-between'>
      <div className='flex gap-1'>
          <figure className='h-14 w-14'>
         <img 
         className='w-full h-full object-cover rounded-full border border-gray-300'
         src={picture} alt="profilePicture" />
        </figure>
        {/* name,location */}
        <div>
            <h2  className='text-2xl font-semibold capitalize'>{name}</h2>
            <h3 className='font-medium text-gray-400'>{address.city}</h3>
        </div>
      </div>
      <div className='flex gap-2 text-sm text-gray-600'>
        <a href={socialLinks.github} target='_blank' className=''>
            <Github/>
            <span className='sr-only'>visit my github</span>
        </a>
        <a href={socialLinks.linkedin
} target='_blank' className=''>
             <Linkedin/>
            <span className='sr-only'>visit my linkedin
</span>
        </a>
        <a href={socialLinks.portfolio} target='_blank' className=''>
           <span>Website</span>
            <span className='sr-only'>visit my portfolio</span>
        </a>
        <a href={socialLinks.portfolio} target='_blank' className=''>
           <span>Resume</span>
            <span className='sr-only'>visit my github</span>
        </a>
      </div>
    </section>
    {/* Bio */}
    <section className='my-4'>
        <h2 className='font-medium text-gray-600'>About Me</h2>
        <div className=''>
      
           <h1 className='text-sm text-gray-600'>{bio}</h1>
        </div>
    </section>
    <section className='my-4'>
        <h2 className='font-medium text-gray-600'>Education</h2>
          <div className=''>
          {
            education.map(edu=><div>
              <h1 className='text-lg capitalize font-medium'>{edu.degreeType}</h1>
      <h1 className='text-purple-700 font-semibold'>{edu.college}</h1>
      <h1 className='text-sm '>Start Year:{edu.startYear}</h1>
      <h1 className='text-sm '>End Year:{edu.endYear}</h1>
            </div>)
          }
         
        </div>
    </section>
    <section className='my-4'>
        <h2 className='font-medium text-gray-600'>Work Experience</h2>
          <div className=''>
          {
            workExperience.map(exp=><div className='my-2'>
              <h1 className='text-lg capitalize font-medium'>{exp.company}</h1>
      <h1 className='font-semibold text-purple-700'>{exp.title
}</h1>
      {/* <h1 className='text-sm '>Start Year:{exp.startDate}</h1>
      <h1 className='text-sm '>End Year:{exp.endDate}</h1> */}
      <h1 className='text-sm '>{exp.description}</h1>
            </div>)
          }
         
        </div>
    </section>
    </div>
  )
}
