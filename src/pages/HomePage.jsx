import React, { useState } from "react";
import Header from "../components/Header";
import sizzle from "../assets/sizzle.mp4";
import "../styles/homepage.css";
import SideBar from "../components/SideBar";
function HomePage() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="container">
      <Header setShowNav={setShowNav} />
      {showNav && <SideBar setShowNav={setShowNav} />}
      <div>
        <video className="sizzle-container" autoPlay muted loop>
          <source src={sizzle} type="video/mp4" />
        </video>
      </div>
      <div className="name-container">
        <h2>Cullen Blanchfield</h2>
        <h4>Photographer | Filmmaker</h4>
      </div>
    </div>
  );
}

export default HomePage;
