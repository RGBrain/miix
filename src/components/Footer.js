import React from "react";
import "./styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
            <p>Designed by The Frontend Freestylers 2023  </p>
            <p><FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/Nwinch1512/14-miix">Nwinch1512/14-miix</a></p>
        </footer>
  );
}

export default Footer;
