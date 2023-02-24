import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

import Navigation from "./components/Navbar";

// import { Navbar } from "react-bootstrap";

import "./App.css";
import getPlaylist from "./utils/getPlaylist";
import savePlaylist from "./utils/savePlaylist";
import renderTracks from "./utils/renderTracks";
import { getTopSongs, getRecommendedSongs } from "./utils/API";
import getSongsNotInPlaylist from "./utils/getSongsNotInPlaylist";

// const App = (props) => {
function App() {
  const clientID = "a9911275aba546e082be4ac4a0704f39";
  const redirectURI = "http://localhost:3000";
  //Uncomment before deploying
  // const redirectURI = "https://deft-haupia-213070.netlify.app";
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const responseType = "token";
  const scope = "user-top-read";

  // Token needed for Oauth
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
    addSongsToCurrentPlaylist(await getTopSongs(token));
    getRecommendations();
  };

  // Adding songs to playlist from other users and ensuring duplicates are removed
  const addSongsToCurrentPlaylist = (mappedSongs) => {
    console.log("Add mapped songs:");
    console.log(mappedSongs);

    let currentPlaylist = getPlaylist();
    console.log("To current playlist:");
    console.log(currentPlaylist);

    const songsNotInPlaylist = getSongsNotInPlaylist(
      currentPlaylist,
      mappedSongs
    );

    console.log("The following songs are not in current playlist");
    console.log(songsNotInPlaylist);

    const newPlaylist = currentPlaylist.concat(songsNotInPlaylist);
    console.log("New playlist with added songs:");
    console.log(newPlaylist);
    savePlaylist(newPlaylist);
  };

  // Making API call to get recommended tracks based on seed tracks from users
  const getRecommendations = async (e) => {
    const playlist = getPlaylist();
    const recommendedSongs = await getRecommendedSongs(playlist, token);
    setPlaylist(recommendedSongs);
  };

  return (
    <div className="App">
      <Navigation />

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
        {renderTracks(playlist)}
      </header>
    </div>
  );
}

export default App;
