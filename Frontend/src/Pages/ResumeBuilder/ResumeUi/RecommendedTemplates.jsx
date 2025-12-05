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
    <div className="w-full">
      {recommendedtemplates.length < 1 ? (
        <div className="
  p-[60px_20px]
  text-center
  bg-gray-50
  rounded-lg
  border border-gray-300
"
>
          <h2 className="text-[20px] font-semibold text-gray-700 mb-2"
>
            No Templates Found
          </h2>
          <p  className="text-sm text-gray-500"
>
            Please select your profession to view recommended resume templates.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6"
>
            Recommended Templates for {selectedProfession}
          </h2>
          
          <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]"
>
            {recommendedtemplates.map((template) => (
              <div
                key={template.id}
            className="
    bg-white border border-gray-300 rounded-lg overflow-hidden 
    shadow cursor-pointer 
    hover:shadow-xl transition-shadow duration-300
  "
                
              >
                
                {/* Template Image */}
                <div className="w-full pb-full bg-gray-100 
                h-[350px]
                overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.title}
               className=" w-full h-full"
                  />
                </div>

                {/* Template Info */}
                <div className='p-4'>
                  <h3 className="text-gray-900 font-semibold text-base mb-2">
                    {template.title}
                  </h3>
                  
             
                  
                  <button
                    disabled={template.locked}
                    onClick={() => navigate(`/resumebuilder/build-your-resume/${template.id}`)}
             className={`w-full py-2 px-4 text-sm font-semibold rounded-md transition ${
                      template.locked
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60 '
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                  >
                    {template.locked ? <p> Unlock Premium</p> : 'Select Template'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
