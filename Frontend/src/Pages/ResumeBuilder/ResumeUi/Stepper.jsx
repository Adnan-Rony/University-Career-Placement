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
  // const handleNext = () => {
  //   if (currentIdx <= totalSteps) {
  //     setcurrentIdx(currentIdx + 1);
  //   } 
 
  //   setSubmit(true)
    
  // };

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
            <button
              key={idx}
        
              className={`btn  ${
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

        <div>
          <button
            disabled={currentIdx === totalSteps}
            onClick={handleNext}
            className="btn"
            type="submit"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};
