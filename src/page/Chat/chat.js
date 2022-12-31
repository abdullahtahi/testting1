import React, { useState, useEffect } from "react";
import "./chat.css";
import { css } from "@emotion/css";
import ScrollToBottom from "react-scroll-to-bottom";

import DisplayUserData from "../displayUserData/displayUserData";
import { useDispatch, useSelector } from "react-redux";
import backend from "../../api/api";
import ChatBoxBody from "../ChatBoxBody/ChatBoxBody";
const ROOT_CSS = css({
  height: 655,
  // width: 400,
});

export default function Chat() {
  const dispatch = useDispatch();
  const { chat } = useSelector((state) => state?.chat);
  const { login } = useSelector((state) => state?.auth);
  const { User } = useSelector((state) => state?.user);
  const [currentChat, setCurrentChat] = useState([]);

  const getChat = async () => {
    try {
      const resp = await backend.get("/api/chat");
      dispatch({
        type: "CHAT_SUCCESS",
        payload: resp?.data?.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getAllUsers = async () => {
    try {
      const resp = await backend.get("/api/user");
      dispatch({
        type: "GETALLUSER_SUCCESS",
        payload: resp?.data?.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getChat();
    getAllUsers();
  }, []);
  return (
    <div className="chatContainer">
      <div className="header"></div>
      <div className="chatPageData">
        <div className="ShowAllPeople">
          <div className="card">
            <input placeholder="Search" />
            <h5>Online Users</h5>
            {chat?.map((e) => (
              <div onClick={() => setCurrentChat(e)}>
                <DisplayUserData myChat={e} user={login?._id} allUser={User} />
              </div>
            ))}
          </div>
        </div>
        <div className="showChatBox">
          <div className="card">
            <ScrollToBottom
              style={{
                width: "100%",
                overflowX: "auto",
              }}
              className={ROOT_CSS}
            >
              <ChatBoxBody
                chat={currentChat}
                user={login?._id}
                allUser={User}
              />
            </ScrollToBottom>
          </div>
        </div>
      </div>
    </div>
  );
}
