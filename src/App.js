import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

import Navigation from "./components/Navbar";
// import { Navbar } from "react-bootstrap";

import "./App.css";
import shuffleArray from "./utils/shuffleArray";
import mapSongs from "./utils/mapSongs";
import getPlaylist from "./utils/getPlaylist";
import savePlaylist from "./utils/savePlaylist";

function App() {
  const clientID = "a9911275aba546e082be4ac4a0704f39";
  const redirectURI = "http://localhost:3000";
  //Uncomment before deploying
  // const redirectURI = "https://deft-haupia-213070.netlify.app";
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const responseType = "token";
  const scope = "user-top-read";

  const [token, setToken] = useState("");
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  // Making API call to get user top 50 tracks
  const getTopTracks = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/top/tracks",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(data);
    addSongs(data.items);
    getRecommendations();
  };

  // Making API call to get recommended tracks based on seed tracks from users
  const getRecommendations = async (e) => {
    const playlist = getPlaylist();
    const playlistIDs = playlist.map((song) => song.id);
    // Shuffling playlist ID array to ensure the seeds are taken from a mixture of songs
    const shuffledPlaylist = shuffleArray(playlistIDs);
    const shuffledPlaylistSeeds = shuffledPlaylist.slice(0, 5).join(",");

    const { data } = await axios.get(
      "https://api.spotify.com/v1/recommendations",
      {
        headers: { Authorization: `Bearer ${token}` },
        params: { seed_tracks: shuffledPlaylistSeeds, limit: 10 },
      }
    );
    console.log(data);
    setPlaylist(mapSongs(data.tracks));
  };

  // Adding songs to playlist from other users and ensuring duplicates are removed
  const addSongs = (songs) => {
    let currentPlaylist = getPlaylist();
    console.log("currentPlaylist");
    console.log(currentPlaylist);
    console.log("songs");
    console.log(songs);

    const songsNotInPlaylist = mapSongs(songs).filter((song) => {
      return (
        currentPlaylist.find((existingSong) => song.id === existingSong.id) ===
        undefined
      );
    });

    console.log("songsNotInPlaylist");
    console.log(songsNotInPlaylist);

    const newPlaylist = currentPlaylist.concat(songsNotInPlaylist);
    console.log("newPlaylist");
    console.log(newPlaylist);

    setPlaylist(newPlaylist);
    savePlaylist(newPlaylist);
  };

  // function savePlaylist(playlist) {
  //   localStorage.setItem("playlist", JSON.stringify(playlist));
  // }

  const renderTracks = () => {
    return playlist.map((item) => (
      <div key={item.id} className="tracks-container">
        <h4>{item.name}</h4>
        <h5>{item.artist}</h5>
        <img src={item.imageURL} width="100" />
        <button>
          <a href={`${item.songURL}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faSpotify} />
          </a>
        </button>
      </div>
    ));
  };

  return (
    <div className="App">
      {/* <Navbar /> */}
      <header className="Miix-header">
        <h1>Miix</h1>
        <FontAwesomeIcon icon={faSpotify} />
        {!token ? (
          <a
            href={`${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=${responseType}&scope=${scope}&show_dialog=true`}
          >
            Spotify login
          </a>
        ) : (
          <button onClick={logout}>Logout</button>
        )}

        {token ? (
          <form onSubmit={getTopTracks}>
            <button type={"submit"}>Get tracks</button>
          </form>
        ) : (
          <h2>Please login</h2>
        )}

        {renderTracks()}
      </header>
    </div>
  );
}

export default App;
