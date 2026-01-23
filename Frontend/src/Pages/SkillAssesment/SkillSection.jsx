import React from "react";
import { useAllSkillAssessments } from "../../hooks/useSkillAssesment";
import { SkillCard } from "./Assessment.ui/SkillCard";
import { Spinner } from "../../Components/loading/loader/Spinner";
import { Heading } from "../../Components/Shared/Heading";

export const SkillSection = () => {
  const { data: skills, isPending } = useAllSkillAssessments();
  let allSkills = skills?.data || [];

  if (isPending) {
    return <Spinner />;
  }
  return (
    <div className="container mx-auto">
  <Heading
  title="Skill Assessment"
  subtitle="Test and evaluate your proficiency in key job-related skills"
/>

      <div
        className="
      grid 
      grid-cols-1         
      sm:grid-cols-2      
      lg:grid-cols-4 gap-12
      justify-items-center py-8 
    "
      >
        {allSkills.map((skill) => (
          <SkillCard skill={skill} key={skill._id} />
        ))}
      </div>
    </div>
  );
};
