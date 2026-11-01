import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import './Header.css';


function Header({ onToggleSidebar }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/")
  }

  
  return (
    <div className="header"> 
      <div className="header-brand">
        <button className="header-sidebar-btn" onClick={onToggleSidebar}>Side Bar</button>
        <p className="header-app-name">Room Chat</p>
      </div>
      
      <button className="header-logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Header;