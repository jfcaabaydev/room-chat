import RoomCard from "../../components/RoomCard";
import { useNavigate } from "react-router-dom";
import { useRoom } from "../../context/useRoom";
import './RoomsGrid.css'


function RoomsGrid({rooms}) {
  const navigate = useNavigate();
  const { setSelectedRoom } = useRoom();
  
  return (
    <div className="rooms-grid">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} onClick={() => {
          setSelectedRoom(room);
          navigate("/chat");
          }} />
        ))}
    </div>
  );
}

export default RoomsGrid;