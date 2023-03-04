import React from "react";
import "./styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <p>
        <a id="GitHubLink" href="https://github.com/RGBrain/miix">
          <FontAwesomeIcon icon={faGithub} /> RGBrain/miix
        </a>
      </p>
    </footer>
  );
}

export default Footer;
