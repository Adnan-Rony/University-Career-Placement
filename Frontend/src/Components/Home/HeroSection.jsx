import img from "../../assets/7d1edb20fcd9e15fc71a8e6cc80ede1f.png";
import SearchBar from "./SearchBar.jsx";

const HeroSection = () => {
  return (
    <div>
      <div className="flex items-center justify-center p-10 bg-gradient-to-r from-[#f7f1fb] to-[#f6effb]">
        <section className="grid lg:grid-cols-2 gap-10 container mx-auto ">
          
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="lg:text-4xl text-2xl font-semibold leading-tight text-gray-800">
              Find a job that aligns with <br /> your interests and skills
            </h1>
            <p className="text-gray-600 py-2 ">
              Thousands of jobs in all the leading sectors are waiting for you.
            </p>

            <SearchBar></SearchBar>

            <p className="text-gray-500">
              Suggestions:{" "}
              <span className="text-purple-600">Software Developer</span>,
              Programming,{" "}
              <span className="text-purple-600">Graphic Designer</span>,Data
              Analyst, Marketing Specialist.
            </p>
          </div>
          <div className="flex justify-center ">
            <img
              src={img}
              alt="Job Search Illustration"
              className="w-full max-w-md  "
            />
          </div>

        </section>
      </div>
    </div>
  );
};

export default HeroSection;
