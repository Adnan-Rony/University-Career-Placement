import { Blog } from "../Components/Home/Blog";
import { Featured } from "../Components/Home/Featured";
import HeroSection from "../Components/Home/HeroSection";
import { Testimonails } from "../Components/Home/Testimonails";



export const Home = () => {
  return (
    
  <div className="">
      <title>Job Portal || Home</title>
      <meta name="description"
       content="Find your dream job with our Smart Job Placement
        Portal. Explore job listings, apply online, and build your 
        career with ease."/>
        <meta name="keywords"
         content="jobs, careers, job portal, job search, 
         employment, hiring, job listings, apply online, career growth"/>


    <HeroSection/>
    <Featured/>
    <Blog/>
    <Testimonails/>

   


  </div>
  );
};
