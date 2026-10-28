import { useRoom } from "../../context/useRoom";
import Header from "../../components/Header";
import RoomsView from "./RoomsView";
import ChatView from "./ChatView";

function ChatLayout() {
  const { selectedRoom } = useRoom();

  const rooms = [
    {
      id: "anime",
      name: "Anime",
      description: "let's talk about Anime",
    },
    {
      id: "one-piece",
      name: "One-Piece",
      description: "Let's talk about One Piece",
    },
    {
      id: "video-games",
      name: "Video-games",
      description: "What's the best video games out there",
    },
    {
      id: "books",
      name: "Books",
      description: "Books Recommendations",
    },
    {
      id: "music",
      name: "Music",
      description: "Give and get Music Recommendations",
    },
  ];

  return (
    <div className="chat-layout">
      <Header />
      <RoomsView selectedRoom={selectedRoom} rooms={rooms} />
      <ChatView />
    </div>
  );
}

export default ChatLayout;
