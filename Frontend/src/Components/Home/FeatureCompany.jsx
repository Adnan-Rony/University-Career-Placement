
import { SectionTitle } from "../Shared/SectionTitle.jsx";
import CardCompany from "./CardCompany.jsx";

const FeatureCompany = () => {
  return (
    <div className="container  mx-auto p-2 m-12 ">
      
      <div className=" ">
          <SectionTitle
                title={"Featured Companies"}
                nextpage={"Explore More"}
                nextpageLink="/allcompanies" // <- Add the route here
                // subtitle={" Choose jobs from the top employers and apply for the same"}
              />
        <CardCompany></CardCompany>
      </div>

     
    </div>
  );
};

export default FeatureCompany;
