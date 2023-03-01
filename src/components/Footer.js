import React from "react";
import "./styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <p>Designed by The Frontend Freestylers 2023 </p>
      <p>
        <a id="GitHubLink" href="https://github.com/Nwinch1512/14-miix">
          <FontAwesomeIcon icon={faGithub} /> Nwinch1512/14-miix
        </a>
      </p>
    </footer>
  );
}

export default Footer;
