import RoomCard from "../../components/RoomCard";
import { useRoom } from "../../context/useRoom";
import './RoomsView.css';


function RoomsView({ rooms, showDescription = false, onRoomSelect }) {
  const { selectedRoom ,setSelectedRoom } = useRoom();
  
  
  return (
    <div className="rooms-view">
     {rooms.map((room) => (
      <RoomCard isActive={room.id === selectedRoom?.id} key={room.id} room={room} showDescription={showDescription} onClick={() => {
        setSelectedRoom(room);
        onRoomSelect?.(); // if true call the closeOnMobile function
      }}/>
     ))}
    </div>
  );
}

export default RoomsView;