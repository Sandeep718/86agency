import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import PostTable from "./PostTable";
import Editpost from "./Editpost";

export default function PostList() {
  const [data, setData] = useState([]);
  const [id, setID] = useState(null);
  const [toggle, seettoggle] = useState(false);
  const [del, setdel] = useState(false);
  useEffect(() => {
    getlist();
    console.log("click");
  }, [toggle, del]);

  function getlist(e) {
    axios.get(`http://localhost:3059/posts`).then((data) => {
      setData(data.data);
    });
  }

  return (
    <div>
      {" "}
      {toggle ? (
        <Editpost seettoggle={seettoggle} toggle={toggle} id={id} />
      ) : (
        ""
      )}
      {data.length > 0 ? (
        <PostTable
          Current={data}
          seettoggle={seettoggle}
          toggle={toggle}
          setID={setID}
          setdel={setdel}
          del={del}
        />
      ) : (
        <span class="loader"></span>
      )}
    </div>
  );
}
