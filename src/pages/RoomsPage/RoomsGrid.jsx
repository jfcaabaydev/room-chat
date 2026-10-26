import RoomCard from "../../components/RoomCard";


function RoomsGrid({rooms}) {
  
  return (
    <div className="rooms-grid">
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
}

export default RoomsGrid;