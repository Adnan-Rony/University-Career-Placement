import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const Authcontext = createContext();
const auth = getAuth(app);


export const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();



  // SigninWithGoogle

  const googleSignIn=()=>{
    return signInWithPopup(auth,provider)
  }
  
    // Logout

  const googlelogout = () => {
    return signOut(auth);
  };


  const Authinfo = {
    user,
   googlelogout,
   googleSignIn
  };

  // Observer Funtion
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <Authcontext.Provider value={Authinfo}>{children}</Authcontext.Provider>
  );
};
