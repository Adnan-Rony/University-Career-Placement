import React from 'react'
import { templatesData } from '../lib/templatedata'

export default function RecommendedTemplates({selectedProfession}) {
 const recommendedtemplates=templatesData.filter((template)=>(template.profession.toLowerCase())===(selectedProfession.toLowerCase()))
 console.log(recommendedtemplates.length);
  return (
    <div>
        {
            recommendedtemplates.length<1 ?"Please Select Your Profession" :
            
           (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {recommendedtemplates.map((template) => (
              <div
                key={template.id}
                className="border rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
              >
                {/* Template Image */}
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full  object-cover"
                />

                <div>
                  <button></button>
                </div>
              </div>
            ))}
          </div>)
        }
         
    </div>
  )
}
