import React, { useEffect, useState } from "react";
import InputEmoji from "react-input-emoji";
import { useDispatch, useSelector } from "react-redux";
import backend from "../../api/api";
import io from "socket.io-client";
import Message from "../message/Message";

import { css } from "@emotion/css";
import ScrollToBottom from "react-scroll-to-bottom";
import { Button } from "@mui/material";
const socket = io.connect("http://localhost:3001");
const ROOT_CSS = css({
  height: 655,
});
export default function ChatBoxBody({ chat, user, allUser }) {
  const { allMessages } = useSelector((state) => state?.message);
  const [userAllMessages, setUserAllMessages] = useState([]);
  const [shownName, setShownName] = useState();

  const dispatch = useDispatch();
  const [messageText, setmessageText] = useState("");
  function handleOnEnter(text) {
    setmessageText(text);
  }
  useEffect(() => {
    const myFriendId = chat?.members?.find((e) => e !== user);
    const myFrienddata = allUser?.find((e) => e?._id === myFriendId);
    setShownName(myFrienddata);
  }, [chat, user]);
  const getAllMessages = async () => {
    try {
      const resp = await backend.get(`/api/messages/${chat?._id}`);
      dispatch({
        type: "MESSAGE_SUCCESS",
        payload: resp.data.data,
      });
      setUserAllMessages(resp?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllMessages();
  }, [chat]);

  useEffect(() => {
    socket.emit("myFrontHandConnection", {
      message: "The Client 1 is Connected",
    });
    socket.emit("getAllUser", user);
    socket.on("disconnectUser", user);

    socket.on("getUsers", (data) => {
      // console.log(data);
    });
  }, []);
  const handleChatMessage = async () => {
    try {
      const body = {
        chatId: chat?._id,
        senderId: user,
        text: messageText,
        recieverId: shownName?._id,
      };
      socket.emit("sendMessage", body);
      const resp = await backend.post("/api/messages", body);
      setUserAllMessages((prevMessage) => [...prevMessage, resp.data.data]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    socket.on("recieveMessage", (data) => {
      setUserAllMessages((prevMessage) => [...prevMessage, data]);
    });
  }, []);
  return (
    <div>
      <div className="personName">{shownName?.name}</div>
      <div className="personCommunications">
        {userAllMessages?.map((e) => (
          <div>
            <Message UserMessage={e} loginUser={user} />
          </div>
        ))}
      </div>
      <div className="chatInput">
        <InputEmoji
          value={messageText}
          onChange={setmessageText}
          placeholder="Type a message"
        />
        <Button onClick={handleChatMessage}>Send</Button>
      </div>
    </div>
  );
}
