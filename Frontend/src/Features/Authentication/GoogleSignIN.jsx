import { useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { Authcontext } from "../../Context/Authprovider";
import axiosInstance from "../../api/axiosInstance.js";
import { FcGoogle } from "react-icons/fc";

export const GoogleSignIN = () => {
  const navigate = useNavigate();
  const { googleSignIn } = useContext(Authcontext);
  const [error, setError] = useState(null);

  const handleGoogleSignIn = async () => {
    setError(null); 
    try {
      const result = await googleSignIn();
      const user = result.user;

      // Call google-login endpoint
      const response = await axiosInstance.post(
        '/user/google-login',
        {
          name: user.displayName,
          email: user.email,
        },
        { withCredentials: true } 
      );

      if (response.data.success) {
        navigate('/'); 
      } else {
        setError(response.data.message || 'Google sign-in failed');
      }
    } catch (error) {
      console.error("Google sign-in failed:", error);
      setError(error.response?.data?.message || 'Google sign-in failed. Please try again.');
    }
  };

  return (
    <div className="my-4">
  <button
    onClick={handleGoogleSignIn}
    className="w-full flex items-center justify-center gap-2 py-2 px-4  rounded-md shadow-sm bg-gray-100 text-gray-700 font-medium  transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <FcGoogle className="text-xl" />
    Continue with Google
  </button>

  {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
</div>

  );
};