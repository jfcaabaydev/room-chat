import { useState } from "react";
import { auth } from "../../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './AuthForm.css'


function AuthForm() {
  const [ isLogin, setIsLogin ] = useState(true)
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ username, setUsername ] = useState("");
  const [ error, setError ] = useState("");

  const navigate = useNavigate();


  const handleSubmit = async () => {
    setError("");
    try {
      if (isLogin === true) {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/rooms");
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password); 
        await updateProfile(userCredential.user, { displayName: username })
        navigate("/rooms");
      }
    } catch (err) {
      setError(err.message)
    }
  }


  return (
    <div className="auth-form">
      <input 
        className="auth-input-email" 
        type="email" 
        placeholder="Email..." 
        onChange={(e) => setEmail(e.target.value)} />
      <input 
        className="auth-input-password" 
        type="password" 
        placeholder="Password..." 
        onChange={(e) => setPassword(e.target.value)} />
      {isLogin || <input 
        className="auth-input-username" 
        type="text" 
        placeholder="Username..." 
        onChange={(e) => setUsername(e.target.value)} />}
      <button 
        className="auth-submit-button" 
        onClick={handleSubmit}>Submit</button>
      <button 
        className="auth-toggle-button" 
        onClick={() => setIsLogin(!isLogin)}>Toggle</button>
      {error && <p className="auth-error-display">{error}</p>}
    </div>
  );
}

export default AuthForm;