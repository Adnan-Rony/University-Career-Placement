import React from 'react'
import { templatesData } from '../lib/templatedata'
import { useNavigate } from 'react-router'

export default function RecommendedTemplates({selectedProfession}) {
//  const recommendedtemplates=templatesData.filter((template)=>(template.profession.toLowerCase())===(selectedProfession.toLowerCase()))

const recommendedtemplates = templatesData.filter((template) =>
  template.profession.some(
    (p) => p.toLowerCase() === selectedProfession.toLowerCase()
  )
);

const navigate=useNavigate()
  return (
    <div>
        {
            recommendedtemplates.length<1 ?"Please Select Your Profession" :
            
           (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {recommendedtemplates.map((template) => (
              <div
                key={template.id}
                className=
                "relative border rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
              >
                {/* Template Image */}
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full  object-cover"
                />

                <div className='absolute  bottom-10 w-full flex justify-center'>
                  <button
                  onClick={()=>navigate(`/resumebuilder/build-your-resume/${template.id}`)}
                  className='btn bg-purple-500 border-0 text-white'> Select Template</button>
                </div>
              </div>
            ))}
          </div>)
        }
         
    </div>
  )
}
