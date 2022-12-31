import React, { useState } from "react";
import backend from "../../api/api";

export default function SignUp() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    Rupees: "",
  });
  const handleSignUp = async () => {
    try {
      const body = {
        name: state.name,
        email: state.email,
        password: state.password,
        Rupees: state.Rupees,
      };
      const resp = await backend.post("/api/user", body);
    } catch (error) {
      console.log(error);
    }
  };
  const handleMyCredtionals = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>
      signUp
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          name
        </label>
        <input
          //   type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          name="name"
          onChange={handleMyCredtionals}
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          name="email"
          placeholder="name@example.com"
          onChange={handleMyCredtionals}
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Password
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          name="password"
          onChange={handleMyCredtionals}
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Rupees
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          name="Rupees"
          onChange={handleMyCredtionals}
        />
      </div>
      <button onClick={handleSignUp}>sign up</button>
    </div>
  );
}
