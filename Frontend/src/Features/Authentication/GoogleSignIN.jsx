import React, { useContext } from "react";
import { Authcontext } from "../../Context/Authprovider";
import { FaGoogle } from "react-icons/fa";
import { USER_API_END_POINT } from "../../utils/Constant";
import { useNavigate } from "react-router";
import axios from "axios";

export const GoogleSignIN = () => {
  const navigate = useNavigate();
  const { user, logout, googleSignIn } = useContext(Authcontext);
  // console.log(user);
  const handleGoogleSignin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          fullname: result.user?.displayName,
          email: result.user?.email,
          profilePhoto: result.user?.photoURL,
        };

        // Send user data to backend for registration or login
        axios
          .post(`${USER_API_END_POINT}/register`, userInfo)
          .then((response) => {
            console.log(response.data);
            console.log("UserInfo Sent", userInfo);
            navigate("/");
          })
          .catch((error) => {
            console.error(
              "Error while storing user info:",
              error.response || error
            );
          });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div>
      <button
        onClick={handleGoogleSignin}
        className="p-3 shadow-2xl rounded-lg hover:bg-gray-100 transition-all"
      >
        <FaGoogle className="text-red-500" size={20} />
      </button>
    </div>
  );
};
