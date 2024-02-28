import React, { useContext } from "react";
import "../styles/about.css";
import { Context } from "../App";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Cullen from "../assets/aboutme2.jpeg";
import Footer from "../components/Footer";
import Logo from "../assets/logo.png";
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
          Cullen Blanchfield is a Director/DP based in New York City,
          specializing in capturing the human condition through documentary and
          commercial projects.
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p className="bio">
          I’ve had the pleasure of growing up and living around the United
          States including Upstate New York, The San Francisco Bay Area,
          Atlanta, Dallas, and now New York City. This has sparked my curiosity
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
          Through a culmination of directing two feature documentaries, multiple
          award-winning short films, music videos, and commercials Cullen has
          started his own boutique production company, “Essence Picture
          Company”.
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <div>
          <span
            className="bio"
            style={{
              fontWeight: "bold",
              color: "#F0C244",
              fontSize: "20px",
              margin: "20px 0px",
            }}
          >
            About Essence Picture Company
          </span>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p className="bio">
            Founded and directed by award-winning cinematographer and
            photographer, Cullen Blanchfield, our boutique production company
            specializes in seamlessly blending stills and motion to bring
            human-based projects to life. Essence Productions is the culmination
            of over 7 years of industry experience, including 3 years working at
            Stewart Cohen Pictures, a production company in Dallas, Texas.
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p className="bio">
            While Essence's roots are firmly planted in NYC, our lens has
            traversed the globe, capturing the essence of diverse narratives in
            places like Buenos Aires, Montevideo, Ireland, Mexico, Dallas, San
            Francisco, and beyond.
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p className="bio">
            "Essence" refers to the intrinsic nature or indispensable quality of
            something, often considered as the most important or defining
            characteristic that captures the core or fundamental aspect of that
            thing. It is the inherent, unchanging nature or identity that gives
            something its distinctiveness. In a broader sense, "essence" can
            also refer to the characteristic features or qualities that define a
            person, object, concept, or phenomenon, capturing its unique and
            essential qualities. This is what we set out to capture every time
            we pick up a camera. Let’s create something to inspire.
          </p>
        </div>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p className="bio">Let’s create something to inspire.</p>\
        <p className="bio">650-793-2828</p>
        <p className="bio">cullen@cullenblanchfield.com</p>
        <p className="bio">New York, NY, 10128</p>
        <p className="bio">
          {" "}
          <img id="signature" src={Signature} alt="Signature" />
        </p>
        <div
          style={{
            height: "100px",
            width: "100px",
            margin: "auto",
          }}
        >
          <img
            style={{
              height: "100px",
              width: "100px",
            }}
            src={Logo}
            alt=""
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
