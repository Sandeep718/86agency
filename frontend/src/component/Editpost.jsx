import axios from "axios";
import React, { useState } from "react";

export default function Editpost({ seettoggle, toggle, id }) {
  const [data, setData] = useState({});

  function handlesubmit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:3059/posts/${id}`, data)
      .then((data) => {
        seettoggle(!toggle);
      });
  }
  const handlechange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handlesubmit} style={{ width: "25%" }}>
        <label htmlFor="">content</label>
        <input type="text" name="content" onChange={handlechange} required />

        <input className="button-4" type="submit" value="Update" />
      </form>
    </div>
  );
}
