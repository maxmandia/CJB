import React from "react";
import "../styles/sidebar.css";
import { X } from "phosphor-react";
function SideBar(props) {
  const { setShowNav } = props;
  return (
    <div className="sidebar-container">
      <X
        onClick={() => setShowNav(false)}
        className="close-icon"
        size={35}
        color="black"
        weight="bold"
      />
      <ul className="links-container">
        <li>Motion</li>
        <li>Stills</li>
        <li>Prints</li>
        <li>About</li>
      </ul>
    </div>
  );
}

export default SideBar;
