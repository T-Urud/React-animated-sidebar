import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ logo, name, isClosed }) => {
  return (
    <NavLink to="/">
      <li>
        <img src={logo} alt={`${name} logo`} />
        <span className={`link-name-wrapper ${isClosed ? "hidden" : ""}`}>
          {name}
        </span>
      </li>
    </NavLink>
  );
};

export default Navigation;
