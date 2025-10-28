import style from './Components.module.css'
console.log(style)

const coste = 140

const CosteHotel = ({night}) => {
    let costeTotal = coste*night
  return (
    <div >
      <h3 className={style.test}>Costo total de estadía</h3>
      {/* <p>El costo total de su estadía por {night} noche/s es:</p> */}
      {/* <span  style={{ color: "red" }}> {140*night}</span> */}
      <p>El costo total de su estadía por {night} noche/s es:</p> 
     <span  style={{ color: "red" }}> {costeTotal}</span>
    </div>
  )
}

export default CosteHotel
