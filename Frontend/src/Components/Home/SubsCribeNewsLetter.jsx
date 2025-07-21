import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#f7f1fb] to-[#f6effb] py-20 flex justify-center items-center ">
      <div className="text-center px-4">
        <h2 className="text-black text-3xl md:text-4xl font-bold mb-3">
          Subscribe Our Newsletter
        </h2>
        <p className="font-medium text-xl mb-6 text-gray-600">
          We don’t send spam so don’t worry.
        </p>
        <form className="flex items-center justify-center
        border
        max-w-2xs  md:max-w-xl mx-auto bg-white rounded-full overflow-hidden shadow-lg px-1 py-1">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1  md:px-4 md:py-3 text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#7405de] to-[#a626ec]
              text-white btn md:btn-lg
               font-semibold rounded-full transition duration-300"
          >
            Subscribe
          </button>
        </form>
      
      </div>
    </div>
  );
};

export default Newsletter;
