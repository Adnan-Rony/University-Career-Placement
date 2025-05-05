import React, { useContext } from "react";
import { Authcontext } from "../../Context/Authprovider";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/Constant";

export const GoogleSignIN = () => {
  const navigate = useNavigate();
  const { user, logout, googleSignIn } = useContext(Authcontext);
  // console.log(user);
  const handleGoogleSignin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
  
        // You can set the role here manually or let the user choose it from a form
        const userInfo = {
          fullname: result.user?.displayName,
          email: result.user?.email,
          profilePhoto: result.user?.photoURL,
          firebaseUID: result.user.uid, // ✅ Send UID to the backend
          role: "student", //  Manually set or fetch from a role selector
        };
  
        console.log("Sending to backend:", `${USER_API_END_POINT}/register`);
  
        axios
          .post(`${USER_API_END_POINT}/register`, userInfo)
          .then((response) => {
            console.log(response.data);
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
        console.log("Google Sign-In Error", error.message);
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
}