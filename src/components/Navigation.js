import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ logo, name }) => {
  return (
    <NavLink>
      <li>
        <img src={logo} alt={`${name} logo`} />
        <span className="link-name-wrapper">{name}</span>
      </li>
    </NavLink>
  );
};

export default Navigation;
