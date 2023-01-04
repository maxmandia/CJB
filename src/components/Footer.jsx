import React from "react";
import "../styles/footer.css";
import { InstagramLogo } from "phosphor-react";
import { Scroll } from "phosphor-react";
import { LinkedinLogo } from "phosphor-react";

function Footer() {
  return (
    <div className="footer-container">
      <a href="">
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
    </div>
  );
}

export default Footer;