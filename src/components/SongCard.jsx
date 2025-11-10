import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";
const styles = {
    backgroundColor:'pink',
fontFamily:'roboto',
padding: '3px'
}
const SongCard = ({song, onDelete, index}) => {
    const {title, artist} = song
  return (
    <li>
     <p style={styles}> <strong>{title} </strong> {artist}</p>
     <button onClick={() => onDelete(index)} style={{backgroundColor:'red'}}> <FaTrash /> Eliminar</button>
    </li>
  )
}

export default SongCard
