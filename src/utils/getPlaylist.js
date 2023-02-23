import React from "react";

function getPlaylist() {
  let playlist = JSON.parse(localStorage.getItem("playlist"));
  if (playlist) {
    return playlist;
  } else {
    return [];
  }
}

export default getPlaylist;
