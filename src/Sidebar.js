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
            <img src="./images/logo.svg" alt="company logo" />
          </a>
          <span className="company-name">Aurora Health</span>
        </div>
        <div className="expand-btn-container" onClick={handleClose}>
          <ExpandBtn />
        </div>
      </div>
      <div className="search-wrap">
        <div className="img-container">
          <img src="./images/icons/loupe.svg" alt="" />
        </div>
        <input type="text" name="" id="" placeholder="Search for anything..." />
      </div>
      <div className="menu-nav">
        <h2>Main</h2>
        <ul>
          <Navigation
            logo="/images/icons/home.svg"
            name="Home"
            isClosed={closed}
          />
          <Navigation logo="/images/icons/cube.svg" name="Orders" />
          <Navigation logo="/images/icons/folder.svg" name="Documentation" />
          <Navigation logo="/images/icons/map.svg" name="Map Overview" />
          <Navigation
            logo="/images/icons/chart-pie-alt.svg"
            name="Statistics"
          />
        </ul>
      </div>
      <div className="communication-nav">
        <h2>Communication</h2>
        <ul>
          <Navigation logo="/images/icons/envelope.svg" name="Communication" />
          <Navigation logo="/images/icons/users.svg" name="Couriers" />
        </ul>
      </div>
      <div className="capacity-container"></div>
      <ul>
        <Navigation logo="/images/icons/settings.svg" name="Settings" />
        <Navigation logo="/images/icons/info.svg" name="Help" />
      </ul>
    </nav>
  );
};

export default Sidebar;
