import axios from "axios";
import React, { useEffect, useState } from "react";

import "../style/table.css";
export default function Table({
  Current,
  edituser,
  settoggle,
  setEdituser,
  setID,
  del,
}) {
  function handleupdate(id) {
    setEdituser(!edituser);
    setID(id);
  }
  function handledelete(id) {
    axios
      .delete(`http://localhost:3059/users/${id}`)
      .then((data) => {
        settoggle(!del);
      });
  }
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>Email</th>
          <th>Bio</th>
          <th>view</th>
          <th>update</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody id="body">
        {Current.map((el, i) => {
          return (
            <tr key={i}>
              <th>{el.name}</th>
              <th>{el.email}</th>
              <th>{el.bio}</th>
              <th>
                <button className="button-4">view</button>
              </th>
              <th>
                <button
                  className="button-4"
                  onClick={() => {
                    handleupdate(el._id);
                  }}
                >
                  update
                </button>
              </th>
              <th>
                <button
                  className="button-4 red"
                  onClick={() => {
                    handledelete(el._id);
                  }}
                >
                  🗑️
                </button>
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
