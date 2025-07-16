import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#f7f1fb] to-[#f6effb] py-20 flex justify-center items-center ">
      <div className="text-center px-4">
        <h2 className="text-black text-3xl md:text-4xl font-bold mb-3">
          Subscribe Our Newsletter
        </h2>
        <p className="text-black-200 mb-6">
          We don’t send spam so don’t worry.
        </p>
        <form className="flex items-center justify-center max-w-xl mx-auto bg-white rounded-full overflow-hidden shadow-lg px-2 py-1">
          <input
            type="email"
            placeholder="Your e-mail"
            className="flex-1 px-4 py-3 text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#7405de] to-[#a626ec]  text-white font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
