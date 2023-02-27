import React from "react";
import ReactDOM from "react-dom";
import SpotifyPlayer from "react-spotify-web-playback";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Playlist.css";

const playTrack = (trackId, token) => {
  console.log("Play track");
  console.log(trackId);
  ReactDOM.render(
    <React.Fragment>
      <SpotifyPlayer
        token={token}
        // Need to pass in a playlist id into context_url
        // context_uri={INSERT PLAYLIST ID}
        uris={`spotify:track:${trackId}`}
        autoPlay="true"
      />
    </React.Fragment>,
    document.querySelector("#player")
  );
};

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
        <button
          className="songBtn songLink"
          data-spotify-track-id={item.id}
          onClick={(e) => {
            playTrack(item.id, token);
          }}
        >
          <FontAwesomeIcon icon={faSpotify} />
        </button>
      </div>
    );
  });
};

export default RenderPlaylist;
