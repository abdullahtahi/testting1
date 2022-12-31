import React from "react";
import { format } from "timeago.js";

import "./Message.css";
export default function Message({ UserMessage, loginUser }) {
  return (
    <div
      className={
        UserMessage?.senderId === loginUser ? "message own" : "myFriendMessage"
      }
    >
      <div>
        <p>{UserMessage.text}</p>
        <p>{format(UserMessage?.createdAt)}</p>
      </div>
    </div>
  );
}
