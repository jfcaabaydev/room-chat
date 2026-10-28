

function MessageCard({ message }) {
  
  return (
    <div className="message-card">
      <p className="message-username">{message.username}</p>
      <p className="message-text">{message.text}</p>
    </div>
  );
}

export default MessageCard;