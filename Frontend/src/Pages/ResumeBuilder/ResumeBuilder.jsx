
import { Link } from "react-router"
import resume1 from "../../assets/resume/resume1.png"
export const ResumeBuilder = () => {
  return (
    <div className="container mx-auto py-16">
<div className="flex items-center flex-col gap-4 sm:flex-row px-4 sm:py-16 sm:px-6 lg:px-8">
    
      <div className="md:w-1/2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Build Your Professional Resume
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold my-6">
                Create a standout resume anytime, anywhere, 
                with our easy-to-use resume builder platform.
              </p>
              <div>
                <Link to="/resumebuilder/selectoption"
                 className="btn btn-primary ">
                    Create Resume Now
                </Link>
              
              </div>
      </div>
      <div className="flex-1 max-w-sm sm:max-w-md md:max-w-lg w-full border rounded-lg overflow-hidden">
        <img src={resume1}
        className="h-full w-full"
        alt="resume banner" />
      </div>
</div>
      
    
    
    </div>
  )
}
