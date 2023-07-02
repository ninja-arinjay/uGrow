import React from "react";
import NonTrackPlay from "./nonTrackPlay";
import TrackPlay from "./trackPlay";

const player = ({ location }) => {
  console.log(location)
  let playlistID = location.playlistID
  if (playlistID === undefined) {
    playlistID = localStorage.getItem("playlist-id");
  } else {
    localStorage.setItem("playlist-id", playlistID);
  }
  console.log('playlist', playlistID);
  let tracking = location.tracking;
  if (tracking === undefined) {
    tracking = localStorage.getItem("tracking");
  } else {
    localStorage.setItem("tracking", tracking);
  }
  console.log(tracking);
  if (tracking === true) {
    return <TrackPlay playlistID={playlistID} />;
  } else {
    return <NonTrackPlay playlistID={playlistID} />;
  }
};

export default player;
