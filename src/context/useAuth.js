import { createContext, useContext } from "react";

// Creates the context — the shared "container" for auth data
export const AuthContext = createContext(null);

// Custom hook — for accessing auth data
export function useAuth() {
  return useContext(AuthContext);
}