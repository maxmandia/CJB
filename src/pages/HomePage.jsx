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
              "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NEWCUTS_REELS_APRIL_2023%2FCullenBlanchfield_DirectorDP_Reel_2023_REVISED2.mp4?alt=media&token=364788ae-bc4d-4836-afd5-556cf51d3fd8"
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
