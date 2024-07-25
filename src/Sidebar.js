import React, { useState } from "react";
import Navigation from "./components/Navigation";
import ExpandBtn from "./components/btn/ExpandBtn";

const Sidebar = () => {
  const [closed, isClosed] = useState(false);

  const handleClose = () => {
    isClosed(!closed);
  };

  return (
    <nav className={`${closed ? "small" : ""} sidebar`}>
      <div className="top-wrapper">
        <div className="top">
          <a href="#" className="logo-wrap">
            <img src="./images/logo.svg" alt="" />
          </a>
          <span className="company-name">Aurora Health</span>
        </div>
        <div className="expand-btn-container" onClick={handleClose}>
          <ExpandBtn />
        </div>
      </div>
      <div className="search-wrap">
        <input type="text" name="" id="" />
      </div>
      <div className="menu-nav">
        <h2>Menu</h2>
        <Navigation logo="/images/icons/home.svg" name="Home" />
        <Navigation logo="/images/icons/cube.svg" name="Orders" />
        <Navigation logo="/images/icons/folder.svg" name="Documentation" />
        <Navigation logo="/images/icons/map.svg" name="Map Overview" />
        <Navigation logo="/images/icons/chart-pie-alt.svg" name="Statistics" />
      </div>
      <div className="communication-nav">
        <h2>Communication</h2>
        <Navigation logo="/images/icons/envelope.svg" name="Communication" />
        <Navigation logo="/images/icons/users.svg" name="Couriers" />
      </div>
      <div className="capacity-container"></div>
      <Navigation logo="/images/icons/settings.svg" name="Settings" />
      <Navigation logo="/images/icons/info.svg" name="Help" />
    </nav>
  );
};

export default Sidebar;
