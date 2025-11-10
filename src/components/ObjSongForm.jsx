import { useState } from "react";

const ObjSongForm = ({ addSong }) => {
  const [song, setSong] = useState({
    title: "",
    artist: "",
  });

  const handleChange = (e) => {
    setSong((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(song);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={song.title}
        onChange={handleChange}
        placeholder="Título de la canción"
      />
      <input
        type="text"
        name="artist"
        value={song.artist}
        onChange={handleChange}
        placeholder="artista"
      />

      <button type="submit">Agregar</button>
    </form>
  );
};

export default ObjSongForm;
