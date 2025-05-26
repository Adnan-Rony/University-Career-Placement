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

  // Logout

  const logout = () => {
    return signOut(auth);
  };

  // SigninWithGoogle

  const googleSignIn=()=>{
    return signInWithPopup(auth,provider)
  }


  const Authinfo = {
    user,
    logout,googleSignIn
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
