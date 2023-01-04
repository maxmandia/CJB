import React, { useContext } from "react";
import "../styles/about.css";
import { Context } from "../App";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Cullen from "../assets/aboutme2.jpeg";
function About() {
  const { showNav } = useContext(Context);

  return (
    <>
      {showNav && <SideBar />}
      <Header isBlack={true} />
      <div className="about-container">
        <img src={Cullen} alt="me" />
        <p className="bio">
          I'm passionate about elevating stories visually. Whether it is an
          individual's life experience, a brand's mission, or simply a group's
          purpose, my favorite challenge is transforming these expressions into
          visuals.
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p className="bio">
          Through a BFA Film Production degree from SMU, starting my personal
          production company, and working with acclaimed photographer and
          director Stewart Cohen for 2 years out of Dallas, I am able to bring a
          plethora of skills and experience to a production.
        </p>
      </div>
    </>
  );
}

export default About;
