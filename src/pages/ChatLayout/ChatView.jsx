import { useEffect, useState } from "react";
import { useRoom } from "../../context/useRoom";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import MessageList from "./MessageList";
import InputBar from "./InputBar";



function ChatView() {
  const [messages, setMessages] = useState([]); // stores all messages for the current room
  const { selectedRoom } = useRoom(); // get the currently selected room from context

  const roomId = selectedRoom?.id;

  useEffect(() => {
    if (!roomId) return; // Don't subscribe until a room has been selected

    // Build a query for this room's messages, oldest first
    const q = query(
      collection(db, "rooms", roomId, "messages"),
      orderBy("createdAt"),
    );

    // Listen for message updates in real time; returning the unsubscribe function cleans up the listener
    return onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id, // Keep the Firestore document ID for React list keys
          ...doc.data(), // Include the message fields from the document
        })),
      );
    });
  }, [roomId]); // Re-run the subscription when the selected room changes


  return (
    <div>
      <MessageList messages={messages}/>
      {roomId && <InputBar />}
    </div>  
  ); 
}

export default ChatView;
