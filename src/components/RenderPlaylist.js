import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import "./styles/Playlist.css";

const RenderPlaylist = (playlist) => {
  return playlist.map((item) => {
    return (
      <div
        key={item.id}
        className="track-container container col-lg-12 col-md-12 col-sm-3"
      >
        <img
          src={item.imageURL}
          alt={`Album art for track ${item.name} by ${item.artist}`}
          width="100"
        />
        <div className="nameAndArtist">
          <h6>{item.name}</h6>
          <p>{item.artist}</p>
        </div>
        <button className="songBtn">
          <a
            href={`${item.songURL}`}
            target="_blank"
            rel="noreferrer"
            className="songLink"
          >
            <FontAwesomeIcon icon={faSpotify} />
          </a>
        </button>
      </div>
    );
  });
};

export default RenderPlaylist;
