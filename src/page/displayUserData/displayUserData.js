import React, { useEffect, useState } from "react";
import user from "./user.jpg";
import backend from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
export default function DisplayUserData({ myChat, user, allUser }) {
  const dispatch = useDispatch();
  //the user to whome to chat
  console.log(myChat?.members.find((e) => e));
  const [ShownUser, setShownUser] = useState(null);
  useEffect(() => {
    if (myChat?.members[0] == user) {
      const myFriendId = myChat?.members?.find((e) => e !== user);
      const myFrienddata = allUser?.find((e) => e?._id === myFriendId);
      setShownUser(myFrienddata);
    } else {
      setShownUser("");
    }
  }, [ShownUser]);

  return (
    <div
      style={{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        padding: "0.5rem",
      }}
    >
      <span>
        <img
          src={user}
          style={{
            width: "50px",
          }}
        />
      </span>
      <span>{ShownUser?.name}</span>
    </div>
  );
}
