import './ChatHeader.css';


function ChatHeader({ selectedRoom }) {
  
  return (
    <div className="chat-header">
      <p className='chat-room-name'>{selectedRoom.name}</p>
      <p className='chat-room-desc'>{selectedRoom.description}</p>
    </div>
  );
}

export default ChatHeader;