import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useContext } from "react";
import { Authcontext } from "../../Context/Authprovider";
import axiosInstance from "../../api/axiosInstance.js";

export const GoogleSignIN = () => {
  const navigate = useNavigate();
  const { googleSignIn } = useContext(Authcontext);
  const [error, setError] = useState(null);

const handleGoogleSignIn = async () => {
  try {
    const result = await googleSignIn();
    const user = result.user;

    // Make sure axiosInstance has withCredentials:true
    await axiosInstance.post('/user/register', {
      name: user.displayName,
      email: user.email,
    });

    navigate('/'); // after successful register/login

  } catch (error) {
    console.error("Google sign-in failed:", error);
  }
};


  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
      >
        Continue With Google
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};
