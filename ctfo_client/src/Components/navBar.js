import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div>
  <div class="container" onclick="myFunction(this)">
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
</div>
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
      <Link to="/parkfinder">Park Finder</Link>
    </li>
    <li>
      <Link to="/favourites">Favourites</Link>
    </li>
  </ul>
  </div>
);

export default NavBar;
