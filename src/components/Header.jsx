import React, { useState, useEffect, useContext } from "react";
import { Context } from "../App";
import Logo from "../assets/logo.png";
import "../styles/header.css";
import { List } from "phosphor-react";
import { Link } from "react-router-dom";

function Header(props) {
  const { isBlack } = props;
  const { setShowNav } = useContext(Context);
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
    <div className={!isBlack ? "header-container" : "header-container-black"}>
      <div className="inner-header">
        <Link to={"/"}>
          <img
            style={{
              height: "130px",
              width: "130px",
            }}
            src={Logo}
            alt="logo"
          />
        </Link>
        {width <= 500 ? (
          <List
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShowNav(true);
            }}
            color="#F0C244"
            height={40}
            width={40}
          />
        ) : (
          <nav>
            <Link className="link" to={"/motion"}>
              Motion
            </Link>
            <Link className="link" to={"/stills"}>
              Stills
            </Link>
            <Link className="link" to={"/about"}>
              About
            </Link>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Header;
