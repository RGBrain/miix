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

export { getPlaylist, savePlaylist };
