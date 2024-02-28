import React, { useContext } from "react";
import { Context } from "../App";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "../styles/stills.css";
import { Link } from "react-router-dom";
import Orange from "../assets/orange_01.png";
import Yellow from "../assets/yellow.png";
import Blue from "../assets/blue_02.png";
import Green from "../assets/green_02.png";
import Footer from "../components/Footer";
function Stills() {
  const { showNav } = useContext(Context);

  return (
    <div className="stills-container">
      {showNav && <SideBar />}
      <Header isBlack={false} />
      <div className="all-folders-container">
        <Link style={{ "text-decoration": "none" }} to={"/stills/portraits"}>
          <div className="folder-container">
            <img className="folder" src={Orange} alt="folder" />
            <p>PORTRAITS</p>
          </div>
        </Link>
        <Link style={{ "text-decoration": "none" }} to={"/stills/lifestyle"}>
          <div className="folder-container">
            <img className="folder" src={Yellow} alt="folder" />
            <p>LIFESTYLE</p>
          </div>
        </Link>
        <Link style={{ "text-decoration": "none" }} to={"/stills/landscapes"}>
          <div className="folder-container">
            <img className="folder" src={Blue} alt="folder" />
            <p>LANDSCAPE</p>
          </div>
        </Link>
        {/* <Link style={{ "text-decoration": "none" }} to={"/stills/Jewelry"}>
          <div className="folder-container">
            <img className="folder" src={Pink} alt="folder" />
            <p>JEWELRY</p>
          </div>
        </Link> */}
      </div>
      <Footer />
    </div>
  );
}

export default Stills;
