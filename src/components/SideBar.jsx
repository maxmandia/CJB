import React, { useContext } from "react";
import { Context } from "../App";
import "../styles/sidebar.css";
import { X } from "phosphor-react";
import { Outlet, Link } from "react-router-dom";

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
        <Link className="link-sidebar" to={"/motion"}>
          Motion
        </Link>
        <Link className="link-sidebar" to={"/motion"}>
          Stills
        </Link>
        <Link className="link-sidebar" to={"/motion"}>
          Prints
        </Link>
        <Link className="link-sidebar" to={"/motion"}>
          About
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
