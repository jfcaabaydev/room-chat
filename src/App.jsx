import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthPage from "./pages/AuthPage/AuthPage";
import ChatLayout from "./pages/ChatLayout/ChatLayout";
import RoomsPage from "./pages/RoomsPage/RoomsPage";
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/chat" element={
          <ProtectedRoute>
            <ChatLayout />
          </ProtectedRoute>
        } />
        <Route path="/rooms" element={
          <ProtectedRoute>
            <RoomsPage />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
}

export default App
