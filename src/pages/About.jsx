import React, { useContext } from "react";
import "../styles/about.css";
import { Context } from "../App";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Cullen from "../assets/aboutme2.jpeg";
import Footer from "../components/Footer";
import { ReactComponent as Logo } from "../assets/logo.svg";
import Signature from "../assets/sig.png";
function About() {
  const { showNav } = useContext(Context);

  return (
    <>
      {showNav && <SideBar />}
      <Header isBlack={true} />
      <div className="about-container">
        <img src={Cullen} alt="me" />
        <p className="bio">
          I've had the pleasure of growing up and living around the United
          States including Upstate New York, The Bay Area in California,
          Atlanta, Georgia, and Dallas, Texas. This has sparked my curiosity
          about the variety of life experiences around the world, and how
          important it is to share those stories that aren’t easily accessed.
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p className="bio">
          I'm passionate about elevating stories visually. Whether it is an
          individual's life experience, a brand's mission, or simply a group's
          purpose, my favorite challenge is transforming these expressions into
          visuals. Cinematically representing an individual's emotional
          experience is my favorite challenge as a director and cinematographer.
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p className="bio">
          Through a BFA Film Production degree from SMU, starting my production
          company, and working with acclaimed photographer and director Stewart
          Cohen for 2 years out of Dallas, I can bring a plethora of skills and
          experience to a production.
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p className="bio">Let’s create something to inspire.</p>
        <p className="bio">
          {" "}
          <img id="signature" src={Signature} alt="Signature" />
        </p>

        <Logo className="logo" />
        <Footer />
      </div>
    </>
  );
}

export default About;
