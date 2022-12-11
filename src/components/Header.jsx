import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "../styles/header.css";
import { List } from "phosphor-react";
function Header(props) {
  const { setShowNav } = props;
  return (
    <div className="header-container">
      <div className="inner-header">
        <Logo />
        <List
          onClick={() => {
            setShowNav(true);
          }}
          color="white"
          height={40}
          width={40}
        />
      </div>
    </div>
  );
}

export default Header;
