import './MessageCard.css';
import { useAuth } from "../../context/useAuth";

function MessageCard({ message }) {
  const { currentUser } = useAuth();
  
  return (
    <div className={`${message.userId === currentUser.uid ? "message-card-user" : "message-card-member"}`}>
      {message.userId !== currentUser.uid && <p className="message-username">{message.username}</p>}
      <p className="message-text">{message.text}</p>
    </div>
  );
}

export default MessageCard;