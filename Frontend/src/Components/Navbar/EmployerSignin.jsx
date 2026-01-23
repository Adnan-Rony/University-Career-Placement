import React from 'react'
import { FaUserTie } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export const EmployerSignin = ({setDropdownOpen}) => {
  return (
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
  )
}
