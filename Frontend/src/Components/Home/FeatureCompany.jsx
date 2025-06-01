
import { SectionTitle } from "../Shared/SectionTitle.jsx";
import CardCompany from "./CardCompany.jsx";

const FeatureCompany = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-2 m-12 ">
      
      <div className=" ">
          <SectionTitle
                title={"Featured Companies"}
                // subtitle={" Choose jobs from the top employers and apply for the same"}
              />
        <CardCompany></CardCompany>
      </div>

     
    </div>
  );
};

export default FeatureCompany;
