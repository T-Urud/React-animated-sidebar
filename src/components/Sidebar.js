import React from "react";
import Navigation from "./Navigation";
import ExpandBtn from "./btn/ExpandBtn";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="top-wrapper">
        <div className="top">
          <a href="#" className="logo-wrap">
            <img src="./images/logo.svg" alt="" />
          </a>
          <span className="company-name">Aurora Health</span>
        </div>
        <ExpandBtn />
      </div>
      <div className="search-wrap">
        <input type="text" name="" id="" />
      </div>
      <div className="menu-nav">
        <h2>Menu</h2>
        <Navigation logo="" name="1" />
        <Navigation logo="" name="2" />
        <Navigation logo="" name="3" />
        <Navigation logo="" name="4" />
      </div>
    </nav>
  );
};

export default Sidebar;
