

function MessageCard({ message }) {
  
  return (
    <div className="message-card">
      <p>{message.text}</p>
    </div>
  );
}

export default MessageCard;