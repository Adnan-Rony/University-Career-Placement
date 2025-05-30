import { useState } from "react";
import { FaHeart, FaUser } from "react-icons/fa";
import { MdDashboard, MdKeyboardArrowDown } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import { UseLogout } from "../../hooks/useAuth.js";



export const UserDropdown = ({ user }) => {
  const { mutate: logout, isPending } = UseLogout();
  const [isdown, setDown] = useState(false);
  const navigate = useNavigate();
  const handleDrowpdown = () => {
    setDown(!isdown);
  };
  const handleLogout = () => {
    console.log("Logout clicked");
    logout(undefined, {
      onSuccess: () => {
        console.log("Logout successful, navigating...");
        navigate("/SignIn");
      },
      onError: (error) => {
        console.error("Logout error:", error);
      },
    });
  };

  const avatar =
    "https://res.cloudinary.com/dto6ulc5n/image/upload/v1742757754/ayo-ogunseinde-6W4F62sN_yI-unsplash_z8moxp.jpg";
  return (
    <div>
      <div
        onClick={handleDrowpdown}
        className="btn px-3  py-6 gap-2 items-center"
      >
        <div className="w-10 h-10 border-r-primary rounded-full border-2  ">
          <img
            className="rounded-full w-full h-full object-cover"
            src={avatar}
            alt="avatar"
          />
        </div>
        <MdKeyboardArrowDown className="text-xl" />
      </div>

      {isdown && (
        <div className="absolute right-4 top-16 w-48 rounded-xl bg-white shadow-lg z-50 border border-gray-200">
          <ul className="py-2 text-sm text-gray-700">
            <li className="px-4 py-2">
              <h2 className="block  hover:bg-gray-100 capitalize">
                {user.name}
              </h2>
              <h2 className="block   hover:bg-gray-100 text-sm/loose text-gray-400">
                {user.email}
              </h2>
            </li>

            <hr className="text-gray-400  my-1" />
            <li>
              <Link className=" px-4 py-2 hover:bg-gray-100 flex items-center gap-1">
                <MdDashboard /> Dashboard
              </Link>
            </li>
            <li>
              <Link className=" px-4 py-2 hover:bg-gray-100 flex items-center gap-1">
                <FaUser /> Profile
              </Link>
            </li>
            <li>
              <Link className=" px-4 py-2 hover:bg-gray-100 flex items-center gap-1">
                <FaHeart /> Wishlist
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className=" px-4 py-2 hover:bg-gray-100 flex items-center gap-1"
              >
                <IoMdSettings /> Settings
              </Link>
            </li>
            <hr className="text-gray-400  my-2" />

            <button
              onClick={handleLogout}
              className="w-full text-left px-4 pb-2  text-red-600 flex items-center gap-1
       hover:bg-gray-100"
            >
              <IoLogOut /> Logout
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};
