import React from "react";
import "../styles/footer.css";
import { InstagramLogo } from "phosphor-react";
import { YoutubeLogo } from "phosphor-react";
import { LinkedinLogo } from "phosphor-react";
import { EnvelopeSimple } from "phosphor-react";
import IDMB from "../assets/idmb.png";
function Footer() {
  return (
    <div className="footer-container">
      <a
        href="https://www.youtube.com/channel/UCHcct3N7Bj9cFEkW_axn40Q"
        target="_blank"
        rel="noreferrer"
      >
        <YoutubeLogo color="white" size={28} />
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
  );
}

export default Footer;
