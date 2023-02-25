import React from "react";
import "./styles/Hero.css";
import Video from "./assets/Hero-vid.mp4";

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
          href="get-started"
          role="button"
        >
          Get started
        </a>
      </p>
    </div>
  );
}

export default Hero;
