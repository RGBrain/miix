const addSongsToPlaylist = (songs, playlist) => {
  console.log("Add songs:");
  console.log(songs);

  console.log("To playlist:");
  console.log(playlist);

  const songsNotInPlaylist = songs.filter((song) => {
    return (
      playlist.find((existingSong) => song.id === existingSong.id) === undefined
    );
  });

  console.log("The following songs are not in current playlist");
  console.log(songsNotInPlaylist);

  const newPlaylist = playlist.concat(songsNotInPlaylist);
  console.log("New playlist with added songs:");
  console.log(newPlaylist);

  return newPlaylist;
};

export default addSongsToPlaylist;
