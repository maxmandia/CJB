import React, { useContext } from "react";
import { Context } from "../App";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "../styles/stills.css";
import YellowFolder from "../assets/yellow-folder.png";
import { Link } from "react-router-dom";

function Stills() {
  const { showNav } = useContext(Context);

  return (
    <div className="stills-container">
      {showNav && <SideBar />}
      <Header isBlack={false} />
      <div className="all-folders-container">
        <Link style={{ "text-decoration": "none" }} to={"/stills/portraits"}>
          <div className="folder-container">
            <img className="folder" src={YellowFolder} alt="folder" />
            <p>PORTRAITS</p>
          </div>
        </Link>
        <Link style={{ "text-decoration": "none" }} to={"/stills/lifestyle"}>
          <div className="folder-container">
            <img className="folder" src={YellowFolder} alt="folder" />
            <p>LIFESTYLE</p>
          </div>
        </Link>
        <Link style={{ "text-decoration": "none" }} to={"/stills/landscapes"}>
          <div className="folder-container">
            <img className="folder" src={YellowFolder} alt="folder" />
            <p>LANDSCAPE</p>
          </div>
        </Link>
        <Link style={{ "text-decoration": "none" }} to={"/stills/Architecture"}>
          <div className="folder-container">
            <img className="folder" src={YellowFolder} alt="folder" />
            <p>ARCHITECTURE</p>
          </div>
        </Link>
        <Link style={{ "text-decoration": "none" }} to={"/stills/Jewelry"}>
          <div className="folder-container">
            <img className="folder" src={YellowFolder} alt="folder" />
            <p>JEWELRY</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Stills;
