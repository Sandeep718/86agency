import React, { useRef } from "react";
import axios from "axios";
import { useState } from "react";
export default function UserForm() {
  const [data, setData] = useState({});
  const name = useRef(null);
  const email = useRef(null);
  const bio = useRef(null);

  function handlesubmit(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:3059/users`, data)
      .then((data) => {
        console.log(data.data._id);
        localStorage.setItem("userID", data.data._id);
      });

    name.current.value = "";
    email.current.value = "";
    bio.current.value = "";
  }
  const handlechange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container">
      <div>
        <h1 className="heading">create user</h1>
        <form onSubmit={handlesubmit}>
          <label htmlFor="">name</label>
          <input
            ref={name}
            type="text"
            name="name"
            maxlength="50"
            onChange={handlechange}
            required
          />
          <label htmlFor="">email</label>
          <input
            ref={email}
            type="text"
            name="email"
            onChange={handlechange}
            required
          />
          <label htmlFor="">bio</label>
          <input
            ref={bio}
            type="text"
            name="bio"
            maxlength="200"
            onChange={handlechange}
            required
          />
          <input className="button-4" type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
}
