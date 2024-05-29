import axios from "axios";

export default function PostTable({
  Current,
  setdel,
  seettoggle,
  toggle,
  setID,
  del,
}) {
  function like(id) {
    axios
      .post(`http://localhost:3059/posts/${id}/like`)
      .then((data) => {
        console.log(data.data);
        setdel(!del);
      });
  }
  function unlike(id) {
    axios
      .post(`http://localhost:3059/posts/${id}/unlike`)
      .then((data) => {
        setdel(!del);
      });
  }

  function handleupdate(id) {
    seettoggle(!toggle);
    setID(id);
  }

  function handledelete(id) {
    axios
      .delete(`http://localhost:3059/posts/${id}`)
      .then((data) => {
        setdel(!del);
      });
  }

  return (
    <table style={{ width: "70%" }}>
      <thead>
        <tr>
          <th>content</th>
          <th>Likes</th>
          <th>unlike</th>
          <th>like</th>
          {/* <th>view</th> */}
          <th>update</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody id="body">
        {Current.map((el, i) => {
          return (
            <tr key={i}>
              <th>{el.content}</th>
              <th>{el.likes}</th>{" "}
              <th>
                <button
                  disabled={el.likes < 1}
                  className="button-4"
                  onClick={() => {
                    unlike(el._id);
                  }}
                >
                  👎
                </button>
              </th>
              <th>
                <button
                  className="button-4"
                  onClick={() => {
                    like(el._id);
                  }}
                >
                  👍
                </button>
              </th>
              {/* <th>
                <button className="button-4">view</button>
              </th> */}
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
                  className="button-4"
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
