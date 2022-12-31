import React, { useState } from "react";
import "./login.css";
import capture from "./Capture.PNG";
import backend from "../../api/api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const postLogin = async () => {
    try {
      const body = {
        email: state?.email,
        password: state?.password,
      };
      const resp = await backend.post("/api/user/login", body);
      localStorage.setItem("token", resp?.data?.token);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: resp.data.data,
      });
      navigate("/chatapp/chat");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="centerMe">
      <div class="card loginCard">
        <div className="loginTitle">
          <h2>Welcome To Chatty Chat</h2>
        </div>
        <label className="mt-3">Email</label>
        <input
          //   value={state?.password}
          onChange={handleLogin}
          name="email"
        />
        <label className="mt-3">Password</label>
        <input
          //   value={state?.password}
          name="password"
          onChange={handleLogin}
        />

        <div className="btnContainer mt-5">
          <div>
            <button onClick={postLogin}>Save</button>
          </div>
        </div>
      </div>
      <div className="bgImage">
        <img src={capture} />
      </div>
    </div>
  );
}
