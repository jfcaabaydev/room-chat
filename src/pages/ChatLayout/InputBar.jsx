import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../../context/useAuth";
import { useRoom } from "../../context/useRoom";
import { db } from "../../firebase";

function InputBar() {
  const [value, setValue] = useState(""); // controlled input value

  const { currentUser } = useAuth(); // get the currently logged-in user
  const { selectedRoom } = useRoom(); // get the currently selected room

  const roomId = selectedRoom.id;

  const handleSend = async () => {
    if (!value.trim()) return; // prevent sending empty messages

    // addDoc creates a new document in the messages sub-collection
    // collection path: rooms → roomId → messages
    await addDoc(collection(db, "rooms", roomId, "messages"), {
      text: value,
      userId: currentUser.uid, // unique id of the sender
      username: currentUser.displayName, // display name shown in chat
      createdAt: serverTimestamp(), // Firebase server time — more reliable than client time
    });

    setValue(""); // clear the input after sending
  };

  // Enter key to send message
  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      await handleSend();
    }
  };

  return (
    <div className="input-bar">
      <input
        value={value}
        type="text"
        placeholder="Type message..."
        className="input-text"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="input-send-button"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
}

export default InputBar;
