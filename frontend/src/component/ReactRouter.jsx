import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import PostForm from "./PostForm";
import UserForm from "./UserForm";
import List from "./List";
import PostList from "./PostList";
import Analytics from "./Analytics";

function ReactRouter() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/postform" element={<PostForm />} />
        <Route path="/userlist" element={<List />} />
        <Route path="/postlist" element={<PostList />} />
        <Route path="/UserAnalytics" element={<Analytics />} />
        <Route path="/" element={<UserForm />} />
      </Routes>
    </div>
  );
}

export default ReactRouter;
