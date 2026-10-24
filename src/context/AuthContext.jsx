import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.js";
import { AuthContext } from "./useAuth.js";


export function AuthProvider({ children }) {
  const [ currentUser, setCurrentUser ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    // fires every time login/logout happens
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // null = logged out, object = logged in
      setLoading(false); // Firebase has responded
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}