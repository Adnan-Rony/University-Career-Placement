import React from 'react'
import { useCurrentUser } from '../../../../../../../hooks/useAuth'
import { Github, Linkedin, Workflow, WorkflowIcon } from 'lucide-react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const ProfileSummary = () => {
    const {data}=useCurrentUser()
    const infos=data?.user
    console.log(infos);
    const {name,email,picture,location,primaryRole,bio}=infos
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
            <h2  className='text-2xl font-semibold'>{name}</h2>
            <h3 className='font-medium text-gray-400'>{location}</h3>
        </div>
      </div>
      <div className='flex gap-2 text-sm text-gray-600'>
        <a href="" target='_blank' className=''>
            <Github/>
            <span className='sr-only'>visit my github</span>
        </a>
        <a href="" target='_blank' className=''>
             <Linkedin/>
            <span className='sr-only'>visit my github</span>
        </a>
        <a href="" target='_blank' className=''>
           <span>Website</span>
            <span className='sr-only'>visit my github</span>
        </a>
        <a href="" target='_blank' className=''>
           <span>Resume</span>
            <span className='sr-only'>visit my github</span>
        </a>
      </div>
    </section>
    {/* Bio */}
    <section className='my-4'>
        <h2 className='font-medium text-gray-600'>About Me</h2>
        <div className=''>
            {/* <VerticalTimeline 
            layout='1-column-left'
            >
           



   <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkflowIcon />}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkflowIcon/>}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkflowIcon/>}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<WorkflowIcon/>}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<WorkflowIcon/>}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<WorkflowIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<WorkflowIcon />}
  />
            </VerticalTimeline> */}  
           <h1 className='text-sm text-gray-600'>{bio}</h1>
        </div>
    </section>
    </div>
  )
}
