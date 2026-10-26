import { useState } from "react";
import { RoomContext } from "./useRoom";

export function RoomProvider({ children }) {
  // to store the selected room and any component can read it.
  const [selectedRoom, setSelectedRoom] = useState("");

  return (
    <RoomContext.Provider value={{selectedRoom, setSelectedRoom}}>
      {children}
    </RoomContext.Provider>
  );
}