import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
 
import app from "../../Firebase/Firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true)

  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    signOut(auth);
  };

  // observer user auth state
          useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser);
               setLoading(false);
          });

          // stop observing while unmounting
          return () => {
               return unsubscribe();
          };
          }, []);

   

  const authInfo = {
    user,
    loading,
    creatUser,
    singIn,
    logout,
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
