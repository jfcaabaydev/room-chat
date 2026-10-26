import { useNavigate } from "react-router-dom";

function RoomCard({room}) {
  const navigate = useNavigate();

  return (
    <div className="room-card" onClick={() => navigate("/chat")}>
      <h3>{room.name}</h3>
      <p>{room.description}</p>
    </div>
  );
}

export default RoomCard;