import { useState } from "react";
import "./app.css";
import ObjSongForm from "./components/ObjSongForm.jsx";
import SongList from "./components/SongList.jsx";

import { FaMusic } from "react-icons/fa";

function App() {
  const initialSongs = JSON.parse(localStorage.getItem("songs")) || [];
  const [songs, setSongs] = useState(initialSongs);

  const addSong = (newSong) => {
    let data = [...songs, newSong];
    setSongs(data);
    saveLocalStorage(data);
    console.log(songs);
  };

  const onDelete = (index) => {
    const songsUpdated = songs.filter((song, i) => i !== index);
    setSongs(songsUpdated);
  };

  const saveLocalStorage = (data) => {
    localStorage.setItem("songs", JSON.stringify(data));
  };
  return (
    <div className='app-container'>
      <h1>
        <FaMusic /> Mi play List
      </h1>
      <ObjSongForm addSong={addSong} />
      {songs.length > 0 ? (
        <SongList songs={songs} onDelete={onDelete} />
      ) : (
        <p>No hay canciones todavía 🎧</p>
      )}
    </div>
  );
}

export default App;
