import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useResumeContext } from "../../../Context/ResumeProvider";

export const Stepper = ({ currentIdx, setcurrentIdx, steps }) => {
  const totalSteps = steps.length;
const {submitAction, setSubmit,triggerSubmit}=useResumeContext()
  const handlePrev = () => {
    if (currentIdx > 1) {
      setcurrentIdx(currentIdx - 1);
    }
  };


const handleNext = () => {
  if (currentIdx <= totalSteps) {
    setcurrentIdx(currentIdx + 1);
    if (triggerSubmit) {
      triggerSubmit(); // Call the submit function
    }
  }
};

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4">
        {/* Previouse Button */}
        <div>
          <button onClick={handlePrev}
           className="btn btn-sm sm:btn-md md:btn-lg flex items-center justify-center">
            <ChevronLeft  />
          </button>
        </div>
        {steps.map((step, idx) => {
          const stepNumber = idx + 1;
          const isActive = currentIdx === stepNumber;
          const isCompleted = stepNumber < currentIdx;
          return (
            <button
              key={idx}
        
              className={`btn btn-sm sm:btn-md md:btn-lg min-w-[60px] sm:min-w-[80px] md:min-w-[100px] flex items-center
                 justify-center text-xs sm:text-sm md:text-base  ${
                isActive
                  ? "bg-purple-700 text-white"
                  : isCompleted
                  ? "bg-purple-200 text-black opacity-70"
                  : "btn-outline border-purple-200"
              }`}
            >
              {isCompleted && <Check />} {step}
            </button>
          );
        })}
{/* Next Button */}
        <div>
          <button
            disabled={currentIdx === totalSteps}
            onClick={handleNext}
            className="btn btn-sm sm:btn-md md:btn-lg flex items-center justify-center"
            type="submit"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};
