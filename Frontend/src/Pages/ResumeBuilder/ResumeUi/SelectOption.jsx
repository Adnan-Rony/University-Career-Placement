import { useState } from "react";
import ProfessionSelect from "./ProfessionSelect";

import { templatesData } from "../lib/templatedata";
import RecommendedTemplates from "./RecommendedTemplates";

export const SelectOption = () => {
  const [selectedProfession, setSelectedProfession] = useState("");
  return (
    <>
      <div className="container mx-auto py-16">
        <ProfessionSelect
          selectedProfession={selectedProfession}
          setSelectedProfession={setSelectedProfession}
        />
        {/* Recommended Templates */}
<div className="">
     <h2
            className="font-bold
   text-2xl md:text-3xl lg:text-4xl my-6 "
          >
           Recommended Templates
          </h2>
  <RecommendedTemplates  selectedProfession={selectedProfession}/>
</div>
        
        {/* Templates */}
        <div className="mt-12">
          <h2
            className="font-bold
   text-2xl md:text-3xl lg:text-4xl mb-6 "
          >
            All Templates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {templatesData.map((template) => (
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
          </div>
        </div>
      </div>
    </>
  );
};
