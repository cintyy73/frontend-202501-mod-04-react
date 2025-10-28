import { BiCart, BiCartAdd } from 'react-icons/bi';
import style from  './Buttons.module.css'
import { BsDownload } from 'react-icons/bs';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

console.log(style)
const ButtonModule = () => {
  return (
    <div>
 
    <button className={style.btn2}>
       <BsDownload /> Button Module con ccs-module <FaRegArrowAltCircleRight/> <BiCartAdd />
       </button>
    </div>
  )
}

export default ButtonModule
