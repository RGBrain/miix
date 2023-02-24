function savePlaylist(playlist) {
  localStorage.setItem("playlist", JSON.stringify(playlist));
  console.log("Saved new playlist");
}

export default savePlaylist;
