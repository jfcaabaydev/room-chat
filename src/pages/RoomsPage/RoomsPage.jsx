import RoomsGrid from "./RoomsGrid";

function RoomsPage() {
  const rooms = [{
    id: "anime",
    name: "Anime",
    description: "let's talk about Anime",
  }, {
    id: "one-piece",
    name: "One-Piece",
    description: "Let's talk about One Piece",
  }, {
    id: "video-games",
    name: "Video-games",
    description: "What's the best video games out there",
  }, {
    id: "books",
    name: "Books",
    description: "Books Recommendations",
  }, {
    id: "music",
    name: "Music",
    description: "Give and get Music Recommendations",
  }];

  
  return (
    <div className="rooms-page">
      <RoomsGrid rooms={rooms} />
    </div>
  );
}

export default RoomsPage;