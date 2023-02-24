import axios from "axios";
import mapSongs from "./mapSongs";
import shuffleArray from "./shuffleArray";

const getTopSongs = async (token) => {
  const { data } = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log("Response");
  console.log(data);

  const songs = mapSongs(data.items);
  console.log("Top songs");
  console.log(songs);

  return songs;
};

const getRecommendedSongs = async (playlist, token) => {
  const playlistIds = playlist.map((song) => song.id);
  // Shuffling playlist ID array to ensure the seeds are taken from a mixture of songs
  const shuffledPlaylist = shuffleArray(playlistIds);
  const shuffledPlaylistSeeds = shuffledPlaylist.slice(0, 5).join(",");

  const { data } = await axios.get(
    "https://api.spotify.com/v1/recommendations",
    {
      headers: { Authorization: `Bearer ${token}` },
      params: { seed_tracks: shuffledPlaylistSeeds, limit: 10 },
    }
  );
  console.log("Response");
  console.log(data);

  const songs = mapSongs(data.tracks);
  console.log("Recommended songs");
  console.log(songs);

  return songs;
};

export { getTopSongs, getRecommendedSongs };
