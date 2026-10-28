

function ChatHeader({ selectedRoom }) {
  
  return (
    <div className="chat-header">
      <p>{selectedRoom.name}</p>
      <p>{selectedRoom.description}</p>
    </div>
  );
}

export default ChatHeader;