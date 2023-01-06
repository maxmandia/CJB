import React, { useContext } from "react";
import { Context } from "../App";
import Header from "../components/Header";
import "../styles/homepage.css";
import SideBar from "../components/SideBar";
function HomePage() {
  const { showNav } = useContext(Context);
  return (
    <div className="container">
      <Header isBlack={false} />
      {showNav && <SideBar />}
      <div>
        <video
          className="sizzle-container"
          autoPlay
          muted
          loop
          defaultMuted
          playsInline
        >
          <source
            src={
              "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/sizzle.mp4?alt=media&token=26ef66b4-be9b-45c2-b8a1-677963f92c6f"
            }
            type="video/mp4"
          />
        </video>
      </div>
      <div className="name-container">
        <h2>Cullen Blanchfield</h2>
        <h4>Photographer | Director | Cinematographer | Editor</h4>
      </div>
    </div>
  );
}

export default HomePage;
