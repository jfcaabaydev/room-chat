import RoomCard from "../../components/RoomCard";
import { useRoom } from "../../context/useRoom";


function RoomsView({ rooms }) {
  const { setSelectedRoom } = useRoom();


  return (
    <div className="rooms-view">
     {rooms.map((room) => (
      <RoomCard key={room.id} room={room} onClick={() => {
        setSelectedRoom(room);
      }}/>
     ))}
    </div>
  );
}

export default RoomsView;