import { getPlaylist, savePlaylist } from "./playlistRepository";
import { getTopSongs, getRecommendedSongs } from "./SpotifyApi";

const getRecommendedSongsFromCombinedTopTracks = async (token) => {
  // Get existing playlist from local storage
  const currentPlaylist = getPlaylist();
  // Get currently logged in user's top songs
  const topSongs = await getTopSongs(token);
  // Create a new playlist by adding any new top songs to the playlist
  const newPlaylist = addNewSongsToPlaylist(topSongs, currentPlaylist);
  // Save the new playlist
  savePlaylist(newPlaylist);

  // use new playlist to get recommended songs
  return await getRecommendedSongs(newPlaylist, token);
};

const addNewSongsToPlaylist = (songs, playlist) => {
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

export default getRecommendedSongsFromCombinedTopTracks;
