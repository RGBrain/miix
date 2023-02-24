import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

const RenderPlaylist = (playlist) => {
  return playlist.map((item) => {
    return (
      <div key={item.id} className="tracks-container">
        <h4>{item.name}</h4>
        <h5>{item.artist}</h5>
        <img
          src={item.imageURL}
          alt={`Album art for track ${item.name} by ${item.artist}`}
          width="100"
        />
        <button>
          <a href={`${item.songURL}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faSpotify} />
          </a>
        </button>
      </div>
    );
  });
};

export default RenderPlaylist;
