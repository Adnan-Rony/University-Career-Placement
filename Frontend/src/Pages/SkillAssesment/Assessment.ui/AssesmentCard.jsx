import React from "react";
import { useCurrentUser } from "../../../hooks/useAuth";
import { data, useNavigate } from "react-router";
import { useStartSkillAssessment } from "../../../hooks/useSkillAssesment";
import toast from "react-hot-toast";

export const AssesmentCard = ({ assessment }) => {
  //current user
  const navigate = useNavigate();
  const { data, isPending: userLoading } = useCurrentUser();
  const userId = data?.user?._id;

  const { mutate, isPending: isStarting } = useStartSkillAssessment();

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} minutes`;
  };

  const handleStartQuiz = (assessmentId) => {
    mutate(
      { assessmentId, userId },
      {
        onSuccess: (response) => {
          console.log("Assesment started successfully");
          const attemptId = response.attemptId;
       
          if (attemptId) {
            navigate(`/quiz-started/questions`, {
              state: {attemptId},
            });
          }
        },
        onError: (error) => {
          console.log("Failed to start assessment:", error.message);
          toast.error("Failed to start assessment");
        },
      }
    );
  };
  if (userLoading) {
    return <h1>Loading...</h1>;
  }
  if (isStarting) {
    return <h1 className="text-4xl text-green-500">Starting Quiz....</h1>;
  }

  return (
    <div key={assessment._id} className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{assessment.title}</h2>
        <p className="text-base-content/70">{assessment.description}</p>

        <div className="flex items-center gap-2 mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-sm">
            Duration: {formatDuration(assessment.duration_seconds)}
          </span>
        </div>

        <div className="card-actions justify-end mt-4">
          <button
            className="btn btn-primary"
            onClick={() => handleStartQuiz(assessment._id)}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};
