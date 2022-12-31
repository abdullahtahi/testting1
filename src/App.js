import React, { useEffect } from "react";
import Chat from "./page/Chat/chat";
import Login from "./page/Login/login";
import SignUp from "./page/signUp/signUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Testing from "./store/Testing";

export default function App() {
  return (
    <Router>
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chatapp/login" element={<Login />} />

        <Route path="/chatapp/chat" element={<Chat />} />
      </Routes> */}

      <Testing />
    </Router>
  );
  // <Chat />
}
