import { useState } from "react";
import { stepArray } from "../lib/stepData";

export const Stepper = ({currentIdx,setcurrentIdx}) => {
  
  const totalSteps = stepArray.length;

  const handlePrev = () => {
    if (currentIdx > 1) {
      setcurrentIdx(currentIdx - 1);
    }
  };
  const handleNext = () => {
    if (currentIdx <= totalSteps) {
      setcurrentIdx(currentIdx + 1);
    }
  };
  return (
    <>
 
      <div className=" flex space-x-2">
        <div>
          <button onClick={handlePrev} className="btn">
            Prev
          </button>
        </div>
        {stepArray.map((step, idx) => {
          const stepNumber = idx + 1;
          const isActive = currentIdx === stepNumber;
          const isCompleted = stepNumber < currentIdx;
          return (
            <button
              className={`btn ${
                isActive
                  ? "bg-purple-700 text-white"
                  : isCompleted
                  ? "bg-purple-200 text-black opacity-70"
                  : "btn-outline"
              }`}
            >
              {step.stepLabel}
            </button>
          );
        })}

        <div>
          <button
            disabled={currentIdx === totalSteps}
            onClick={handleNext}
            className="btn"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
