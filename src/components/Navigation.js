import React from "react";

const Navigation = ({ logo, name }) => {
  return (
    <ul>
      <li>
        <span>{logo}</span>
        <span>{name}</span>
      </li>
    </ul>
  );
};

export default Navigation;
