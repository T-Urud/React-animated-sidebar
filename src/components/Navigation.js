import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ logo, name }) => {
  return (
    <ul>
      <NavLink>
        <li>
          <img src={logo} alt={`${name} logo`} />
          <span>{name}</span>
        </li>
      </NavLink>
    </ul>
  );
};

export default Navigation;
