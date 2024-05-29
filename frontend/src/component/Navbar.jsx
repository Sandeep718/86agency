import React from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to={`/`}>
        <span>userform</span>
      </NavLink>

      <NavLink to={`/postform`}>
        <span>postform</span>
      </NavLink>
      <NavLink to={`/userlist`}>
        <span>userlist</span>
      </NavLink>
      <NavLink to={`/postlist`}>
        <span>postlist</span>
      </NavLink>
      <NavLink to={`/UserAnalytics`}>
        <span>UserAnalytics</span>
      </NavLink>
    </nav>
  );
}
