import SongCard from "./SongCard.jsx";
import style from './SongList.module.css'

const SongList = ({ songs, onDelete }) => {
  return (
   <div className={style.module}>
     <ul className='song-list'>
      {songs.map((song, index) => (
        <SongCard
          key={index}
          song={song}
          index={index}
          onDelete={onDelete}
        />
      ))}
    </ul>
   </div>
  );
};

export default SongList;
