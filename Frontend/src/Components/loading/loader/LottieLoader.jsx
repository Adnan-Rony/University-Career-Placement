import Lottie from "lottie-react";
import lottieAniamtion from "../../../assets/lottie/LoadingLottie animation.json"

export const LottieLoader = () => {
  return (
<div className="flex  justify-center items-center h-screen">
    <Lottie animationData={lottieAniamtion}
 loop={true} 
 className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72"
 />
</div>
   
  
  )
}
