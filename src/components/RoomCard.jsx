import './RoomCard.css'

function RoomCard({ room, onClick, isActive, showDescription = true}) {

  return (
    <div className={`room-card ${isActive ? "active" : ""}`} onClick={() => onClick(room)}>
      <p className='room-name'>{room.name}</p>
      {showDescription && <p className='room-description'>{room.description}</p>} 
    </div>
  );
}

export default RoomCard;