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
 

  
  return (
    <div>
      <button
      
        className="p-3 shadow-2xl rounded-lg hover:bg-gray-100 transition-all"
      >
        <FaGoogle className="text-red-500" size={20} />
      </button>
    </div>
  );
}