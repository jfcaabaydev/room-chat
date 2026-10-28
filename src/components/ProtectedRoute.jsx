import { useAuth } from "../context/useAuth";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { currentUser, loading } = useAuth();

  
  if (loading) return <div>Loading...</div>
  if (!currentUser) return <Navigate to="/" />

  return children;
}

export default ProtectedRoute;