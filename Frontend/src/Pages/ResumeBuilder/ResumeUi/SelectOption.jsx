import { useState } from "react";
import ProfessionSelect from "./ProfessionSelect";

import { templatesData } from "../lib/templatedata";
import RecommendedTemplates from "./RecommendedTemplates";
import { TemplateGrid } from "./TemplateGrid";

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
          <RecommendedTemplates selectedProfession={selectedProfession} />
        </div>

        {/* Templates */}
        <div className="mt-12">
          <h2
            className="font-bold mb-4 text-2xl md:text-3xl lg:text-4xl mb-6 "
          >
            All Templates
          </h2>

          <TemplateGrid templatesData={templatesData} />
        </div>
      </div>
    </>
  );
};
