import React from "react";
import { useParams } from "react-router";
import { useAssessmentBySkillId } from "../../../hooks/useSkillAssesment";
import { AssesmentCard } from "../Assessment.ui/AssesmentCard";

export const Assesments = () => {
  const { id } = useParams();
  const {
    data: assessments,
    isPending,
    isError,
    error,
  } = useAssessmentBySkillId(id);

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
   if (isError) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="alert alert-error">
          <span>Error Fetching Data</span>
        </div>
      </div>
    );
  }

 if (!assessments || assessments.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="alert alert-info">
          <span>No assessments found</span>
        </div>
      </div>
    );
  }
  return (
 <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Available Assessments</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assessments.map((assessment) => (
         
          <AssesmentCard key={assessment._id} assessment={assessment}  />
        ))}
      </div>
    </div>
  );
};
