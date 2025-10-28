import style from  './Buttons.module.css'
import './button.css'


console.log(style)
const ButtonGroup = () => {
  return (
    <div>
    <button className='button1'>
      Button 1 con css
    </button>
    <button className={style.btn1}>
      Button 1 con ccs-module
    </button>
    </div>
  )
}

export default ButtonGroup
