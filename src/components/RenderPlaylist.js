import React from "react";
import "./styles/Playlist.css";

const RenderPlaylist = (playlist, token) => {
  return playlist.map((item) => {
    return (
      <div
        key={item.id}
        className="track-container container col-lg-12 col-md-12 col-sm-12"
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
      </div>
    );
  });
};

export default RenderPlaylist;
