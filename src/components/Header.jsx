import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "../styles/header.css";
import { List } from "phosphor-react";
import { Outlet, Link } from "react-router-dom";

function Header(props) {
  const { setShowNav } = props;
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div className="header-container">
      <div className="inner-header">
        <Logo />
        {width <= 500 ? (
          <List
            onClick={() => {
              setShowNav(true);
            }}
            color="white"
            height={40}
            width={40}
          />
        ) : (
          <nav>
            <Link className="link" to={"/motion"}>
              Motion
            </Link>
            <Link className="link" to={"/motion"}>
              Stills
            </Link>
            <Link className="link" to={"/motion"}>
              Prints
            </Link>
            <Link className="link" to={"/motion"}>
              About
            </Link>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Header;
