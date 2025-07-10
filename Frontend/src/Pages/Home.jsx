import Article from "../Components/Home/Article.jsx";
import { Blog } from "../Components/Home/Blog";
import FeatureCompany from "../Components/Home/FeatureCompany.jsx";
import FeaturedJob from "../Components/Home/FeaturedJob.jsx";
import HeroSection from "../Components/Home/HeroSection";
import PopulerJob from "../Components/Home/PopulerJob.jsx";
import SponserCompany from "../Components/Home/SponserCompany.jsx";
import Newsletter from "../Components/Home/SubsCribeNewsLetter.jsx";
import { Testimonails } from "../Components/Home/Testimonails";


export const Home = () => {
  return (
    <div className="">
      <title>Job Portal || Home</title>
      <meta
        name="description"
        content="Find your dream job with our Smart Job Placement
        Portal. Explore job listings, apply online, and build your 
        career with ease."
      />
      <meta
        name="keywords"
        content="jobs, careers, job portal, job search, 
         employment, hiring, job listings, apply online, career growth"
      />

      <HeroSection />
      <PopulerJob/>
      {/* <FeatureCompany></FeatureCompany> */}
      {/* <FeaturedJob /> */}
      <SponserCompany/>
      {/* <Blog /> */}
      <Article/>
      <Newsletter></Newsletter>
      {/* <Testimonails /> */}
    </div>
  );
};
