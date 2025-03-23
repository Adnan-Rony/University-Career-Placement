import img from "../../assets/7d1edb20fcd9e15fc71a8e6cc80ede1f.png";

const HeroSection = () => {
    return (
        <div>
               <div className="flex items-center justify-center p-10 bg-gradient-to-r from-[#f7f1fb] to-[#f6effb]">
      <section className="grid lg:grid-cols-2 gap-10 max-w-6xl w-full">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl font-semibold leading-tight text-gray-800">
            Find a job that aligns with <br /> your interests and skills
          </h1>
          <p className="text-gray-600 py-2 ">
            Thousands of jobs in all the leading sectors are waiting for you.
          </p>
          <div className="bg-white p-2 rounded-lg shadow-md flex flex-col lg:flex-row items-center gap-3">
            <input
              type="text"
              placeholder="Job title, Keyword..."
              className="w-full lg:w-1/2 p-3 border rounded-lg outline-none border-none "
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full lg:w-1/4 p-3 border rounded-lg outline-none border-none"
            />
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">
              Find Job
            </button>
          </div>
          <p className="text-gray-500">
            Suggestions: <span className="text-purple-600">UI/UX Designer</span>,
            Programming, <span className="text-purple-600">Digital Marketing</span>,
            Video, Animation.
          </p>
        </div>
        <div className="flex justify-center">
          <img src={img} alt="Job Search Illustration" className="w-full max-w-md" />
        </div>
      </section>
    </div>
        </div>
    );
};

export default HeroSection;