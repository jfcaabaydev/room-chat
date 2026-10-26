import { useNavigate } from "react-router-dom";
import { useRoom } from "../context/useRoom";

function RoomCard({room}) {
  const navigate = useNavigate();
  const { setSelectedRoom } = useRoom();

  return (
    <div className="room-card" onClick={() => { 
      setSelectedRoom(room);
      navigate("/chat");
    }}>
      <h3>{room.name}</h3>
      <p>{room.description}</p>
    </div>
  );
}

export default RoomCard;