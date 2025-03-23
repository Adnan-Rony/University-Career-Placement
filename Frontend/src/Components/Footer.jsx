import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-100 to-purple-50  py-10 ">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* AlwaysApply Brand Section */}
          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2 text-purple-700">
              <span className="text-purple-600 ">🔍</span> AlwaysApply
            </h2>
            <p className="mt-2">
              Call now: <a href="tel:+919591776078" className="text-purple-600 font-semibold">+91 9591776078</a>
            </p>
            <p className="mt-2 text-sm">
              465 Chandni Chowk Street, Near Red Fort, Old Delhi, New Delhi, Delhi 110006, India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-700">Quick Link</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-purple-600">About</Link></li>
              <li><Link to="/contact" className="hover:text-purple-600">Contact</Link></li>
              <li><Link to="/admin" className="hover:text-purple-600">Admin</Link></li>
            </ul>
          </div>

          {/* Candidate Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-700">Candidate</h3>
            <ul className="space-y-2">
              <li><Link to="/jobs" className="hover:text-purple-600">Browse Jobs</Link></li>
              <li><Link to="/employers" className="hover:text-purple-600">Browse Employers</Link></li>
              <li><Link to="/dashboard" className="hover:text-purple-600">Candidate Dashboard</Link></li>
              <li><Link to="/saved-jobs" className="hover:text-purple-600">Saved Jobs</Link></li>
            </ul>
          </div>

          {/* Employers Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-700">Employers</h3>
            <ul className="space-y-2">
              <li><Link to="/post-job" className="hover:text-purple-600">Post a Job</Link></li>
              <li><Link to="/candidates" className="hover:text-purple-600">Browse Candidates</Link></li>
              <li><Link to="/employer-dashboard" className="hover:text-purple-600">Employers Dashboard</Link></li>
              <li><Link to="/applications" className="hover:text-purple-600">Applications</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-300 my-6"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-purple-600">
          <p>© 2022 AlwaysApply - Job Portal. All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-purple-800"><FaFacebookF /></a>
            <a href="#" className="hover:text-purple-800"><FaInstagram /></a>
            <a href="#" className="hover:text-purple-800"><FaTwitter /></a>
            <a href="#" className="hover:text-purple-800"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
