import React from 'react'

export const AssesmentCard = ({assessment}) => {
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} minutes`;
  };

    const handleStartQuiz = (assessmentId) => {
    // Navigate to quiz page - adjust the route as needed
   
  };

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
  )
}
