import axios from "axios";
import React, { useEffect, useState } from "react";

import "../style/analytic.css";
function Analytics() {
  const [userdata, setUserData] = useState([]);
  const [postdata, setPostData] = useState([]);
  const [likepost, setlikepost] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    fetchuserdata();
    fetchpostdata();
    fetchlikepost();
    setloading(false);
  }, []);
  function fetchuserdata() {
    axios
      .get(`http://localhost:3059/users`)
      .then((data) => {
        setUserData(data.data);
        console.log(data.data);
      });
  }
  function fetchpostdata() {
    axios
      .get(`http://localhost:3059/posts`)
      .then((data) => {
        setPostData(data.data);
      });
  }
  function fetchlikepost() {
    axios
      .get(`http://localhost:3059/posts/top-liked`)
      .then((data) => {
        setlikepost(data.data);
      });
  }
  return (
    <div className="grid">
      <div>
        <h3> total number of users</h3>
        <div className="number">
          {loading ? <span class="loader"></span> : userdata.length}
        </div>
      </div>
      <div>
        <h3> total number of post</h3>
        <div className="number">
          {loading ? <span class="loader"></span> : postdata.length}
        </div>
      </div>
      <div>
        <h3> 5 most liked post</h3>
        {loading ? (
          <span class="loader"></span>
        ) : (
          likepost?.map((el) => {
            return (
              <div className="commentbox">
                <div>
                  <span>content :-</span>
                  <span>{el.content}</span>
                </div>
                <div>
                  <span>👍</span>
                  <span>{el.likes}</span>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div>
        <h3> active users</h3>
        {loading ? (
          <span class="loader"></span>
        ) : (
          userdata?.map((el) => {
            return (
              <div className="commentbox">
                <div>
                  <span>name :-</span>
                  <span>{el.name}</span>
                </div>
                <div>
                  <span>email :-</span>
                  <span>{el.email}</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Analytics;
