import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Table from "./Table";
import Editform from "./Editform";

export default function List() {
  const [data, setData] = useState([]);
  const [deleteuser, setdelete] = useState(false);
  const [edituser, setEdituser] = useState(false);
  const [id, setID] = useState(null);
  useEffect(() => {
    getlist();
  }, [deleteuser, edituser]);

  function getlist(e) {
    axios.get(`http://localhost:3059/users`).then((data) => {
      setData(data.data);
    });
  }

  return (
    <div>
      {edituser ? (
        <Editform setEdituser={setEdituser} edituser={edituser} id={id} />
      ) : (
        ""
      )}
      {data.length > 0 ? (
        <Table
          Current={data}
          settoggle={setdelete}
          setEdituser={setEdituser}
          edituser={edituser}
          setID={setID}
          del={deleteuser}
        />
      ) : (
        <span class="loader"></span>
      )}
    </div>
  );
}
