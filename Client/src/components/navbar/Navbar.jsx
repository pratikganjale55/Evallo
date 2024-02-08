import React from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navContainer">
        <h1>Content Creators</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="content">Content</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
