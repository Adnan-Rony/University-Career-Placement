import { Link, NavLink } from "react-router-dom";
import { useCurrentUser } from "../../hooks/useAuth";
import { UserDropdown } from "./UserDropdown";
import { useState } from "react";
import { FaUserTie, FaUserGraduate, FaGraduationCap } from "react-icons/fa";
import { AlignJustify, X, Sparkles } from "lucide-react";

export const Navbar = () => {
  const { data } = useCurrentUser();
  const user = data?.user;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Normal nav links
  const navItems = [
    { name: "Home", to: "/" },
    { name: "Jobs", to: "/alljobs" },
    { name: "Skill Assessment", to: "/skill-assessment" },
    { name: "Companies", to: "/allcompanies" },
    { name: "FAQs", to: "/interview-questions" },
  ];

  // Special gradient links with icon
  const specialNavItems = [
    { name: "Portfolio Builder", to: "/portfolio-builder" },
    { name: "Resume Builder", to: "/resumebuilder" },
  ];

  const normalLinks = navItems.map((item) => (
    <li key={item.to}>
      <NavLink
        to={item.to}
        onClick={() => setMobileMenuOpen(false)}
        className={({ isActive }) =>
          `block px-4 py-2 rounded-md transition-colors ${
            isActive
              ? "text-purple-700 font-semibold bg-purple-50"
              : "text-gray-600 hover:text-purple-700 hover:bg-gray-50"
          }`
        }
      >
        {item.name}
      </NavLink>
    </li>
  ));

  const gradientLinks = specialNavItems.map((item) => (
    <li key={item.to}>
      <NavLink
        to={item.to}
        onClick={() => setMobileMenuOpen(false)}
        className={({ isActive }) =>
          `group relative block px-4 py-2 rounded-md transition-all duration-300 ${
            isActive
              ? "text-white font-semibold bg-gradient-to-r from-purple-600 to-blue-600 shadow-md"
              : "font-medium bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 border border-purple-200"
          }`
        }
      >
        {({ isActive }) => (
          <span className="flex items-center gap-1.5">
            <Sparkles
              size={14}
              className={`${isActive ? "text-yellow-300" : "text-purple-600"}`}
            />
            {item.name}
          </span>
        )}
      </NavLink>
    </li>
  ));

  const navElements = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className={({ isActive }) =>
            `block px-4 py-2 rounded-md transition-colors ${
              isActive
                ? "text-purple-700 font-semibold bg-purple-50"
                : "text-gray-600 hover:text-purple-700 hover:bg-gray-50"
            }`
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/alljobs"
          onClick={() => setMobileMenuOpen(false)}
          className={({ isActive }) =>
            `block px-4 py-2 rounded-md transition-colors ${
              isActive
                ? "text-purple-700 font-semibold bg-purple-50"
                : "text-gray-600 hover:text-purple-700 hover:bg-gray-50"
            }`
          }
        >
          Jobs
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/skill-assessment"
          onClick={() => setMobileMenuOpen(false)}
          className={({ isActive }) =>
            `block px-4 py-2 rounded-md transition-colors ${
              isActive
                ? "text-purple-700 font-semibold bg-purple-50"
                : "text-gray-600 hover:text-purple-700 hover:bg-gray-50"
            }`
          }
        >
          Skill Assessment
        </NavLink>
      </li>
      {/* exclusive design */}

      <li>
        <NavLink
          to="/portfolio-builder"
          onClick={() => setMobileMenuOpen(false)}
          className={({ isActive }) =>
            `group relative block px-4 py-2 rounded-md transition-all duration-300 ${
              isActive
                ? "text-white font-semibold bg-gradient-to-r from-purple-600 to-blue-600 shadow-md"
                : " font-medium bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 border border-purple-200"
            }`
          }
        >
          {({ isActive }) => (
            <span className="flex items-center gap-1.5">
              <Sparkles
                size={14}
                className={`${
                  isActive ? "text-yellow-300" : "text-purple-600"
                }`}
              />
              Portfolio Builder
            </span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/resumebuilder"
          onClick={() => setMobileMenuOpen(false)}
          className={({ isActive }) =>
            `group relative block px-4 py-2 rounded-md transition-all duration-300 ${
              isActive
                ? "text-white font-semibold bg-gradient-to-r from-purple-600 to-blue-600 shadow-md"
                : " font-medium bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 border border-purple-200"
            }`
          }
        >
          {({ isActive }) => (
            <span className="flex items-center gap-1.5">
              <Sparkles
                size={14}
                className={`${
                  isActive ? "text-yellow-300" : "text-purple-600"
                }`}
              />
              Resume Builder
            </span>
          )}
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allcompanies"
          onClick={() => setMobileMenuOpen(false)}
          className={({ isActive }) =>
            `block px-4 py-2 rounded-md transition-colors ${
              isActive
                ? "text-purple-700 font-semibold bg-purple-50"
                : "text-gray-600 hover:text-purple-700 hover:bg-gray-50"
            }`
          }
        >
          Companies
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/interview-questions"
          onClick={() => setMobileMenuOpen(false)}
          className={({ isActive }) =>
            `block px-4 py-2 rounded-md transition-colors ${
              isActive
                ? "text-purple-700 font-semibold bg-purple-50"
                : "text-gray-600 hover:text-purple-700 hover:bg-gray-50"
            }`
          }
        >
          FAQs
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left - Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center bg-purple-700 text-white rounded-md">
                <FaGraduationCap />
              </div>
              <h2 className="font-bold text-black text-lg hidden sm:block">
                JobPortal
              </h2>
            </div>
          </Link>

          {/* Center - Desktop Links */}
          <ul className="hidden lg:flex gap-1 xl:gap-4 items-center text-sm font-medium">
            {normalLinks}
            {gradientLinks}
          </ul>

          {/* Right - User/Login & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            {/* User Dropdown or Sign In */}
            <div className="relative">
              {user ? (
                <UserDropdown user={user} />
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none whitespace-nowrap"
                  >
                    <span className="hidden sm:inline">
                      Sign In or Create Account
                    </span>
                    <span className="sm:hidden">Sign In</span>
                  </button>

                  {dropdownOpen && (
                    <>
                      {/* Backdrop */}
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setDropdownOpen(false)}
                      />

                      {/* Dropdown */}
                      <div className="absolute right-0 mt-2 w-[calc(100vw-2rem)] sm:w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-[80vh] overflow-y-auto">
                        {/* Job Seeker */}
                        <div className="p-4 border-b flex items-start gap-3 sm:gap-4">
                          <div className="bg-gray-100 p-2 rounded-full flex-shrink-0">
                            <FaUserGraduate className="text-lg sm:text-xl text-purple-700" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-semibold">
                              Job Seeker
                            </h3>
                            <p className="text-gray-500 text-xs sm:text-sm mt-1">
                              Sign in or create an account to manage your job
                              profile.
                            </p>
                            <div className="flex gap-2 mt-3">
                              <Link
                                to="/SignIn"
                                onClick={() => setDropdownOpen(false)}
                                className="text-xs sm:text-sm text-white bg-purple-700 px-3 py-1.5 rounded hover:bg-purple-800 transition-colors"
                              >
                                Sign In
                              </Link>
                              <Link
                                to="/SignUp"
                                onClick={() => setDropdownOpen(false)}
                                className="text-xs sm:text-sm text-purple-700 border border-purple-600 px-3 py-1.5 rounded hover:bg-purple-50 transition-colors"
                              >
                                Create Account
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Employer */}
                        <div className="p-4 flex items-start gap-3 sm:gap-4">
                          <div className="bg-gray-100 p-2 rounded-full flex-shrink-0">
                            <FaUserTie className="text-lg sm:text-xl text-green-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-semibold">
                              Employer
                            </h3>
                            <p className="text-gray-500 text-xs sm:text-sm mt-1">
                              Post jobs, view applications and manage your
                              company profile.
                            </p>
                            <div className="flex gap-2 mt-3">
                              <Link
                                to="/employer-signIn"
                                onClick={() => setDropdownOpen(false)}
                                className="text-xs sm:text-sm text-white bg-green-600 px-3 py-1.5 rounded hover:bg-green-700 transition-colors"
                              >
                                Sign In
                              </Link>
                              <Link
                                to="/employer-create-company"
                                onClick={() => setDropdownOpen(false)}
                                className="text-xs sm:text-sm text-green-600 border border-green-600 px-3 py-1.5 rounded hover:bg-green-50 transition-colors"
                              >
                                Create Account
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <AlignJustify size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <ul className="space-y-1">
              {" "}
              {normalLinks}
              {gradientLinks}
            </ul>

            {/* Mobile Sign In Options (if not logged in) */}
            {!user && (
              <div className="mt-4 pt-4 border-t space-y-4">
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-4">
                    Job Seeker
                  </p>
                  <div className="flex gap-2 px-4">
                    <Link
                      to="/SignIn"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-1 text-center text-sm text-white bg-purple-700 px-4 py-2 rounded hover:bg-purple-800 transition-colors"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/SignUp"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-1 text-center text-sm text-purple-700 border border-purple-600 px-4 py-2 rounded hover:bg-purple-50 transition-colors"
                    >
                      Create Account
                    </Link>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-4">
                    Employer
                  </p>
                  <div className="flex gap-2 px-4">
                    <Link
                      to="/employer-signIn"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-1 text-center text-sm text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition-colors"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/employer-create-company"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-1 text-center text-sm text-green-600 border border-green-600 px-4 py-2 rounded hover:bg-green-50 transition-colors"
                    >
                      Create Account
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
