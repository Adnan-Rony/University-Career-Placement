import React from 'react'
import { FaUserGraduate } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const JobSeekerSignIn = ({setDropdownOpen}) => {
  return (
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
  )
}
