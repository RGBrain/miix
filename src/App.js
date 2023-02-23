import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
// import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  const clientID = "a9911275aba546e082be4ac4a0704f39";
  const redirectURI = "http://localhost:3000";
  //Uncomment before deploying
  // const redirectURI = "https://deft-haupia-213070.netlify.app";
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const responseType = "token";
  const scope = "user-top-read";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [tracks, setTracks] = useState([]);
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

  // const searchArtists = async (e) => {
  //   e.preventDefault();
  //   const { data } = await axios.get("https://api.spotify.com/v1/search", {
  //     headers: { Authorization: `Bearer ${token}` },
  //     params: { q: searchKey, type: "artist" },
  //   });

  //   console.log(data);

  // };

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
    //setTracks(data.items);
    addSongs(data.items);
  };

  // Adding songs to playlist based on user top tracks
  const addSongs = (songs) => {
    let currentPlaylist = getPlaylist();
    console.log("currentPlaylist");
    console.log(currentPlaylist);
    console.log("songs");
    console.log(songs);

    const songsNotInPlaylist = songs
      .map((song) => {
        return {
          id: song.id,
          name: song.name,
          artist: song.artists[0].name,
          imageURL: song.album.images[0].url,
          songURL: song.external_urls.spotify,
        };
      })
      .filter((song) => {
        return (
          currentPlaylist.find(
            (existingSong) => song.id === existingSong.id
          ) === undefined
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

  function getPlaylist() {
    let playlist = JSON.parse(localStorage.getItem("playlist"));
    if (playlist) {
      return playlist;
    } else {
      return [];
    }
  }

  function savePlaylist(playlist) {
    localStorage.setItem("playlist", JSON.stringify(playlist));
  }

  const renderPlaylist = () => {
    //console.log(playlist);
  };

  const renderTracks = () => {
    return playlist.map((item) => (
      <div key={item.id} className="tracks-container">
        <h4>{item.name}</h4>
        <h5>{item.artist}</h5>
        {/* <h5>{item.artists[0].name}</h5> */}
        <img src={item.imageURL} width="100" />
        <button>
          <a href={`${item.songURL}`} target="_blank" rel="noreferrer">
            {/* <a href={`${item.preview_url}`} target="_blank" rel="noreferrer"> */}
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
        {renderPlaylist()}
      </header>
    </div>
  );
}

export default App;
