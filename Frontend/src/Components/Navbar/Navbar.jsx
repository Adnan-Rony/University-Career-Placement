import { Link, NavLink } from "react-router-dom";
import { useCurrentUser } from "../../hooks/useAuth";
import { UserDropdown } from "./UserDropdown";
import { useState } from "react";
import { FaUserTie, FaUserGraduate } from "react-icons/fa";

export const Navbar = () => {
  const { data } = useCurrentUser();
  const user = data?.user;
  const [dropdownOpen, setDropdownOpen] = useState(false);

const navElements = (
  <>
    {!user ? (
      // User Not Logged In
      <>
        <li>
          <NavLink
            to="/SignIn"
            className={({ isActive }) =>
              isActive ? 'text-primary' : 'text-gray-500'
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/SignUp"
            className={({ isActive }) =>
              isActive ? 'text-primary' : 'text-gray-500'
            }
          >
            Register
          </NavLink>
        </li>
      </>
    ) : null}

    <li>
      <NavLink
        to="/alljobs"
        className={({ isActive }) =>
          isActive ? 'text-r-primary font-semibold' : 'text-gray-600'
        }
      >
        Home
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/interview-questions"
        className={({ isActive }) =>
          isActive ? 'text-r-primary font-semibold' : 'text-gray-600'
        }
      >
        FAQs
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/allcompanies"
        className={({ isActive }) =>
          isActive ? 'text-r-primary font-semibold' : 'text-gray-600'
        }
      >
        Companies
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? 'text-primary' : 'text-gray-500'
        }
      >
        About Us
      </NavLink>
    </li>
  </>
);


  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left - Logo */}
        <Link to="/" className="text-xl font-bold text-black">
          Job<span className="text-r-primary">Portal</span>
        </Link>

        {/* Center - Links */}
        <ul className="hidden lg:flex gap-6 items-center text-sm font-medium">
          {navElements}
        </ul>

        {/* Right - User/Login */}
        <div className="relative">
          {user ? (
            <UserDropdown user={user} />
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none"
              >
                Sign In or Create Account
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {/* Job Seeker */}
                  <div className="p-4 border-b flex items-start gap-4">
                    <div className="bg-gray-100 p-2 rounded-full">
                      <FaUserGraduate className="text-xl text-purple-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Job Seeker</h3>
                      <p className="text-gray-500 text-sm">
                        Sign in or create an account to manage your job profile.
                      </p>
                      <div className="flex gap-2 mt-3">
                        <Link
                          to="/SignIn"
                          onClick={() => setDropdownOpen(false)}
                          className="text-sm text-white bg-r-primary px-3 py-1 rounded "
                        >
                          Sign In
                        </Link>
                        <Link
                          to="/SignUp"
                          onClick={() => setDropdownOpen(false)}
                          className="text-sm text-purple-700 border border-purple-600 px-3 py-1 rounded hover:bg-blue-50"
                        >
                          Create Account
                        </Link>
                      </div>
                    </div>
                  </div>
                  

                  {/* Employer */}
                  <div className="p-4 flex items-start gap-4">
                    <div className="bg-gray-100 p-2 rounded-full">
                      <FaUserTie className="text-xl text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Employer</h3>
                      <p className="text-gray-500 text-sm">
                        Post jobs, view applications and manage your company profile.
                      </p>
                      <div className="flex gap-2 mt-3">
                        <Link
                          to="/SignIn"
                          onClick={() => setDropdownOpen(false)}
                          className="text-sm text-white bg-green-600 px-3 py-1 rounded hover:bg-green-700"
                        >
                          Sign In
                        </Link>
                        <Link
                          to="employer-create-company"
                          onClick={() => setDropdownOpen(false)}
                          className="text-sm text-green-600 border border-green-600 px-3 py-1 rounded hover:bg-green-50"
                        >
                          Create Account
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden border-t px-4 pb-4">
        <details className="dropdown w-full">
          <summary className="btn btn-ghost w-full justify-start text-left mt-2">
            Menu
          </summary>
          <ul className="menu bg-white w-full pt-2 space-y-2">{navElements}</ul>
        </details>
      </div>
    </nav>
  );
};
