import { useState } from "react";
import { stepArray } from "../lib/stepData";
import { Check, ChevronLeft, ChevronRight, MarsIcon } from "lucide-react";

export const Stepper = ({ currentIdx, setcurrentIdx,steps }) => {
  const totalSteps = steps.length;

 console.log("currentidx",currentIdx);
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
      <div className=" flex space-x-2 justify-center ">
        <div>
          <button onClick={handlePrev} className="btn">
                     <ChevronLeft />
          </button>
        </div>
        {steps.map((step, idx) => {
          const stepNumber = idx + 1;
          const isActive = currentIdx === stepNumber;
          const isCompleted = stepNumber < currentIdx;
          return (
            <button key={idx}
              className={`btn  ${
                isActive
                  ? "bg-purple-700 text-white"
                  : isCompleted
                  ? "bg-purple-200 text-black opacity-70"
                  : "btn-outline border-purple-200"
              }`}
            >
           {isCompleted && <Check />}   {step}
            </button>
          );
        })}

        <div>
          <button
            disabled={currentIdx === totalSteps}
            onClick={handleNext}
            className="btn"
          >
           <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};
