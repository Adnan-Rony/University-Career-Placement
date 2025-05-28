import React from "react";

const CompanyCard = () => {
  return (
    <div>


      <div className="flex items-center justify-evenly gap-4">
        <img
          src="https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-5.png&w=256&q=75"
          alt="Invision Logo"
          className="w-12 h-12 rounded-md object-cover"
        />

        <div>
          <p>Company Name</p>
          <button className="text-blue-500">View Company Profile</button>
        </div>
      </div>
        <div className=" my-4 space-y-2">
            <div className="flex justify-between items-center">
                    <p>Primary industry:</p>
                    <p>Software</p>
            </div>
            <div className="flex justify-between items-center">
                    <p>Founded in:</p>
                    <p>2024</p>
            </div>
            <div className="flex justify-between items-center">
                    <p>Email:</p>
                    <p>adnan@gmail.com</p>
            </div>
            <div className="flex justify-between items-center">
                    <p>Location:</p>
                    <p>Mirpur,Dhaka</p>
            </div>
            <div className="flex justify-between items-center">
                    <p>Phone:</p>
                    <p>017474730447</p>
            </div>
        </div>

    </div>
  );
};

export default CompanyCard;
