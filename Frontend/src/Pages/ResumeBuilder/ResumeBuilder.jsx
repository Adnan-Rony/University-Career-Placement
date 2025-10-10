
import { Link } from "react-router"
import resume1 from "../../assets/resume/resume1.png"
export const ResumeBuilder = () => {
  return (
    <div className="container mx-auto py-16">
<div className="flex items-center">
    
      <div className="">
              <h1 className="text-5xl font-bold">
                Build Your Professional Resume
              </h1>
              <p className="text-3xl font-semibold my-6">
                Create a standout resume anytime, anywhere, 
                with our easy-to-use resume builder platform.
              </p>
              <div>
                <Link to="/resumebuilder/selectoption"
                 className="btn btn-primary text-xl py-6">
                    Create Resume Now
                </Link>
              
              </div>
      </div>
      <div className="border w-[400px]">
        <img src={resume1}
        className="h-full w-full"
        alt="resume banner" />
      </div>
</div>
      
    
    
    </div>
  )
}
