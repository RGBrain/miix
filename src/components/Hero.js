import React from "react";
import "./styles/Hero.css";
import Video from "./assets/Hero-vid.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <div className="jumbotron">
      <video className="video-background" src={Video} autoPlay loop muted>
        {" "}
      </video>
      <h1 className="display-4">Make your mixx</h1>
      <p className="lead">Playlists for everyone to enjoy</p>
      <p className="lead">
        <a
          className="btn btn-primary btn-lg"
          id="hero-btn"
          href="#spotify-login"
          role="button"
        >
          Get started <FontAwesomeIcon icon={faSpotify} />
        </a>
      </p>
    </div>
  );
}

export default Hero;
