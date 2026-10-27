import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";


function Header() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/")
  }

  
  return (
    <div className="header">
      <h1>Chat View</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Header;