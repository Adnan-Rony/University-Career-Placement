import React, { useContext } from 'react'
import { Authcontext } from '../../Context/Authprovider'
import { FaGoogle } from 'react-icons/fa'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { GoogleAuthProvider } from 'firebase/auth'

export const GoogleSignIN = () => {
    const navigate = useNavigate();
      const {user,logout,googleSignIn}=useContext(Authcontext)
      console.log(user);
      const handleGoogleSignin=()=>{
        googleSignIn()
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            toast.success("Sign In With Google Successful");
            navigate("/");
            const user = result.user;
            console.log(user)
           
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
       
        
          });

      }
  return (
    <div>
        <button
        onClick={handleGoogleSignin}
        className="p-3 shadow-2xl rounded-lg hover:bg-gray-100 transition-all">
                        <FaGoogle className="text-red-500" size={20} />
                      </button>
    </div>
  )
}
