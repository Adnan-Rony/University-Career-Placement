import React from "react";
import { Link } from "react-router";

const Hero = () => {
  const images=[
    { link:"https://res.cloudinary.com/dto6ulc5n/image/upload/v1764508577/fck3vshlix3vlsnzdlx7.jpg",
      fallback:""
    },
    { link:"https://res.cloudinary.com/dto6ulc5n/image/upload/v1746780002/blog1_drqykp.webp",
      fallback:""
    },
    { link:"https://res.cloudinary.com/dto6ulc5n/image/upload/v1746727398/jobportal_mftoao.webp",
      fallback:""
    },
    { link:"https://res.cloudinary.com/dto6ulc5n/image/upload/v1746688269/microsoft-edge-6CNB3iD8M4E-unsplash_1_600x400_s8czld.jpg",
      fallback:""
    },
    
  ]
  return (
    <section
      id="section"
      className="
        bg-gradient-to-b from-[#F3E8FF] via-[#FFF2FB] to-[#EDE1FF]
        min-h-[85vh] flex items-center 
      "
    >
      <main className="container mx-auto px-6 sm:px-10 md:px-14 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-16 py-24">
        
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          <button
            className="mb-6 flex items-center space-x-2 border
             border-purple-600 text-purple-600 text-xs rounded-full px-4 pr-1.5 py-1.5 hover:bg-purple-50 transition"
            type="button"
          >
         <span>Find your dream job today</span>
            <span className="flex items-center justify-center size-6 p-1 rounded-full bg-purple-600">
              <svg
                width="14"
                height="11"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6.5h14M9.5 1 15 6.5 9.5 12"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          <h1 className="text-gray-900 font-semibold md:font-bold text-4xl sm:text-5xl capitalize lg:text-6xl leading-tight
          ">
             Your next career move 
            <span className="
 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> starts  here</span>
          </h1>

          <p className="mt-5 text-gray-600 text-base leading-relaxed max-w-md">
           Browse thousands of jobs, internships, and freelance opportunities in top companies worldwide.
          </p>

          {/* Search Bar */}
          {/* <div className="mt-8 w-full max-w-md">
            <form className="flex items-center gap-2 bg-white rounded-full shadow-md overflow-hidden">
              <input
                type="text"
                placeholder="Search jobs, companies, or keywords"
                className="flex-1 px-4 py-2 text-sm text-gray-700 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition"
              >
                Search
              </button>
            </form>
          </div> */}
          <div className="flex flex-col md:flex-row items-center mt-10 gap-4">
            <button
              className="bg-purple-600 text-white px-6 pr-2.5 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-purple-700 transition"
              type="button"
            >
              <span>  Post a Job</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <a
              className="text-purple-600 border bg-purple-100 px-6 py-2 rounded-full text-sm font-medium hover:bg-purple-200 transition"
              href="#"
            >
              Browse Jobs
            </a>
          </div>
        </div>

        {/* Right Images */}
        <div
          aria-label="Photos of leaders"
          className="grid grid-cols-2 gap-6"
        >
          {
            images.map((image,idx)=><img key={idx}
            alt="heroimages"
            className="w-40 h-52 rounded-lg hover:scale-105 transition duration-300 object-cover shadow-lg" 
            src={image?.link || "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop"}
          />)
          }
          {/* <img
            alt=""
            className="w-40 h-52 rounded-lg hover:scale-105 transition duration-300 object-cover shadow-lg"
            src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=735&auto=format&fit=crop"
          />
          <img
            alt=""
            className="w-40 h-52 rounded-lg hover:scale-105 transition duration-300 object-cover shadow-lg"
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=687&auto=format&fit=crop"
          />
          <img
            alt=""
            className="w-40 h-52 rounded-lg hover:scale-105 transition duration-300 object-cover shadow-lg"
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop"
          />
          <img
            alt=""
            className="w-40 h-52 rounded-lg hover:scale-105 transition duration-300 object-cover shadow-lg"
            src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=687&auto=format&fit=crop"
          /> */}
        </div>
      </main>
    </section>
  );
};

export default Hero;
