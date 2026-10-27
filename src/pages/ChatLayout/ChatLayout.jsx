import { useRoom } from "../../context/useRoom";
import Header from "../../components/Header";
import RoomsView from "./RoomsView";


function ChatLayout() {
  const { selectedRoom } = useRoom();

  const rooms = [{
    id: crypto.randomUUID(),
    name: "Anime",
    description: "let's talk about Anime",
  }, {
    id: crypto.randomUUID(),
    name: "One-Piece",
    description: "Let's talk about One Piece",
  }, {
    id: crypto.randomUUID(),
    name: "Video-games",
    description: "What's the best video games out there",
  }, {
    id: crypto.randomUUID(),
    name: "Books",
    description: "Books Recommendations",
  }, {
    id: crypto.randomUUID(),
    name: "Music",
    description: "Give and get Music Recommendations",
  }];
  

  return (
    <div className="chat-layout">
      <Header />
      <RoomsView selectedRoom={selectedRoom} rooms={rooms} />
      <p>{selectedRoom.name}</p>
    </div>
  ); 
}

export default ChatLayout;
