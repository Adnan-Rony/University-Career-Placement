import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGraduationCap,
} from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 flex items-center justify-center bg-purple-700 text-white rounded-md">
              <FaGraduationCap />
            </div>
            <h2 className="font-bold text-white text-lg">JobPortal</h2>
          </div>
          <p className="text-sm mb-4">
            Empowering students and connecting them with top employers. Your gateway to a successful career starts here.
          </p>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-purple-700" /> contact-smartjob-portal@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-purple-700" /> +8801864943775
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-purple-700" />Daffodil Smart City 
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>
              <Link to={'/termsAndcondion'}>
              Terms & Conditions
              </Link>
              </li>
            <li>
              <Link to={'/interview-questions'}>
            FAQ
              </Link>
              </li>
           
          </ul>
        </div>

        {/* For Students */}
        <div>
          <h4 className="text-white font-semibold mb-4">For Students</h4>
          <ul className="space-y-2 text-sm">
            <li>Job Search</li>
            <li>Internships</li>
            <li>Resume Builder</li>
            <li>Career Counseling</li>
            <li>Skill Assessment</li>
          </ul>
        </div>

        {/* For Employers */}
        <div>
          <h4 className="text-white font-semibold mb-4">For Employers</h4>
          <ul className="space-y-2 text-sm">
            <li>Post a Job</li>
            <li>Browse Candidates</li>
            <li>Pricing Plans</li>
            <li>Employer Resources</li>
            <li>Campus Hiring</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; 2025 CareerLaunch. All rights reserved.</p>
        <div className="flex gap-3">
          <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-purple-700 rounded-md text-white">
            <FaLinkedin />
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-purple-700 rounded-md text-white">
            <FaTwitter />
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:purple-700 rounded-md text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-pink-600 rounded-md text-white">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
