import React, { useContext } from "react";
import { Context } from "../App";
import Header from "../components/Header";
import "../styles/homepage.css";
import SideBar from "../components/SideBar";
import { InstagramLogo } from "phosphor-react";
import { Scroll } from "phosphor-react";
import { LinkedinLogo } from "phosphor-react";
import { EnvelopeSimple } from "phosphor-react";
import IDMB from "../assets/idmb.png";
function HomePage() {
  const { showNav } = useContext(Context);
  return (
    <>
      <div className="container">
        {showNav && <SideBar />}
        <div>
          <Header isBlack={false} />
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
                "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FThumbnails%202024%2FDirectorDP_Thumbnail2.mp4?alt=media&token=64115fb1-79bf-483b-8a59-0aad276c3efc"
              }
              type="video/mp4"
            />
          </video>
        </div>
        <div className="name-container">
          <h2
            style={{
              color: "#f0c244",
            }}
          >
            Cullen Blanchfield
          </h2>
          <h4
            style={{
              color: "#f0c244",
            }}
          >
            Director / Cinematographer / Photographer
          </h4>
        </div>
      </div>
      <div className="footer-container-home">
        <a
          href="https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/UpdatedResume2023_V2.jpg?alt=media&token=feaf89a8-dbec-4111-9e44-1aeb285ca983"
          target="_blank"
          rel="noreferrer"
        >
          <Scroll color="white" size={28} />
        </a>
        <a
          href="https://www.instagram.com/cjbproductions/?hl=en"
          target={"_blank"}
          rel="noreferrer"
        >
          <InstagramLogo color="white" size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/cullenblanchfield/"
          target={"_blank"}
          rel="noreferrer"
        >
          <LinkedinLogo color="white" size={28} />
        </a>
        <a
          href="mailto: cullen@cullenblanchfield.com"
          target={"_blank"}
          rel="noreferrer"
        >
          <EnvelopeSimple color="white" size={28} />
        </a>
        <a
          href="https://www.imdb.com/name/nm11206306/?ref_=nv_sr_srsg_0"
          target="_blank"
          rel="noreferrer"
        >
          <img id="idmb" src={IDMB} alt="idmb" />
        </a>
      </div>
    </>
  );
}

export default HomePage;
