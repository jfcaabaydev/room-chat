import { useEffect, useRef } from "react";
import MessageCard from "./MessageCard";
import './MessageList.css';


function MessageList({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages]);

  return (
    <div className="message-list">
      {messages.map((message) => (
        <MessageCard key={message.id} message={message} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}

export default MessageList;
