import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div>
             <section className="relative bg-gradient-to-br from-purple-50 via-purple-100 to-background py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <p className="mb-4 bg-purple-100 text-primary hover:bg-purple-200">
              University Career Placement Portal
            </p>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Launch Your Career with
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"> Confidence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with top employers, build stunning resumes, and get personalized career guidance. 
              Your dream job is just a click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <button  className="px-8 py-3 bg-r-primary btn text-white">
                  Get Started as Student
                </button>
                
              </Link>
              <Link to="/employer-register">
                <button  className="border-primary btn text-primary  px-8 py-3">
                  Post Jobs as Employer
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Hero;