//Reducers created
import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "No Scrubs",
      duration: "4:05",
    },
    {
      title: "I want it that way",
      duration: "3:43",
    },
    {
      title: "Somebday",
      duration: "4:10",
    },
    {
      title: "Macarena",
      duration: "3:10",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

//combine the Reducers
export default combineReducers({
  songs: songsReducer,
  selectedSongReducer: selectedSongReducer,
});
