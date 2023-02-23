import React from "react";

// Function to create a songs object that can be rendered on the page in the renderTracks function
const mapSongs = (songs) => {
  return songs.map((song) => {
    return {
      id: song.id,
      name: song.name,
      artist: song.artists[0].name,
      imageURL: song.album.images[0].url,
      songURL: song.external_urls.spotify,
    };
  });
};

export default mapSongs;
