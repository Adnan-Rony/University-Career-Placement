import { FaHeart, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MdDashboard, MdKeyboardArrowDown } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { UseLogout } from "../../hooks/useAuth.js";
import toast from "react-hot-toast";
import { Authcontext } from "../../Context/Authprovider.jsx";
import { useContext } from "react";


export const UserDropdown = ({ user }) => {
  const { mutate: logout, isPending } = UseLogout();
   const { googlelogout } = useContext(Authcontext);
  const navigate = useNavigate();

  const avatar =
    "https://thumbs.dreamstime.com/b/minimalist-male-avatar-brown-hair-teal-shirt-flat-style-perfect-user-profile-social-media-illustration-colors-384307770.jpg";

const handleLogout = async () => {
    try {
      // Clear Firebase auth session
      await googlelogout();
      // Clear backend JWT token
      logout(undefined, {
        onSuccess: () => {
          toast.success("Logout successfully");
          navigate("/");
        },
        onError: (error) => {
          console.error("Backend logout error:", error);
          toast.error(error.message || "Logout failed");
        },
      });
    } catch (error) {
      console.error("Google logout error:", error);
      toast.error("Google logout failed");
    }
  };


  return (
    <div className="dropdown dropdown-end z-50">
      <div
        tabIndex={0}
        className="btn btn-ghost px-3 py-1.5 flex items-center gap-2 border rounded-full hover:bg-gray-100 transition"
      >
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-200">
          <img
            className="w-full h-full object-cover"
            src={user?.picture || avatar}
            alt="avatar"
          />
        </div>
        <MdKeyboardArrowDown className="text-xl text-gray-600" />
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content w-64 mt-2 bg-white  rounded-xl shadow-lg p-3 space-y-1 text-sm"
      >
        <li className="mb-2">
          <div className="px-3 py-2">
            <h2 className="text-gray-800 font-semibold capitalize">
              {user?.name}{" "}
              <span className="text-purple-600 font-normal">
                ({user?.role})
              </span>
            </h2>
            <p className="text-gray-500 text-xs">{user?.email}</p>
          </div>
        </li>

        <hr className="text-gray-300" />

        {user?.role === "admin" && (
          <li>
            <Link
              to="/dashboard/adminDashboard"
              className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 transition gap-2"
            >
              <MdDashboard className="text-gray-600" /> Admin Dashboard
            </Link>
          </li>
        )}

        {/* Employer Menus */}
        {user?.role === "employer" && (
          <li>
            <Link
              to="/dashboard/employerDashboard"
              className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 transition gap-2"
            >
              <MdDashboard className="text-gray-600" /> Employer Dashboard
            </Link>
          </li>
        )}
        {user?.role === "job-seeker" && (
          <>
            <li>
              <Link
                to="/dashboard/jobseekerDashboard"
                className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 transition gap-2"
              >
                <MdDashboard className="text-gray-600" /> Jobseeker Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/jobseekerProfile"
                className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 transition gap-2"
              >
                <FaUser className="text-gray-600" /> Profile
              </Link>
            </li>

            <li>
              <Link
                to="/wishlist"
                className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 transition gap-2"
              >
                <FaHeart className="text-gray-600" /> Wishlist
              </Link>
            </li>

            <li>
              <Link
                to="/settings"
                className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 transition gap-2"
              >
                <IoMdSettings className="text-gray-600" /> Settings
              </Link>
            </li>
          </>
        )}

        <hr className="text-gray-300" />

        <li>
          <button
            onClick={handleLogout}
            disabled={isPending}
            className="w-full flex items-center px-3 py-2 text-red-600 rounded-md hover:bg-red-50 transition gap-2"
          >
            <IoLogOut /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};
