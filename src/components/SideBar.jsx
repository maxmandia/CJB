import React, { useContext } from "react";
import { Context } from "../App";
import "../styles/sidebar.css";
import { X } from "phosphor-react";
import { Link } from "react-router-dom";

function SideBar() {
  const { setShowNav } = useContext(Context);
  return (
    <div className="sidebar-container">
      <X
        style={{ cursor: "pointer" }}
        onClick={() => setShowNav(false)}
        className="close-icon"
        size={35}
        color="black"
        weight="bold"
      />
      <ul className="links-container">
        <Link
          onClick={() => setShowNav(false)}
          className="link-sidebar"
          to={"/projects"}
        >
          Projects
        </Link>
        <Link
          onClick={() => setShowNav(false)}
          className="link-sidebar"
          to={"/motion"}
        >
          Motion
        </Link>
        <Link
          onClick={() => setShowNav(false)}
          className="link-sidebar"
          to={"/stills"}
        >
          Stills
        </Link>
        <Link
          onClick={() => setShowNav(false)}
          className="link-sidebar"
          to={"/about"}
        >
          About
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
