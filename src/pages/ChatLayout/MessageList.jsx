import MessageCard from "./MessageCard";

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <MessageCard key={message.id} message={message} />
      ))}
    </div>
  );
}

export default MessageList;
