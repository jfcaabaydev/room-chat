import { useEffect, useState } from "react";
import Header from "../../components/Header";
import RoomsView from "./RoomsView";
import ChatView from "./ChatView";
import './ChatLayout.css';


function ChatLayout() {
  // start closed on small screens
  const [ isSidebarOpen, setIsSidebarOpen ] = useState(() => window.innerWidth > 768);

  // Keep the sidebar closed on mobile and open on desktop when the viewport crosses the 768px breakpoint.
  useEffect(() => {
    const breakpoint = window.matchMedia("(max-width: 768px)");

    const handleChange = (event) => {
      setIsSidebarOpen(!event.matches);
    };

    breakpoint.addEventListener("change", handleChange);

    return () => breakpoint.removeEventListener("change", handleChange);
  }, []);
  

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

  const onToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeOnMobile = () => {
    if (window.innerWidth <= 768) setIsSidebarOpen(false);
  }


  return (
    <div className={`chat-layout ${isSidebarOpen ? "" : "sidebar-closed" }`}>
      <Header onToggleSidebar={onToggleSidebar} />
      <RoomsView rooms={rooms} onRoomSelect={closeOnMobile} />
      <ChatView />
    </div>
  );
}

export default ChatLayout;
