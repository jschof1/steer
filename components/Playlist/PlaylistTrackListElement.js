import React from 'react';
import ReactPlayer from "react-player";

function PlaylistTrackListElement({ track }) {
  return (
    <>
    <li style={{"list-style-type": "none" }} key={track.id}>
    {console.log(track.id)}
    <a href="words"> {`${track.artist} - ${track.trackTitle}`}</a>
  <ReactPlayer
  url={track.youtubeUrl}
  playing={true}
/>
</li>
  </>
  );
}

export default PlaylistTrackListElement;

