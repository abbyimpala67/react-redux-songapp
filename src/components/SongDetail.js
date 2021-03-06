import React from "react";
import { connect } from "react-redux";
const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  console.log(song);
  return (
    <div>
      <h3>Detail Song:</h3>
      <p>
        Title:{song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSongReducer };
};
export default connect(mapStateToProps)(SongDetail);
