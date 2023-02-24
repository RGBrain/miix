const getSongsNotInPlaylist = (currentPlaylist, mappedSongs) => {
  return mappedSongs.filter((song) => {
    return (
      currentPlaylist.find((existingSong) => song.id === existingSong.id) ===
      undefined
    );
  });
};

export default getSongsNotInPlaylist;
