import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center"></a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movie">Movie</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
