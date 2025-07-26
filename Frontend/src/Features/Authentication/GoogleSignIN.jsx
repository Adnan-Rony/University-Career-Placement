import { useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { Authcontext } from "../../Context/Authprovider";
import axiosInstance from "../../api/axiosInstance.js";

export const GoogleSignIN = () => {
  const navigate = useNavigate();
  const { googleSignIn } = useContext(Authcontext);
  const [error, setError] = useState(null);

  const handleGoogleSignIn = async () => {
    setError(null); // Clear previous errors
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
        { withCredentials: true } // Ensure cookies are sent
      );

      if (response.data.success) {
        navigate('/'); // Navigate to home on success
      } else {
        setError(response.data.message || 'Google sign-in failed');
      }
    } catch (error) {
      console.error("Google sign-in failed:", error);
      setError(error.response?.data?.message || 'Google sign-in failed. Please try again.');
    }
  };

  return (
    <div className="my-3">
      <button
        onClick={handleGoogleSignIn}
        className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
      >
        Continue With Google
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};