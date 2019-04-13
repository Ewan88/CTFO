import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/pressMe">Press Me</Link>
    </li>
    <li>
      <Link to="/moodjournal">Mood Journal</Link>
    </li>
    <li>
      <Link to="/favourites">Favourites</Link>
    </li>
  </ul>
);

export default NavBar;
