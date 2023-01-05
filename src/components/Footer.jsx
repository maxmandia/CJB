import React from "react";
import "../styles/footer.css";
import { InstagramLogo } from "phosphor-react";
import { Scroll } from "phosphor-react";
import { LinkedinLogo } from "phosphor-react";
import IDMB from "../assets/idmb.png";
function Footer() {
  return (
    <div className="footer-container">
      <a
        href="https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/UpdatedResume2023%20copy.jpg?alt=media&token=41f669aa-89a6-4763-8f4c-ded1b48f0ece"
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
        href="https://www.imdb.com/name/nm11206306/?ref_=nv_sr_srsg_0"
        target="_blank"
        rel="noreferrer"
      >
        <img id="idmb" src={IDMB} alt="idmb" />
      </a>
    </div>
  );
}

export default Footer;
