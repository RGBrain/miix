import React from "react";

function savePlaylist(playlist) {
  localStorage.setItem("playlist", JSON.stringify(playlist));
}

export default savePlaylist;
